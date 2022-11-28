function Fibonacci(n) {
    let number1 = 0;
    let number2 = 1;
  
    for (i = 0; i < n; i++) {
      let current = number1 + number2;
      number1 = number2;
      number2 = current;
      console.log(current);
    }
  }
  
  Fibonacci(2);