const path=require('path')
console.log(path.sep)

const filePath=path.join("abc","def","efg", "text.txt")
console.log(filePath)

console.log(path.basename(filePath))
console.log(path.resolve(__dirname, "text.txt"))