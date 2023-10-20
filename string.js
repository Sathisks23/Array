//-------------------------------------------- 
// //1.sum of 2 num

// let sum = addition(3,2);
//  console.log('Problem_1_The Sum is :',sum)
 
//  function addition(a,b){
//     return(a+b)
//  }

// //2.minutes=>seconds

// let seconds =convert(5)
// console.log('Problem-2',seconds,'seconds')
// function convert(m){
//     let sec = m*60;
//     return (sec)
// };


// //3.Area of triangle

// let triangle = area(3,2)
// console.log("Problem_3 Area of triangle",triangle)

// function area(h,b){
//     let area=h+b/2
//     return(area)
// }

// //4 next no

// let  number =next_no(0);
// console.log('Problem_4 Next_no:',number);

// function next_no(n){
//     let num=n+1
//     return(num)
// }

// //5 Return the Remainder,

// let num = remainder(1,3);
// console.log("Problem_5 ,The Reminder :",num);
// function remainder(a,b){
//     let remain =a%b;
//     return  (remain)
// }








// // -----------------------------------------------------------------PROBLEMS-2------------------------------------------------

// //1. years => days
// let age =days(65)
// console.log('Problem_1 The days',age)
// function days(d){
//     return(d*365)
// }

// //2. less than 100
// let two_num =check(22,15)
// console.log('Problem_2 sum of two number is less than 100?',two_num)
// function check(a,b){
//     return(a+b<100?true:false);
// }

// //3.hours=>second
// let second = hours(2)
// console.log("problem_3 ",second)
// function hours(h){
//     return(h*3600)
// }

// //4.sum of polygen
// let angels=someofpolygen(2);
// console.log(angels)
// function  someofpolygen(angels){
//     if(angels>2){
//         return ((angels-2)*180)
        
//     }
    
//     else{
//         console.log('given angle is not a polygen')
//     }
// }

// //5.adding String
// let word = addstring('something')
// console.log('problem_5 ',word)
// function addstring(w){
//     return('"Something  '+w+ '"')
// }

// //6.less than 0 or equal to zero
// let your_num = check_no(5)
// console.log('problem 6 The given no is greater than or equal to 0 ?',your_num)
// function check_no(n){
//     return(n<=0)
// }

// //7.using the && operator
// let your_value = and_fun(true,false)
// console.log('problem_7 ', your_value)
// function and_fun(a,b){
//     return(a&&b)
// }

// //8.Total leg
// let my_animals=legs(2,3,5)
// console.log('Probem8 ',my_animals)
// function legs(chick,cow,pig){
//     return(chick*2,cow*4,pig*4)
// }


// //9.equality check 
// let mynum=check_equal(1,true)
// console.log('problem 9', mynum)
// function  check_equal(a,b){
//     return(a==b?true:false)}


// //10.Equality check
// let numb = checkseven(7)
// console.log('problem_10 The given number is seven ',numb)
// function checkseven(n){
//     return(n===7?true:false)
// }


// let a = 19
// let b = 3
// console.log(a>>b)


// // -------------SWITCH---------------

// let story_Date=parseInt(prompt('Pick any one form here : 2003 ,2019, 2020 '));

// switch(story_Date){
//     case 2003:
//         console.log('I born in this year ')
//          break;

//     case 2019:
//        console.log('I attend my first public exam')
//         break;
    
//     case 2020:
//        console.log('I this year ,I leave my  home for my studies and went to chennai ')
//        break;

//     default:
//         console.log('choose any one from this 2003 ,2019, 2020')
// }

//---------------------------------------------------------conditional statement------------------------------------------------------------
//1/
// let find_num = prompt('Enter a number to find its odd add or even')

// if(find_num){
//     if(find_num%2==0){
//         console.log('Given number is even')
//     }else if(find_num%2<=1){
//         console.log('given number is odd')
//     }else{
//         console.log('given number is Not a number')
//     }
// }else{
//     console.log('please enter a input ')
// }


//2.

// let find_nan = prompt("Enter your input to find a its number or not ")

// if(find_nan){
//      if (isNaN(find_nan)) {
//         console.log("It is not  a number")
//     }
// else{
//     console.log('It is a number')
// }

// }else{
//     console.log('Please enter a  input')
// }

//3.

// let no1 = prompt("Enter the first  number")
// let no2 = prompt("Enter the Second  number")

