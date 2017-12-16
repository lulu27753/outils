//数组分页
// const pageSize = 4;
// const array = [1,2,3,4,5,6,7]
// console.log(array)
// const pageNo = Math.ceil(array.length/pageSize);
// var list = [];
// for (var i = pageNo; i > 0; i--) {
//   list[i-1] = [...pagination(i, pageSize, array)]
// }
// console.log(list)
function pagination(pageNo, pageSize, array) {
  var offset = (pageNo - 1) * pageSize;
  return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
}

module.exports = pagination