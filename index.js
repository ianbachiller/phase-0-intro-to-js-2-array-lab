const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
} 
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
} 
function appendCat(name){
    const a = [... cats, name];
    return a;
} 
function prependCat(name){
    const b = [name, ... cats];
    return b;
} 
function removeLastCat(name){
    const c = cats.slice(0,cats.length-1)
    return c;
} 
function removeFirstCat(name){
    const d = cats.slice(1)
    return d;
}