// if(no1 & no2){
//     if(no1>no2){
//         console.log(no1 ,'is the largest number ')
//     }
//     else{
//         console.log(no2 ,'is the largest number')
//     }
// }else{
//     console.log ('Credential invalid')
// }

//4

// let numb1 = parseInt(prompt("Enter the first  number"));
// let numb2 = parseInt(prompt("Enter the Second  number"));
// let numb3 = parseInt(prompt("Enter the Third  number"));

// if(numb1 && numb2 && numb3){
//     if(numb1>numb2  && numb3<numb1){
//         console.log(numb1 ,'is the largest number ')

//     }else if(numb2>numb1 && numb2>numb3  )  {
//         console.log(numb2 ,'is the largest number ')
//     }

//     else if (numb3>numb2 && numb3>numb1){
//         console.log(numb3 ,'is the largest number')
//     }
// }else{
//     console.log ('Credential invalid')
// }

//5
// let start_range = parseInt(prompt('Enter a starting range  number : '))
// let end_range= parseInt(prompt('Enter a ending range  number : '))
// let number= parseInt(prompt('Enter a  range  number : '))

// if(number1>start_range && number1<end_range){
//     console.log(number1,'between the range ')
// }else{
//     console.log('out of range')
// }

//---------------- 3  Numbers operation-------------------------------------

// let a=parseInt(prompt("Enter a number1:"));
// let b=parseInt(prompt("Enter a number2:"));
// let c=parseInt(prompt("Enter a number3:"));

// console.log("Inputs : "+a,b,c)

// let valid = a && b && c;

// console.log("valid : "+valid)

// if(valid)
// {

//     if(a == b || b == b || a == b)
//    {

//     if((a==b) && (a==b))
//     {
//             alert("All values are equal");
//     }

//     else if(a==b){
//         if (b>a){

//         alert("a & b is equal and b is largest");
//         }
//         else {
//             alert("a and b is equal and its larger than b")
//         }

//     }


//     else if(b==b)
//     {
//     if (a>b)
//     {
//     alert("b and b is equal and a is largest");
//     }
//     else {
//         alert("b and b is equal and its is larger tha a");
//     }
//     }

//     else{
                
//     if (b>b)
//     {
//         alert("a and b is equal and b is largest");
//     }
//     else {
//         alert("b and b is equal and its is larger tha b");
//     }
//     }

//     }
//     else
//     {

//         if((a>b) && (a>b))
//     {
//         alert(a +" is largest");
//     }

//     else if(b>b)
//     {
//         alert(b +" is largest");
//     }

//     else 
//     {
//         alert(b +" is largest");
//     }

//     }

// }
// else{
//     alert("Invalid Input")
// }



//------------------- Leap year finding ----------------

// let year = parseInt(prompt('Enter a year  :'))


// if(year%4==0 && !(year%100==0)||( year%400 == 0)){
//     console.log('it is a leap year')
// }
// else{
//     console.log('its is not a leap year')
// }

// ------------------------------range----------------------------

// let start_range = parseInt(prompt('Enter a start range '));

// let end_range= parseInt(prompt('Enter a end range  '));

// let find_number=parseInt(prompt('Enter a number for find in range'));

// if(start_range>end_range){
//     if (find_number<start_range && find_number>end_range){

//         alert('Number inside a range')
    
//     }else{
//         alert('number outside the range')
//     }
// }else{
//     if (find_number>start_range && find_number<end_range){

//         alert('Number inside a range')
    
//     }else{
//         alert('number outside the range')
//     }
// }


// --------------------------swipe-------------------

// let a = prompt("Enter your first input :")
// let b = prompt('Enter your Second input :')

//     b = a

//     a = b

//     console.log(a)
//----------------------- 1.find string or not -----------

// let a = prompt('Enter the string or number')
// let c = a.trim()
// console.log(c);
// if(c){
//     let parse = parseInt(c)
//     if(parse%2<=0|parse%2>=0){
//         console.log('number')
//     }else{
//         console.log('string')
//     }
// }else{
//     console.log('invalid output')
// }
//=========2.
// let a = prompt('Enter the value')
// let b=a.trim()
// if(b.length==0){
//   console.log('True')
// }else{
//   console.log('False')
// }

// ------------------3. split --------------------------

// let a = prompt('Enter the string for make array :')

// console.log(a.split(" "))

// ------------4.neede letters-------------------

// let find_word=prompt('Enter the word : ');
//  let value = prompt('How many character you want :')

