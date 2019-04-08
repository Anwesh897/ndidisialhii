function makeWoker(){
    let name = "Pete";
    return function(){
        console.log(name);
    };
}
    let name = "Anwesh";
    let work = makeWoker();
    work();