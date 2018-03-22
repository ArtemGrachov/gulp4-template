console.log("ddd.js");
function ddd() {
    const test = () => {
        console.log("test111");
        console.log(this);
    };
    test();
    return test;
}
ddd();
