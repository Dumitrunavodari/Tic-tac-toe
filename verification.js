function verification() {
  var firstDiagonalSum = 0;
  var secondDiagonalSum  = 0;
  for(var i = 1; i < 4; ++i) {
    var verticalSum = 0;
    var horizontalSum = 0;
    for( var j = 1; j < 4; ++j) {
      const verticalValue = 1 * (document.getElementById(i+"_"+j).value);
      verticalSum +=  verticalValue;
      const horizontalValue = 1 * (document.getElementById(j+"_"+i).value);
      horizontalSum +=  horizontalValue;
    }
    if(verticalSum == 3 || verticalSum == -3) {
      return wining(verticalSum);
    }
    if(horizontalSum === 3 || horizontalSum === -3) {
      return wining(horizontalSum);
    }
    firstDiagonalSum += 1 * (document.getElementById(i+"_"+i).value);
    secondDiagonalSum += 1 * (document.getElementById((3 - i + 1)+"_"+i).value)
  }
  if(firstDiagonalSum === 3 || firstDiagonalSum === -3) {
    return wining(firstDiagonalSum);
  }
  if(secondDiagonalSum === 3 || secondDiagonalSum === -3) {
    return wining(secondDiagonalSum);
  }
  return false;
}
