
exports.largestPrimeFactor = function(n){

  function isPrime(factor) {

  var factor = factor.toString().split("");
  var digsExceptLast = factor.toString().split("");
  digsExceptLast = Number(digsExceptLast.pop())
  var sumOfDigs = 0;
  var lastDig = Number(factor[factor.length-1])
  var last2digs = Number(factor[factor.length-2] + factor[factor.length-1]);
  var last3digs = Number(factor[factor.length-3] + factor[factor.length-2] + factor[factor.length-1]);

  for(var i = 0; i<factor.length; i++) {
    sumOfDigs += Number(factor[i]);
  }

  if(lastDig === 2) {
    return false;
  } else if(sumOfDigs%3 === 0) {
    return false;
  } else if(last2digs%4 === 0) {
    return false;
  } else if(lastDig === 5 || lastDig === 0) {
    return false;
  } else if(factor%2 === 0 && factor%3 === 0) {
    return false;
  } else if((digsExceptLast -(lastDig*2))%7 === 0) {
    return false;
  } else if(last3digs%8 === 0) {
    return false;
  } else if(sumOfDigs%9 === 0) {
    return false;
  } else {
    return true;
  }

}


  var factors = [];
  var primeNumber = 0;
  var primes = []

  for(var i = 0; i<n; i++) {
    if(n%i === 0) {
      factors.push(i)
    }
  }
  console.log(factors);

  for(var x = 0; x<factors.length; x++) {
    if(isPrime(factors[x])){
      primes.push(factors[x]);
    }
  }

  console.log(primes)

  var primeNumber = primes[primes.length-1]





  return primeNumber;
};



console.log(largestPrimeFactor(200))

  //if factor divided by 2 remainder is 0, not prime
  // factor, add its digits and if they are div by 3 = not prime
  // if last 2 digits of num are divisble 4, = not prime
  // if number ends in 5 or 0 = not prime