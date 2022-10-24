function myCallBack(text: string) {
    console.log("inside myCallback " + text);
}

function callingFunction(initialText: string,
    callback: (text: string) => void)
{
    callback(initialText);
}

function displayHello(name:string) {
    console.log("Hello "+name);
}

callingFunction("myText", myCallBack);
callingFunction("YS", displayHello);

