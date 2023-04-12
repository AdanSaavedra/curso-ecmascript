const array = [1,1,2,3,4,[1,3,5,6,[1,2,4]]]
const arr = array.flat(3)
console.log(arr[8])

// flat map
const array2 = [1,2,3,4,5,[2,4,6]]
console.log(array2.flatMap(v => [v, v * 2]))
const arrayWithFlat = array2.flat(2)
console.log(arrayWithFlat.flatMap(v => [v, v * 2]))