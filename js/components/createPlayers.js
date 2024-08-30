class CreatePlayers {
  #data;
  #connectFriends = [];

  constructor(data) {
    this.#data = data;
    this.playersCount = 6;
    this.players = [];
    this.#connectFriends;
    this.#initPlayers();
  }

  #initPlayers() {
    this.#createPlayers();
    this.#makeFriends();
  }

  #createPlayers() {
    for (let i = 0; i < this.playersCount; i++) {
      let player = this.#setPersonalData(i);
      this.players.push(player);
    }
  }

  #setPersonalData(i){
    let player = [];
    const gender = this.#randomFunction(this.#data.gender);
    const ageArr = this.#createRandomInIntervals(this.#data.age);
    let age = ageArr[0];
    let ageType = ageArr[1];

    let name = `${this.#randomFunction(this.#data[`name${gender}`])} ${this.#randomFunction(this.#data.surname)}`

    player.id = i;
    player.gender = gender;
    player.friends = [];
    player.name = name;
    player.age = age;
    player.ageType = ageType;
    player.profession = this.#createRandomInIntervals(this.#data[`${ageType}`].profession);
    player.health = this.#createRandomInIntervals(this.#data[`${ageType}`].disease);
    player.sex = this.#createRandomInIntervals(this.#data[`${ageType}`].sex);
    return player;
  }



  #makeFriends() {
    let conectionsNum = Math.floor(this.players.length / 2);
    let randomConectionNum = Math.trunc(Math.random() * 3 + conectionsNum - 2);
    this.#createCons(this.players, randomConectionNum);
    this.#assignFriends();
  }

  #createCons(players, num) {
    for (let i = 0; i < num; i++) {
      this.#connectFriends.push(
        this.#randomConection(players, this.#connectFriends)
      );
    }
  }

  #assignFriends() {
    this.#connectFriends.forEach((con) => {
      con[0].friends.push(`${con[1].name}`);
      con[1].friends.push(`${con[0].name}`);
    });
  }

  #randomConection(players, prevCons) {
    let consTemp = [];
    let newCon = this.#createConection(players);
    consTemp.push(newCon);

    players = players.filter((player) => player.id !== newCon.id);
    newCon = this.#createConection(players);
    consTemp.push(newCon);

    prevCons.map((con) => {
      if (this.#areArraysSimilar(con, consTemp)) {
        return (consTemp = this.#randomConection(players, prevCons));
      }
    });
    return consTemp;
  }

  #createConection(players) {
    return players[Math.trunc(Math.random() * players.length)];
  }

  #areArraysSimilar(arr1, arr2) {
    return (
      (arr1[0].id === arr2[0].id && arr1[1].id === arr2[1].id) ||
      (arr1[0].id === arr2[1].id && arr1[1].id === arr2[0].id)
    );
  }

  #randomFunction(data, max, min = 0) {
    const range = data ? data.length : max;
    const randomNumber = Math.trunc(Math.random() * (range - min) + min);
    return data ? data[randomNumber] : randomNumber;
  }

  #createRandomInIntervals(args) {
    let totalProb = args.reduce((sum, arg) => sum + arg.prob, 0);
    let randomProb = Math.random() * totalProb;
    let result;
    
    for (let arg of args) {
      if (arg.start) {
        if (randomProb < arg.prob) {
          result = Math.trunc(Math.random() * (arg.end - arg.start) + arg.start);          
          return [result, arg.value];
        }
        if (!arg.prob) {
          result = (Math.random() * (arg.end - arg.start) + arg.start).toFixed(2);
          return result;
        }
        randomProb -= arg.prob;
      } else {
        if (randomProb < arg.prob) {
          if (Array.isArray(arg.value)) return this.#randomFunction(arg.value);
          if (typeof arg.value === 'object') return arg.value;
          else return this.#randomFunction(arg.value);
        }
        randomProb -= arg.prob;
      }
    }
  }

}

export default CreatePlayers;
