function myCallBack(text) {
    console.log("inside myCallback " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
function displayHello(name) {
    console.log("Hello " + name);
}
callingFunction("myText", myCallBack);
callingFunction("YS", displayHello);
