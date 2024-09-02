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
    console.log(this.data);
    this.numOfCities = this.data.activeCountry.cities.length;

    this.percentages = [
      { type: "ocean", quantity: 20 },
      { type: "lake", quantity: 5 },
      { type: "forest", quantity: 15 },
      { type: "infrastructure", quantity: 5 },
      { type: "agriculture", quantity: 25 },
      { type: "mountain", quantity: 10 },
    ];

    /*const storedMap = localStorage.getItem("map");
    if (storedMap) {
      this.mapGrid = JSON.parse(storedMap);
    } else {
      this.mapGrid = Array.from({ length: this.height }, () =>
        Array(this.width).fill("")
      );
      this.#createMap();
      localStorage.setItem("map", JSON.stringify(this.mapGrid));
    }*/

    this.mapGrid = Array.from({ length: this.height }, () =>
      Array(this.width).fill("")
    );
    this.#createMap('country');
    this.drawMap();
  }

  #createMap(state) {
    //change condition
    if (state === "country") {
      this.canvas = document.querySelector(".map__country");
      this.#initializeBaseTerrain("country");
      this.#placeTerrainFeatures("country");
      this.#getEpicentres();
    } else if (state === "world") {
      this.canvas = document.querySelector(".map__world");
      this.#initializeBaseTerrain("world");
      this.#placeCountries("world");
    }
  }

  #initializeBaseTerrain(option) {
    if (option === "country") {
      let x = 0;
      let y = 0;

      for (let i = 0; i < this.totalCells; i++) {
        if (x >= this.width) {
          x = 0;
          y++;
        }

        this.mapGrid[y][x] = this.#determineBaseTerrain(x, y);
        x++;
      }
    } else if (option === "world") {
      let x = 0;
      let y = 0;

      for (let i = 0; i < this.totalCells; i++) {
        if (x >= this.width) {
          x = 0;
          y++;
        }

        this.mapGrid[y][x] = "water";
        x++;
      }
    }
  }

  #determineBaseTerrain(x, y) {
    const distanceFromCenter = this.#isOceanCell(x, y);
    if (distanceFromCenter > 0.6) return "water";
    if (distanceFromCenter > 0.55) return "sand";
    return "field";
  }

  #isOceanCell(givenX, givenY) {
    const x = Math.abs(0.5 - givenX / this.width);
    const y = Math.abs(0.5 - givenY / this.height);
    const distanceFromCenter = Math.sqrt(x * x + y * y);
    return distanceFromCenter;
  }

  #placeTerrainFeatures() {
    this.epicentrTypes = [];
    this.newEpicentrTypes = {};

    this.#placeTerrain("forest", 30, 15, 30);
    this.#placeTerrain("field", 10, 10, 10);
    this.#placeClosed(100, 20, 20);
    this.#placeTerrain("mountain", Math.round(Math.random() * 3), 5, 20);
    this.#randomizeMap(70);
    this.#placeTerrain("water", Math.round(Math.random() * 6 + 1), 3, 5);
    this.#placeTerrain("agriculture", 15, 5, 10);
    this.#placeTerrain("animals", 5, 5, 1);
    this.#randomizeMap(5);
    this.#placeInfrastructure();
  }

  #placeInfrastructure() {
    let cities = this.data.activeCountry.cities;
    let maxSize = cities.reduce(
      (acc, city) =>
        acc > Number(city.populationIndex) ? acc : Number(city.populationIndex),
      0
    );
    for (let i = 0; i < cities.length; i++) {
      const targetX = Math.floor(Math.random() * this.width);
      const targetY = Math.floor(Math.random() * this.height);
      const distanceFromCenter = this.#isOceanCell(targetX, targetY);

      if (distanceFromCenter < 0.6) {
        this.epicentrTypes.push([
          targetX,
          targetY,
          "infrastructure",
          cities[i].name,
        ]);
        const size = this.data.activeCountry.cities[i].populationIndex;
        const relativeSize = Math.round((size / maxSize) * 7);

        this.mapGrid[targetY][targetX] = "infrastructure";
        this.#widenCell(targetX, targetY, "infrastructure", relativeSize);
      } else {
        i--;
      }
    }
  }

  #placeCountries() {
    this.epicentrTypes = [];
    this.newEpicentrTypes = {};

    let countries = this.data.countries;
    let maxSize = countries.reduce(
      (acc, country) =>
        acc > Number(country.populationIndex)
          ? acc
          : Number(country.populationIndex),
      0
    );
    for (let i = 0; i < countries.length; i++) {
      const targetX = Math.floor(Math.random() * this.width);
      const targetY = Math.floor(Math.random() * this.height);

      if (
        this.#checkDistanceCountry(this.epicentrTypes, targetX, targetY) &&
        targetX > 20 &&
        targetY > 20 &&
        targetX < this.width - 20 &&
        targetY < this.height - 20
      ) {
        this.epicentrTypes.push([
          targetX,
          targetY,
          "country",
          countries[i].name,
        ]);
        const size = this.data.countries[i].populationIndex;
        const relativeSize = Math.round((size / maxSize) * 25);
        this.mapGrid[targetY][targetX] = "field";

        this.#widenCountry(targetX, targetY, relativeSize);
      } else {
        i--;
      }
    }
  }

  #widenCountry(x, y, size) {
    let cellsToExpand = [{ x, y }];
    const center = { x, y };

    for (let i = 0; i < size; i++) {
      let newCells = [];

      for (let cell of cellsToExpand) {
        const { x, y } = cell;

        const directions = [
          [0, -1], // up
          [-1, 0], // left
          [1, 0], // right
          [0, 1], // down
          [-1, -1], // top-left
          [1, -1], // top-right
          [-1, 1], // bottom-left
          [1, 1], // bottom-right
        ];

        for (let [dx, dy] of directions) {
          const newX = x + dx;
          const newY = y + dy;

          if (
            newX >= 0 &&
            newX < this.mapGrid[0].length &&
            newY >= 0 &&
            newY < this.mapGrid.length
          ) {
            // Calculate the distance from the center
            const distance = Math.sqrt(
              (newX - center.x) ** 2 + (newY - center.y) ** 2
            );
            if (this.mapGrid[newY][newX] !== "field" && distance <= size / 2) {
              this.mapGrid[newY][newX] = "field";
              newCells.push({ x: newX, y: newY });
            }
          }
        }
      }

      cellsToExpand = newCells;
    }
  }

  #checkDistanceCountry(epicentrTypes, x, y) {
    return !epicentrTypes.some((country) => {
      return Math.abs(country[0] - x) < 40 && Math.abs(country[1] - y) < 40;
    });
  }

  #getEpicentres() {
    this.epicentrTypes.map((epicentr) => {
      if (epicentr[2] === "field" || epicentr[2] === "forest") return;
      this.newEpicentrTypes[epicentr[2]] ||= [];
      this.newEpicentrTypes[epicentr[2]].push([epicentr[0], epicentr[1]]);
    });

    this.closeCities = [];
    this.newEpicentrTypes.infrastructure.forEach((city, i) => {
      this.newEpicentrTypes.infrastructure.forEach((cityIn, j) => {
        if (i <= j) return;
        //console.log(
        //  `distance from ${city} to ${cityIn} ${Math.abs(
        //    city[0] - cityIn[0]
        //  )} ${Math.abs(city[1] - cityIn[1])}`
        //);
        if (
          Math.abs(city[0] - cityIn[0]) < 40 &&
          Math.abs(city[1] - cityIn[1]) < 40
        )
          this.closeCities.push([city, cityIn]);
      });
    });
  }

  drawMap() {
    const ctx = this.canvas.getContext("2d");

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
        this.epicentrTypes.push([targetX, targetY, type]);
        const randomSize = Math.round(Math.random() * sizeRange + minSize);
        this.mapGrid[targetY][targetX] = type;
        this.#widenCell(targetX, targetY, type, randomSize);
      } else {
        i--;
      }
    }
  }

  #placeClosed(count, minSize, sizeRange) {
    const directions = [
      [0, -1], // Up
      [-1, 0], // Left
      [1, 0], // Right
      [0, 1], // Down
    ];

    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * this.width);
      const y = Math.floor(Math.random() * this.height);

      const times = Math.round(Math.random() * sizeRange + minSize);
      this.mapGrid[y][x] = "closed";

      let cellsToExpand = [{ x, y }];

      for (let j = 0; j < times; j++) {
        const newCells = [];

        for (const cell of cellsToExpand) {
          const { x, y } = cell;

          for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (
              this.#isValidCell(newX, newY) &&
              this.mapGrid[newY][newX] !== "closed"
            ) {
              this.mapGrid[newY][newX] = "closed";
              newCells.push({ x: newX, y: newY });
            }
          }
        }

        cellsToExpand = newCells;
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
            type === "infrastructure" ||
            type === "closed"
          ) {
            this.mapGrid[newY][newX] = type;
            newCells.push({ x: newX, y: newY });
          }
        } else if (type === "field") {
          if (
            this.mapGrid[newY][newX] === "forest" ||
            type === "infrastructure" ||
            type === "closed"
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
        return "#FF0000";
      case "agriculture":
        return "#FFFF00";
      case "mountain":
        return "#A9A9A9";
      case "animals":
        return "#7a6961";
      case "closed":
        return "#FFFFFF";
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