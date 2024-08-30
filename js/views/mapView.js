class MapView {
  constructor(data) {
    this.data = data;
    this.width = 300;
    this.height = 300;
    this.totalCells = this.width * this.height;
    this.cellSize = 3;

    this.#initMap();
  }

  #initMap() {
    this.percentages = [
      { type: "ocean", quantity: 20, color: "#" },
      { type: "lake", quantity: 5 },
      { type: "forest", quantity: 15 },
      { type: "infrastructure", quantity: 5 },
      { type: "agriculture", quantity: 25 },
      { type: "mountain", quantity: 10 },
    ];

    const storedMap = localStorage.getItem("map");
    if (storedMap) {
      this.mapGrid = JSON.parse(storedMap);
    } else {
      this.mapGrid = Array.from({ length: this.height }, () =>
        Array(this.width).fill("")
      );
      this.#createMap();
      localStorage.setItem("map", JSON.stringify(this.mapGrid));
    }

    this.drawMap();
  }

  #createMap() {
    let cellsToAssign = this.totalCells;
    let x = 0;
    let y = 0;

    while (cellsToAssign > 0) {
      if (x >= this.width) {
        x = 0;
        y++;
      }
      if (this.#isOceanCell(x, y) > 0.6) this.mapGrid[y][x] = "water";
      else if (this.#isOceanCell(x, y) > 0.55) this.mapGrid[y][x] = "sand";
      else this.mapGrid[y][x] = "field";
      x++;
      cellsToAssign--;
    }

    this.#placeTerrain("forest", 50, 15, 30);
    this.#placeTerrain("field", 10, 10, 10);
    this.#placeTerrain("mountain", 2, 20, 21);
    this.#randomizeMap(30);
    this.#placeTerrain("water", 3, 10, 10);
    this.#placeTerrain("agriculture", 7, 7, 20);
    this.#randomizeMap(5);
    this.#placeTerrain("infrastructure", 7, 4, 6);
  }

  #isOceanCell(givenX, givenY) {
    const x = Math.abs(0.5 - givenX / this.width);
    const y = Math.abs(0.5 - givenY / this.height);
    const distanceFromCenter = Math.sqrt(x * x + y * y);

    return distanceFromCenter;
  }

  drawMap() {
    const canvas = document.getElementById("mapCanvas");
    const ctx = canvas.getContext("2d");

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        ctx.fillStyle = this.#getCellColor(this.mapGrid[y][x]);
        ctx.fillRect(
          x * this.cellSize,
          y * this.cellSize,
          this.cellSize,
          this.cellSize
        );
      }
    }
  }

  #placeTerrain(type, count, minSize, sizeRange) {
    for (let i = 0; i < count; i++) {
      const targetX = Math.floor(Math.random() * this.width);
      const targetY = Math.floor(Math.random() * this.height);

      if (
        this.mapGrid[targetY][targetX] === "forest" ||
        this.mapGrid[targetY][targetX] === "field"
      ) {
        const randomSize = Math.round(Math.random() * sizeRange + minSize);
        this.mapGrid[targetY][targetX] = type;
        this.#widenCell(targetX, targetY, type, randomSize);
      } else {
        i--;
      }
    }
  }

  #widenCell(x, y, type, times) {
    let cellsToExpand = [{ x, y }];

    for (let i = 0; i < times; i++) {
      let newCells = [];

      for (let cell of cellsToExpand) {
        const { x, y } = cell;
        this.#widenCellType(x, y, type, newCells);
      }

      cellsToExpand = newCells;
    }
  }

  #widenCellType(x, y, type, newCells) {
    const directions = [
      [0, -1],
      [-1, 0],
      [1, 0],
      [0, 1],
    ];

    if (type != "infrastructure") {
      directions[Math.floor(Math.random() * 4)] = [0, 0];
    }

    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (this.#isValidCell(newX, newY)) {
        if (type === "forest") {
          if (
            this.mapGrid[newY][newX] === "field" ||
            type === "infrastructure"
          ) {
            this.mapGrid[newY][newX] = type;
            newCells.push({ x: newX, y: newY });
          }
        } else if (type === "field") {
          if (
            this.mapGrid[newY][newX] === "forest" ||
            type === "infrastructure"
          ) {
            this.mapGrid[newY][newX] = type;
            newCells.push({ x: newX, y: newY });
          }
        } else if (
          this.mapGrid[newY][newX] === "field" ||
          this.mapGrid[newY][newX] === "forest" ||
          type === "infrastructure"
        ) {
          this.mapGrid[newY][newX] = type;
          newCells.push({ x: newX, y: newY });
        }
      }
    }
  }

  #isValidCell(x, y) {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }

  #getCellColor(cellType) {
    switch (cellType) {
      case "water":
        return "#3d85c6";
      case "sand":
        return "#C2B280";
      case "field":
        return "#74b356";
      case "forest":
        return "#235c08";
      case "infrastructure":
        return "#333333";
      case "agriculture":
        return "#FFFF00";
      case "mountain":
        return "#A9A9A9";
      default:
        return "#FFFFFF";
    }
  }

  #randomizeMap(n) {
    for (let i = 0; i < n; i++) {
      const newMapGrid = this.mapGrid.map((row, y) =>
        row.map((cell, x) => this.#randomizeCell(x, y))
      );
      this.mapGrid = newMapGrid;
    }

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (!this.#hasSameTypeNeighbor(x, y)) {
          this.mapGrid[y][x] = "field";
        }
      }
    }
  }

  #randomizeCell(x, y) {
    const currentType = this.mapGrid[y][x];
    if (Math.random() < 0.5) return currentType;

    const neighbors = this.#getNeighboringCells(x, y).filter(
      ({ type }) => type !== ""
    );
    if (neighbors.length === 0) return currentType;

    const randomNeighbor =
      neighbors[Math.floor(Math.random() * neighbors.length)];
    return randomNeighbor.type;
  }

  #getNeighboringCells(x, y) {
    const directions = [
      [0, -1],
      [-1, 0],
      [1, 0],
      [0, 1],
    ];

    directions[Math.floor(Math.random() * 4)] = [0, 0];

    return directions
      .map(([dx, dy]) => {
        const newX = x + dx;
        const newY = y + dy;
        if (this.#isValidCell(newX, newY)) {
          return { x: newX, y: newY, type: this.mapGrid[newY][newX] };
        }
        return null;
      })
      .filter((cell) => cell !== null);
  }

  #hasSameTypeNeighbor(x, y) {
    const cellType = this.mapGrid[y][x];
    if (cellType === "") return false;

    return this.#getNeighboringCells(x, y).some(
      ({ type }) => type === cellType
    );
  }
}

export default MapView;
