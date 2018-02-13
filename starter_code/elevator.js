class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "";
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
    this.intervalId;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.update() }, 1000 );
  }
  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    this.log();
  }
  _passengersEnter() {
    this.waitingList.forEach((person, index) => {
      if (person.originFloor === this.floor) {
        //add person to the passenger array
        this.passengers.push(person);
        //adds destination floor of passenger to elevator request
        this.requests.push(person.destinationFloor);
        this.waitingList.splice(index, 1);

        //console log the passenger that enters the elevator
        console.log(`${person.name} has entered the elevator.`)
      }
    });
  }
  _passengersLeave() { 
    this.passengers.forEach((passenger, index) => {
      if (passenger.destinationFloor === this.floor) {
        this.passengers.splice(index, 1);
        console.log(`${passenger.name} has left the elevator.`)
      }
    });
  }
  floorUp() { 
    if ( this.floor < this.MAXFLOOR ) {
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
      `Direction: ${this.direction} | Floor: ${this.floor}`
    )
  }
}

module.exports = Elevator;
