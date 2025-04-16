const a=require('lodash')
const arr=[1,[2,[3]]]
const newArr=a.flattenDeep(arr)
console.log(newArr)