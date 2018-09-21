module.exports = function getZerosCount(number) {
  // your implementation
  var zeros = 0;
  while (number>0) {
   number = ~~(number/5);
   zeros = zeros + number;
  }
  return zeros;
}
