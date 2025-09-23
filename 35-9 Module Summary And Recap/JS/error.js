/*                      35-9 Module Summary and recap */
/*
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data)); 
.catch(error => console.log(error))

//async
try{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}
catch{

}
*/



// synchronous asynchronous 
/*
console.log(1);
setTimeout(() =>{
  console.log(2);
}, 3000)
console.log(3);

Output:
1
3
2
*/


console.log(1);
setTimeout(() =>{
  console.log(2);
}, 3000)
console.log(3);
console.log(15);
console.log(15);
console.log(15);
/* 
Output:
1
3
15
15
15
2
*/

// document.getElementById('abc');
/* 
Output:
document.getElementById('abc');
^

ReferenceError: document is not defined
    at Object.<anonymous> (D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-35 API Recap With Phone Hunter\35-8 Common API Related Mistakes And Asynchronous JavaScript\JS\error.js:8:1)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.11.0
*/

// _______________________________________________________________________________

/* 
* If you have file in your JS folder like this:
35-8 Common API Related Mistakes And Asynchronous JavaScript
│
├── index.html        <-- HTML file
│
└── JS                <-- Folder
    ├── app.js        <-- Linked in HTML
    └── error.js      <-- You want to run with node

Then you have to run your terminal like this way:
PS D:\Web Development\Milestone-6 Intermediate JavaScript, API\Module-35 API Recap With Phone Hunter\35-8 Common API Related Mistakes And Asynchronous JavaScript> node JS/error.js

*/

// _______________________________________________________________________________
/*
// error.js

console.log("🚀 Starting fetch...");

fetch("https://jsonplaceholder.typicode.com/usersssss") // ❌ wrong URL to force error
  .then(res => res.json())
  .then(data => {
    console.log("✅ Data received:");
    console.log(data);
  })
  .catch(err => console.error("❌ Error:", err));
*/
