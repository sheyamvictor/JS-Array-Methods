
console.log("This Keyword ");

let name = {
    firstname:"joseph",
    
    lastname: "sheyam",
    
    printname : function (){
    console.log(this.firstname + " " + this.lastname)
}

}

name.printname();

let name2 = {
    firstname:"john",
    
    lastname: "doe",
}
 name.printname.call(name2)
 
 
 
 let address = {
     
     home:"Nehru Nagar",
     
     street: "9th street",
 }
  let address2 = {
     
     home:"Nehru Nagar",
     
     street: "5th street",
 }

 let address3 = {
     
    home:"Nehru Nagar",
    
    street: "4th street",
}
 let printAddress = function (dist,pincode) {
     
     console.log(this.street +" "+ this.home +" "+ "from" +" "+ dist +" - "+ pincode)
 }
 
 console.log("Call-Method")
 
 printAddress.call( address , "Ramanathapuram" ,623501)
 

  console.log("Apply -Method")
  
 printAddress.apply(address2, ["ramanathapuram",623503])
 
 
 console.log("Bind-method")
 
 let printMyName = printAddress.bind(address3,"ramanthapuram",623501)

 
 printMyName();

 // Sort

//  const arr =[1,2,3,4,5,8000,6,9000,7]

//  function sorting(num){
//     setTimeout(()=>{
//         console.log(num)
//     },num)
//  }

//  arr.forEach(item =>sorting(item))

