/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

//basecase: if its last array then array deconstruct it
// else deconstruct the array and return the valuue


function flatten(arr) {
  // Your code here

  if (arr.length<1){
    return []
  }



  if (Array.isArray(arr[0])) {
    return [...flatten(arr[0]), ...flatten(arr.slice(1))];
  } else {
    return [arr[0], ...flatten(arr.slice(1))];
  }
}


console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
