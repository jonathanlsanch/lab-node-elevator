class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "up";
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
    this.intervalId;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.update();
    } 1000);
   }
  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    this.log();
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { 
    if(this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  }
  floorDown() { 
    if(this.floor > 0) {
      this.floor--;
    }
  }
  call(person) { 
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
  }
  log() { 
    console.log(
      `Direction: ${this.direction} 
      Floor: ${this.floor}`
    )}
}

module.exports = Elevator;
