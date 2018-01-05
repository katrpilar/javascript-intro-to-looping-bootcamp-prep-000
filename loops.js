function forLoop(array){
  for (var i = 0; i < 25; i++ ){
    if (i >= 1){
      break array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}