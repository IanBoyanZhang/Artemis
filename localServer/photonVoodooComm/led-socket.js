var Particle = require('particle-io');

var LOW = 0;
var HIGH = 1;
/*******************************************************************************
 * Function Name  : debounce
 * Description    : Software key debounce
 * Input          : Pin
 * Output         : None.
 * Return         : Value of the pin (0 or 1) in INT type
 * Returns a negative number on faliure
 ********************************************************************************/
var debounce = function(pin, readState) {
  var pinState = -1;
  var newStatus = LOW;
  function execAfterRead(state) {
    newStatus = state;
    if (newStatus === HIGH) {
      readState(false);
      return;
    }
    var self = this;
    setTimeout(function() {
      self.digitalRead(pin, function(state) {
        newStatus = state;
        readState(newStatus === HIGH);
      });
    }, 100);
  }
  this.digitalRead(pin, execAfterRead);
};

var negState = function(state) {
  if (state === HIGH) {
    return LOW;
  } else if (state === LOW) {
    return HIGH;
  }
  return -1;
};

/*******************************************************************************
 * Function Name  : debounce
 * Description    :
 * Input          :
 * Output         :
 * Return         :
 * Returns a negative number on faliure
 ********************************************************************************/
var queue = [];
var BUF_LEN = 30;
var sumQueue = 0;

var smoothFilter = function(newNumber) {
  queue.push(newNumber);
  sumQueue += newNumber;
  if (queue.length === BUF_LEN) {
    sumQueue -= queue.shift();
  }
  return sumQueue >= BUF_LEN/2;
};

var board = new Particle({
  host: '192.168.1.117',
  port: 48879
});


board.on('ready', exec_context);

function exec_context() {
  // Using pin to simulate
  this.pinMode('D7', this.MODES.OUTPUT);
  this.pinMode('D6', this.MODES.INPUT);

  var D6preState = false;
  var D7State = LOW;
  var self = this;
  debounce.call(this, 'D6', function(state) {
//    console.log(state);
    if (D6preState !== smoothFilter(state)) {
      self.digitalWrite('D7', D7State = negState(D7State));
//      console.log(D7State);
    }
    preState = state;
  });
}
