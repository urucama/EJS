// Your code here.
function range(start, end){
  var result_range = [];
  for(var i = start - 1; i <= end - 1; i++)
    result_range[i] = i + 1;
  return result_range;
}

function sum(num){
	var result_sum = 0;
  for(var i = 0; i < num.length; i++){
      result_sum += num[i];
  }
	return result_sum;
}
console.log(range(1, 10))
console.log(sum(range(1, 10)));
// → 55
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]