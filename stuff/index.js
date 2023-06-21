
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

 
