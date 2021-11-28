//1~100까지 더해주는 반복문

let sum = 0;
for(let i = 1; i <= 100; i++) {
 
  sum = sum + i;

  // console.log(sum);
}

console.log(sum);

//const로 선언하면 에러남
//var, let은 정상작동
//반복문 안에다가 let 선언하면 에러남
//반복문 안에 console찍으면 i값 한번씩 더할때마다 찍어줌(증감식 실행되기 전에 console을 먼저 찍기 때문)
//반복문 밖에 console찍으면 최종적으로 더해진 값만 찍어줌