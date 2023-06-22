let formdata = JSON.parse(localStorage.getItem("data")) || [];

document.getElementById("employeedata").addEventListener("submit", table);
function table(event) {
  event.preventDefault();
  window.location.reload();
  let form = document.getElementById("employeedata");
  let firstname = form.firstname.value;
  let lastname = form.lastname.value;
  let birthdate = form.birthdate.value;
  let email = form.email.value;
  let mobile = form.mbl.value;
  let city = form.city.value;
  let pincode = form.pincode.value;

  let datafromconstruct = new construct(
    firstname,
    lastname,
    birthdate,
    email,
    mobile,
    city,
    pincode
  );

  // Validation for the first name
  if (datafromconstruct.firstname == "") {
    document.getElementById("username").innerHTML =
      "Please fill the first name";
    return false;
  }
  if (datafromconstruct.firstname <= 2 || datafromconstruct.firstname > 20) {
    document.getElementById("username").innerHTML =
      "**Firstname should be between 2 and 20";
    return false;
  }

  if (!isNaN(datafromconstruct.firstname)) {
    document.getElementById("username").innerHTML =
      "** only characters are allowed";
    return false;
  }



  if (datafromconstruct.lastname == "") {
    document.getElementById("usernamelast").innerHTML =
      "**Please fill the last name";
    return false;
  }


  if (datafromconstruct.birthdate == "") {
    document.getElementById("birth").innerHTML = "**Please fill the birthdate ";
    return false;
  }
  
  
  
   // Validation for the Email
  if (datafromconstruct.email == "") {
    document.getElementById("emailed").innerHTML = "**Please fill the email";
    return false;
  }
  if (datafromconstruct.email.indexOf("@") <= 0) {
    document.getElementById("emailed").innerHTML = "**Invalid postition";
    return false;
  }
  if (
    datafromconstruct.email.charAt(datafromconstruct.email.length - 4) != "." &&
    datafromconstruct.email.charAt(datafromconstruct.email.length - 3) != "."
  ) {
    document.getElementById("emailed").innerHTML = "**Invalid postition";
    return false;
  }

// Validation for the mobile number 

  if (datafromconstruct.mobile == "") {
    document.getElementById("phone").innerHTML =
      "**Please fill the mobile number";
    return false;
  }
  if (isNaN(datafromconstruct.mobile)) {
    document.getElementById("phone").innerHTML =
      "**User must write only digits";
    return false;
  }
  if (datafromconstruct.mobile.length!=10) {
    document.getElementById("phone").innerHTML =
      "**Please fill the mobile number";
    return false;
  }


  if (datafromconstruct.city == "") {
    document.getElementById("shehr").innerHTML = "Please fill the city";
    return false;
  }
  if (datafromconstruct.pincode == "") {
    document.getElementById("pin").innerHTML = "Please fill the pincode ";
    return false;
  }

  formdata.push(datafromconstruct);
  localStorage.setItem("data", JSON.stringify(formdata));
  console.log(datafromconstruct);
}
function construct(f, l, b, e, m, c, p) {
  this.firstname = f;
  this.lastname = l;
  this.birthdate = b;
  this.email = e;
  this.mobile = m;
  this.city = c;
  this.pincode = p;
}

// Creating a function for appending data of the form in table;

const append = (formdata) => {
  let all_products = document.getElementById("all_products");
  all_products.innerHTML = null;
  formdata.map(function (elem) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let image1 = document.createElement("img");
    image1.src =
      "https://th.bing.com/th/id/OIP.eXWcaYbEtO2uuexHM8sAwwHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";

    let firstname = document.createElement("h2");
    firstname.innerText = `${elem.firstname} ${elem.lastname}`;

    let dateofbirth = document.createElement("p");
    dateofbirth.innerText = `Birthdate:${elem.birthdate}`;
    let email = document.createElement("p");
    email.innerText = `Email:${elem.email}`;
    let mobile = document.createElement("p");
    mobile.innerText = `Mobile:${elem.mobile}`;
    let city = document.createElement("p");
    city.innerText = `City:${elem.city}`;
    let pincode = document.createElement("p");
    pincode.innerText = `Pincode:${elem.pincode}`;

    box.append(image1, firstname, dateofbirth, email, mobile, city, pincode);
    all_products.append(box);
  });
};

// Called that append function here

append(formdata);

// Searching part of the Table 
const handleclick=()=>{
  let val=  document.getElementById("search").value
 
  console.log(formdata)
  var nayaformdata=formdata.filter(function(elem){
    return elem.firstname.toLowerCase().includes(val)
    
   
  })
 
  append(nayaformdata)

}
