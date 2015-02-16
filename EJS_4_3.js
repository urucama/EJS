// Functions to manage linked lists. Made use of recursion when possible.

function arrayToList(argument, index){
  if (!Array.isArray(argument))
    return undefined;
  if (index === undefined)
    index = 0;
  if (argument[index] === undefined)
   return null;
  else{  
    return list = {value: argument[index], rest: arrayToList(argument, index+1)};
  }
}


function listToArray(argument){
  var result = [];
  result.push(argument.value);
  if (argument.rest === null){
    return result;
  } else
    return result.concat(listToArray(argument.rest));
}

function prepend(index, list){
  return{value: index, rest:list};
}

function nth(list, index){
  if (index < 0 || list.rest === null)
    return undefined;
  else if (index === 0)
    return list.value;
  else {
  	index -= 1;
  	return nth(list.rest, index);
  }
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20