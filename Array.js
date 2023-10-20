//------------------------------------------ ---------------ARRAY----------------------------
//-------------------1
// let a = array([1,2,3])

// function array(ar){
//    return(ar[0])
// }
// console.log(a)
//------------------2.

// let b = array([1,2,5,4],5)

// function array(a,b){
//     return( console.log(a.includes(b)))
// }


// function check(ar){
//    if(ar in a ){
//       return('True')
//    }else{
//       return('False')
//    }
// }
// console.log(b)

//------------3
// let a= array([1,2,3,4,5])
// let b = [4,8,16,32]
// let c =''
// function array(ar){
//    let c = ar.reverse()
//      return(c)
// }
// console.log(a)

// for(i=b.length-1;i>=0;i--){
    
//     c += b[i]+','
// }
// console.log(c)


//--------4
// let a = array(5,6)
// function array(a,b){
//     let arr = [];
//     arr[0]=a
//     arr[1]=b
//     return arr;
// }
// console.log(a)
//--------5
// var a = array([5,6,'HEll0'],5)

// function array(ar,b){
   
//    return(ar.indexOf(b))
// }
// console.log(a)
//-----------6
// var a = array([1,2,9])
// function array(ar){
//    let c= ar.length-1
//    console.log(ar[c])
// }

//7
// let a = array([1,2,34,])
// function array(ar){
//  let b = ar.join('')
//  return b
// }
// console.log(a)

//.8


// let a=length("Hello World")

// function length(i) {
//  var b= i.slice(-1)
//  var c=i.lastIndexOf(b)
//  c=c+1
//  return(c)
// }
// console.log(a)

    // let a =('hello world')
    // var length = 0 
    // for(i in a){
    //     length += 1
    // }

    // console.log(length)

    // ------------For----------------
// find a
    // let a = [1,'a','a','a','a','a',2]
    // let b =0
    // for(i=0 ;i<a.length;i++){
    //   if(a[i]=='a'){
    //     b += 1
    //   }
    // }
    // console.log(b)

// // cabs to low

// let a = 'Sathish Kumar Shanmugam'
// for(i;i<a.length;i++){
//   if(a[i]==)
// }

// -------------------------------------------------------------for while do while ---------------
///--------------------------------------1
// let arr = [13,23,12,45,22,48,66,100]
// let output = []
// let i =0
// for(i;i<arr.length;i++){
//   if((arr[i]%2==0)){
//         output[i] =arr[i]
//     }
// }
// document.write(arr.length)
// --------while
// while(i<arr.length){
//     if((arr[i]%2==0)){
//         output[i] =arr[i]
//     }
//    i++
// }
// --------
// do{
//     if((arr[i]%2==0)){
//         output[i] =arr[i]
//     }
//    i++
// }while(i<arr.length)
// console.log(output.toString())



//-----------------------------2
// let arr = [23,56,4,78,5,56,45,56,210,56]
// let output = []
// let i=0
// //---------------
// for(i=0;i<arr.length;i++){
//     if(arr[i]==56)
//     continue
//    output[i] =arr[i]
// }
// for(i=0;i<arr.length;i++){
//     if(arr[i]==56)
//     arr.push(arr[i])
   
// }

//  console.log(output)
//-------------while
// while(i<arr.length){
//     if(!(arr[i]==56))
//         // continue
//        output[i] =arr[i]
//        i++
    
// }
// console.log(output.toString())
// -----------do while
// do {
//     if(!(arr[i]==56))
       
    
//     output[i] =arr[i]
//     i++
// } while (i<=arr.length)
// console.log(output.toString())
//--------------------------------3
// let a = parseInt(prompt("Enter the number"))
// let b = parseInt(prompt("Enter the exponential"))
// let d = arr(a,b)

// function arr(a,b){
//    let c = 1

//     for(i=0;i<b;i++){
//       c=c*a
//     }
//     return(c);

    // var i = 0
    //     while(i<b){
            
    //         c =c*a;
    //        i++;
    //     }
    //         return(c);

//     do{
//         c =c*a;
//           i++;
//     }while(i<b)

//     return(c);

//  }

// alert(a+' power of '+b+' is '+d)
// -----------------4

// for(a=1;a<10;a++){
    
//     for(let i=1;i<a;i++){
//     console.log(i)
//     }
//     console.log('\n')
//  }
//  let i=0
 
 // while(i<9){
 //     let a =0
 //     i++
 //     // document.write(i)
 //     while(a<i){
         
 //         a++
 //         document.write(a) 
 //     }
 //     document.write('<br><br>')
         
 // }
 
 //  do{
 //     let a=0
 //     i++
 //     do{
 //         a++
 //         document.write(a)
         
 //     }while(a<i)
 //     document.write('<br><br>')
    
 //  }while(i<9)
 
 //-------------5
 
 // let a = prompt('Enter a number ')
 
 // let b = 1
 
 // for(i=1;i<a.length;i++){
 //     b++
 // }
 
 // while(b<a.length){
 
 //     b++
 // }
 
 
 // // do{
 // //     b++
 // // }while(b<a.length)
 
 // alert(b)
 
 // ---------------------------------------OBJECTS--------------------------------------------
 // - Neseted object array
 // let a ={name:'sathish',age:19,city:'Karur',friends:{arun:'gobi',logith:'madan',madan:'Angel'}}
 // document.write(a.friends.logith)
 
 //------------OBJECTS task---------------
 // let user = {
 //             first_name:'sathish Kumar',
 //             last_name:'Shanmugam',
 //             mobile:'9100101090',
 //             email:'ksathish@gmail.com',
 //             addres:'AK nagar chennai',
 //             order_product:['re']
 //         }