function display() {
    console.log(this );
}

const demo=()=>{
    console.log(this);
}

obj = {
    // "normalfunction" : display(),
    // "arrowfunction" : demo()
    normalfunction : display,
    arrowfunction : demo
}
obj.normalfunction();
obj.arrowfunction();