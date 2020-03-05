[1,2,3,4,5,6].slice(0,3);  //[1,2,3]
[1,2,3,4,5,6].concat(7);   //[1, 2, 3, 4, 5, 6, 7]
[1,2,3,4,5,6].concat([7,8,9]);   //[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1,2,3,4,5,6].concat(7,8,9);   //[1, 2, 3, 4, 5, 6, 7, 8, 9]

[1,2,3,4,5,6].concat(typeof window);   //[1, 2, 3, 4, 5, 6, "object"]
[1,2,3,4,5,6].concat({name: "Jupyter"});

//map과 filter가 만들어내는 arrary에 담긴다.
//argument로 함수를 받는다.
[1,2,3,4,5,6].map(x => x*2);   //[2, 4, 6, 8, 10, 12]
const materials = ['Hydrogen','Helium','Lithium','Beryllium'];
materials.map(material => material.length)  //[8, 6, 7, 9]

[1,2,3,4,5,6].filter(x => x%2===0);   //[2, 4, 6]
[1,2,3,4,5,6].filter( () => true );   //[1, 2, 3, 4, 5, 6]
[1,2,3,4,5,6].filter( () => false );   //[]

//reduce는 argument로 두개를 받는다. 하나를 받아도 상관없다.
//acc : accumulator, cur : current
//디폴트 값을 안 준 경우( 0에서 시작 )
[1,2,3,4,5,6].reduce( (acc, cur) => acc+cur );   //21
//acc cur
// 0   1
// 1   2
// 3   3
// 6   4
// 10  5
// 15  6
// 21

//디폴트 값을 준 경우 
[1,2,3,4,5,6].reduce( (acc, cur) => acc+cur, 10 );   //31