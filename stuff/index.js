
let formdata=JSON.parse(localStorage.getItem("data")) ||[];

document.getElementById("employeedata").addEventListener("submit",table)
function table(event){
event.preventDefault();
window.location.reload();
let form=document.getElementById("employeedata");

let firstname=form.firstname.value;
let lastname=form.lastname.value;
let birthdate=form.birthdate.value;
let email=form.email.value;
let mobile=form.mbl.value;
let city=form.city.value;
let pincode=form.pincode.value;

let datafromconstruct=new construct(firstname,lastname,birthdate,email,mobile,city,pincode)

formdata.push(datafromconstruct);
localStorage.setItem("data",JSON.stringify(formdata));
}

// Creating a constructor function;

function construct(f,l,b,e,m,c,p){
    this.firstname=f;
    this.lastname=l;
    this.birthdate=b;
    this.email=e;
    this.mobile=m;
    this.city=c;
    this.pincode=p;
}

// Creating a function for appending data of the form in table;

 const append=(formdata)=>{

  formdata.map(function(elem){
  
    var tr=document.createElement("tr");
    
    var td1=document.createElement("td");
    td1.innerText=elem.firstname
    var td2=document.createElement("td");
    td2.innerText=elem.lastname
    var td3=document.createElement("td");
    td3.innerText=elem.birthdate
    var td4=document.createElement("td");
    td4.innerText=elem.email
    var td5=document.createElement("td");
    td5.innerText=elem.mobile
    var td6=document.createElement("td");
    td6.innerText=elem.city
    var td7=document.createElement("td");
    td7.innerText=elem.pincode

    
tr.append(td1,td2,td3,td4,td5,td6,td7);
document.querySelector("tbody").append(tr);


  })
}

append(formdata);