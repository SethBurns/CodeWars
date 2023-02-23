/**
 * Make 4 conditions.
 * 1. Empty Array: returns "No one likes this."
 * 2. One element: returns That Element + "likes this."
 * 3. Two Element: returns Element 1 + "and" + Element 2 + "Like this.""
 * 4. Three Element: returns Element1 + "," + Element2 + "and" + Element3 + "like this."
 * 5. More than Three Element: returns Element1 + "," + Element2 + "and" + int + "others like this."
 */




function likes(names) {
    var output;
    var length = names.length;
    if (length === 0) {
        output = "No one likes this.";
    } else if (length === 1) {
        output = `${names[0]} likes this.`;
    } else if (length === 2) {
        output = `${names[0]} and ${names[1]} like this.`;
    } else if (length === 3) {
        output = `${names[0]}, ${names[1]} and ${names[2]} like this.`;
    } else {
        var others = length - 2;
        output = `${names[0]}, ${names[1]} and ${others} others like this.`;
    }
    return output;
}

var array1 = [];
var array2 = ["Peter"];
var array3 = ["Jacob", "Alex"];
var array4 = ["Max", "John", "Mark"];
var array5 = ["Alex", "Jacob", "Mark", "Max"];

console.log(likes(array5));