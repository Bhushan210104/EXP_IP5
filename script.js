// Basic Calculator using Promises
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        reject("Inputs must be numbers.");
      }
  
      switch (operation) {
        case '+':
          resolve(num1 + num2);
          break;
        case '-':
          resolve(num1 - num2);
          break;
        case '*':
          resolve(num1 * num2);
          break;
        case '/':
          if (num2 === 0) {
            reject("Division by zero is not allowed.");
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject("Invalid operation.");
      }
    });
  }
  
  // Custom Iterator for Squaring Numbers in an Array
  class SquareIterator {
    constructor(numbers) {
      this.numbers = numbers;
      this.index = 0;
    }
  
    next() {
      if (this.index < this.numbers.length) {
        const value = this.numbers[this.index] ** 2;
        this.index++;
        return { value, done: false };
      } else {
        return { done: true };
      }
    }
  
    [Symbol.iterator]() {
      return this;
    }
  }
  
  // Prime Number Generator
  function* primeGenerator(limit) {
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        yield i;
      }
    }
  }
  
  // DOM Elements and Event Listeners
  
  // Calculator Section
  const calcBtn = document.getElementById("calculate-btn");
  const calcResult = document.getElementById("calc-result");
  
  calcBtn.addEventListener("click", () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
  
    calculator(num1, num2, operation)
      .then(result => {
        calcResult.textContent = `Result: ${result}`;
      })
      .catch(error => {
        calcResult.textContent = `Error: ${error}`;
      });
  });
  
  // Custom Iterator Section
  const iterateBtn = document.getElementById("iterate-btn");
  const iteratorResult = document.getElementById("iterator-result");
  
  iterateBtn.addEventListener("click", () => {
    const arrayInput = document.getElementById("array-input").value;
    const numbers = arrayInput.split(',').map(Number);
    const squareIter = new SquareIterator(numbers);
  
    let results = [];
    for (let value of squareIter) {
      results.push(value);
    }
    iteratorResult.textContent = `Squared Results: ${results.join(', ')}`;
  });
  
  // Prime Generator Section
  const primeBtn = document.getElementById("generate-prime-btn");
  const primeResult = document.getElementById("prime-result");
  
  primeBtn.addEventListener("click", () => {
    const primeLimit = Number(document.getElementById("prime-limit").value);
    const primes = primeGenerator(primeLimit);
  
    let results = [];
    for (let prime of primes) {
      results.push(prime);
    }
    primeResult.textContent = `Primes: ${results.join(', ')}`;
  });
  