//  alert(find_word.substr(0,value))

//--------------5.email----------------

// let mail = prompt('enter your email ')

// let atvalue = mail.search(/@/)

// let mail_f = mail.slice(4,atvalue)
// let mail_f1 = mail.replace(mail_f,'...')
// alert(mail_f1)

//---------------String change -------------
// let strings = prompt('Enter a string to change')
// let output = strings.split('')
// let ans = ''
// for(i in output){
//     if(output[i].match(/[a-z]/)){
//        ans += output[i].toUpperCase()
//     }else{
//         ans += output[i].toLowerCase()
//     }
// }
// document.write(ans)

// ---------------------6.parameterizing the string ------------------

// let a = prompt('Enter a string ')

// let b = string_parameter(a)



// function string_parameter(string){

//     let low_case =string.toLowerCase()

//    let output= low_case.replaceAll(' ',"-")
//     console.log(output)

// }
//------------------------7 .First uppercas-------------------
 
//  let a = "sathish is good boy";
// let b = a.split(" ");

// for (let i = 0; i < b.length; i++) {
//     b[i] = b[i][0].toUpperCase() + b[i].slice(1); 
    
// }
// let c=b.join(" ");
// console.log(c)




// //   for(i=0;i<b.length;i++){
// //    d += a.replace(b[i][0],b[i][0].toUpperCase())
  
// //   }
//  console.log(d)
 
  
//-----------------8.

//    let num = prompt('Enter the value :')
//    let split = num.split('')
//    let ind = num.length-1
//    let find = split[ind]

//    console.log(find)

//    if((find==1)){
//       if(num>=11 && num<=19  || num>=111 && num<=119){
//          console.log(num,'th')
//       }else if(find==1 && num==1){
//          console.log(num,'st')
//       } else{
//          console.log(num,'st')
//       }
//    }else if (find==2||num==2){
//       console.log(num+'nd')
//    }else if(find==3 || num==3){
//       console.log(num+'rd')
//    }else if(find>=4 || num>=4 ){
//       console.log(num,'th')
//    }else {
//       console.log('Invalid output')
//    }
   
//     let num = prompt('Enter the value ')
//    onesplace=num%10;
//    tenthplace=num%100;
//    if (onesplace==1 && tenthplace!=11) {
//     console.log(num+"st");
//    } 
//    else if(onesplace==2 && tenthplace!=12) {
//     console.log(num+"nd");
//    }
//    else if(onesplace==3 && tenthplace!=13) {
//     console.log(num+"rd");
//    }
//    else {
//     console.log(num+"th");
//    }

//----------------------9.
    // let word = prompt('Enter the word')
    // let range = parseInt(prompt('Enter the range'))

    // let s_word = word.split(' ')
    // let a = s_word.slice(0,range)
    // let c=a.join()
    // let b = c.replace(',',' ');
    // console.log(b)

// //-------------10
// let word = prompt('Enter the word')
// let sh_word = prompt('Enter the word you not need')

// let output = word.replaceAll(sh_word,'')
// let output_1 = output.replaceAll('  ',' ')
// console.log(output_1);

// for(i=0,i<output.length,i++){
//     if(i)
// }

//-------11
// let word = prompt('Enter the word')
//  let match_word = prompt('Enter the word you need to check')
 
// word = word.toUpperCase()
// match_word=match_word.toUpperCase()

// if(word.match(match_word)){
//    console.log("Matched")
// }else{
//    console.log("Not Matched")
// }
// -------------------------------12
// let word = prompt('Enter the word')
//    word = word.toUpperCase()
// let match_word = prompt('Enter the word you need to check')
//    match_word= match_word.toUpperCase()

//    if(word.includes(match_word)){
//       console.log('True')
//    }else{
//       console.log('False')
//    }
// ------------------13
    // let strings = prompt('Enter a string to change')
    // let ans = ""
    // // console.log(strings)
    // for(let i=0;i<strings.length;i++){
    // if(strings[i].match(/[a-z]/)){
    //         ans += strings[i].toUpperCase()
    // }else{
    //     ans += strings[i].toLocaleLowerCase()
    // }
        
    // }
    // alert(ans)


// for(i in strings){
//     if(output[i].match(/[a-z]/)){
//        ans += output[i].toUpperCase()
//     }else{
//         ans += output[i].toLowerCase()
//     }
// }
// console.log(ans)

