//Modify the function checkObj to test if an object passed to the function (obj) contains a specific property
// (checkProp). If the property is found, return that property's value. If not, return "Not Found".

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp)) return myObj[checkProp]; // If true return the prop

    return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");