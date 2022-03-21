function reverse(num) {
    let temp = 0
    while(num) {
      temp *= 10;
      temp += num % 10;
      num = Math.floor(num/10)
    }
    return temp
  }
  
  console.log(reverse(12345))