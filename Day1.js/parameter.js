//write a js() that take two no. parameter and print add,sub,mul,divisionn using arrow function
const n = (a,b)=>{
  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const divi = a / b;

  console.log("Add:", add);
  console.log("Subtract:", sub);
  console.log("Multiplication:", mul);
  console.log("Division:", divi);
}
n(10,10);