// //주어진 배열에서 최댓값, 최솟값 찾기

// //1. 최댓값 찾기
// //step 1 : 배열 선언, 값 할당

// const arr = [50,100,39,280,500,1000,125,31];

// //step 2 : 최대값 찾기 위한 기준 정하기
// let max = -1;

// //step 3 : 선언된 max의 값과 비교해주는 반복문 선언하기 -> i < arr.length는 배열 arr의 길이만큼(인덱스[0]~[7]만큼 총 8번동안
// //만약 배열 arr의 인덱스번호[i]번째의 값이 max값보다 크다라는 조건이 참이라면 max의 값을 [i]번째의 값으로 할당해라)
// //초기 i 값은 let i = 0 으로 설정했기 때문에 arr[0]번째의 값은 50. 따라서 50 > max (-1)가 참이기 때문에 max의 값은 50이된다.
// //arr[i]의 값이 max의 값보다 클때만  max에 arr[i]값을 할당하므로 50,100, 280, 500, 1000 의 값이 max값으로 차례대로 할당된다.
// //최종적으로 배열 arr의 최댓값은 1000이 된다. 

// for( let i = 0 ; i < arr.length; i++) {
//   if( arr[i] > max){
//     max = arr[i];
   
//   }
// }
// console.log(max);

//2. 최솟값 찾기

const arr = [-1, 1, 0 , 5, 13 , 200, 123, -5566];
let min = 1000;

for( let i = 0; i < arr.length; i++){

  if( arr[i] < min ){
    min = arr[i]
  }
}
console.log(min);
