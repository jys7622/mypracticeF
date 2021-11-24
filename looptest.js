function multiplication(num) {
  const result = [];

  console.log(num + '단');
  for (let j = 1; j < 10; j++) {
    
    console.log(num + '*' + j + '=' + num * j);
    result.push(num + '*' + j + '=' + num * j);
  }
  return result;
}
// (multiplication(5));
// console.log(multiplication(2));
let tmp = multiplication(121);

// console.log(tmp[0])
// console.log(tmp[5])
// console.log(tmp[tmp.length - 1])

//모든 function은 리턴값이 없으면 undefined를 return.
