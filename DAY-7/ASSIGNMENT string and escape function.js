var str = "iSchoolConnect,Intern";

// using charAt();
console.log("use of charAt() function on string str:-", str.charAt(2));
console.log(
  "use of charAt() function on string str to find out the last poition index:- ",
  str.charAt(str.length - 1)
);

//using substring(start,end);
console.log(
  "use of substring() function on string 'str' to find substring:- ",
  str.substring(2, 6)
);
console.log("use of substring() function on string 'str':- ", str.substring(4));
console.log(
  "if start index is greater than stop then substring() will return:- ",
  str.substring(8, 2)
);

//using slice() on string

console.log("use of slice() function on string 'str':- ", str.slice(2, 5));
console.log("use of slice() function on string 'str':-", str.slice(-3));
console.log(
  "if start is greater than stop then substring will return:-",
  str.slice(6, 3)
);

//using indexOf
console.log("use of indexOf() function on string 'str':- ", str.indexOf("C"));
console.log(
  "using two argument to check at or after that position:- ",
  str.indexOf("o", 0)
);

//use of lastIndexOf()
console.log(
  "use of lastIndexOf() function on string 'str':- ",
  str.lastIndexOf("n")
);

//use of split()
console.log("use of split() on string 'str':- ", str.split(","));
console.log(str);

//use of replace();
console.log("original string: -", str);
console.log(
  "use of replace() function on string 'str':- ",
  str.replace("o", "O")
);

//use of toUpperCase()
console.log("use of toUpperCase() :- ", str.toUpperCase());

//use of toLowerCase();
console.log("use of toLowerCase() :- ", str.toLowerCase());

console.log("\n\n\n\t\t Use of Escape Character: \n");

//use of Horizontal tab
console.log("\t\t\t Hello iSchoolConnect here!");

//use of newline tab
console.log("\n\n hello iSchoolConnect here!");

//use of  vertical tab
console.log("\n\n Hello \viSchoolConnect here!");

//use of carriage return
console.log("\n\n Hello \riSchoolConnect Here!");

//use of Double quote
console.log('Hello "iSchoolConnect" here!');

//use of single quote
console.log("hello 'iSchoolConnect' Here!");
