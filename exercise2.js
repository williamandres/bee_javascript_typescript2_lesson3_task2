function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number)
    return Math.max.apply(0,numbers)+ ' ' + Math.min.apply(0,numbers) 
    
  }
  
  const result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
  
  console.log(result)