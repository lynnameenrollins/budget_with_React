const arr = [1,2];
console.log(arr);
const arrshallow = arr;

const copyarr = [...arr];
console.log(copyarr,copyarr.length);
console.assert(arr.length== 2,"True");

const copyarrobj = {...arr};
console.log(copyarrobj);
arr.push(3);

console.log(arr);
console.log(arrshallow);
console.log(copyarr);
let person={fname:"Vasuki",lname:"Rajaram",hobbies:['reading','sudoku','dancing']}

function display(person){

    console.log(person.fname," - ",person.lname);
    person.hobbies.map((hobby)=>{console.log("Hobby: ",hobby)})
    return [...person.hobbies,"Magic Show"];
}

const newPerson ={ fname:"Raji", lname:"Sundar", newHobbies : [...display(person),"Check this"]}

const expense = [{name:'School', amt:'450'}, {name:'Food', amt:'300'}]

console.log("length:", expense.length)
console.log('expense: ', expense)

console.log("New Person:", newPerson);
console.log("New Person fname ", newPerson)
const nest_arr = [
    { id: 0, name: "foo" },
    { id: 1, name: "bar" },
    { id: 2, name: "baz" },
  ];

  var toString = Object.prototype.toString;
function deepCopy(obj) {
    var rv;

    switch (typeof obj) {
        case "object":
            if (obj === null) {
                // null => null
                rv = null;
            } else {
                switch (toString.call(obj)) {
                    case "[object Array]":
                        // It's an array, create a new array with
                        // deep copies of the entries
                        rv = obj.map(deepCopy);
                        break;
                    case "[object Date]":
                        // Clone the date
                        rv = new Date(obj);
                        break;
                    case "[object RegExp]":
                        // Clone the RegExp
                        rv = new RegExp(obj);
                        break;
                    // ...probably a few others
                    default:
                        // Some other kind of object, deep-copy its
                        // properties into a new object
                        rv = Object.keys(obj).reduce(function(prev, key) {
                            prev[key] = deepCopy(obj[key]);
                            return prev;
                        }, {});
                        break;
                }
            }
            break;
        default:
            // It's a primitive, copy via assignment
            rv = obj;
            break;
    }
    return rv;
}
var a = [1, {foo: "bar"}, ['a', 'b'], new Date()];
console.log(JSON.stringify(a));
var b = deepCopy(a);
console.log(JSON.stringify(b));

var cpyA = [...a];
console.log(JSON.stringify(cpyA));
var jsoncpy = JSON.parse(JSON.stringify(a));
console.log(JSON.stringify(jsoncpy));
a[1].foo = "cat";
console.log("a: ",JSON.stringify(a));
console.log("b: ",JSON.stringify(b));
console.log("cpyA: ",JSON.stringify(cpyA));
console.log("jsoncpy: ",JSON.stringify(jsoncpy));
  
  const newArr = [...nest_arr];
  
  newArr[0].name = "something else";
  
  console.log("newArr", newArr);
  console.log("original arr", nest_arr);