//! First install the extension Colorful Comments for your own ease

//^ comments are in purple color and the code is grayed out which you can uncomment 
//^ green comments are the explanation of concept and behaviour of a concept
//~ In this file we are using all the types of variables

const accountId = 111000
let emailId = "ihteshamlatif54@gmail.com"
var password = "yallahabibi69"
accountCity = "Lahore"
let accountState  


//~ now we are checking the behaviour of all the datatypes

//~ code part: you can uncomment the above code part to to check each and eveery variable behaviour

//*constants cannot be changed (not allowed)
// accountId = 111001
// console.log(accountId);

//* let can be re-initialized but can't be redeclared
// let emailId = "ihtesham"  //*redelaration (not allowed)
// emailId = "ihtesham_55@yahoo.com"  //*re-initialization (allowed)
// console.log(emailId);  

//* var can be re initialized and redeclared 
// var password = "abcd"  //*re-decleration (allowed)
// password = "mynameisihtesham"  //* reinitalization (allowed)
// console.log(password);

//* this is smart javascript that if you dont mention it will consider it as a variable but it becomes a part of the global scope or window object because we have not mentioned its type due to which it behaves like var not like let and const.
// accountCity = "Karachi" 
// console.log(accountCity);

//console.table([accountId,emailId,password,accountCity,accountState])

//*prefer not to use var becaause of the issue of block scope and functional scope
