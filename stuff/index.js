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

  // var validateError = {};
  // const naamvalidation = /^[a-zA-Z]*$/;
  // const televalidation = /^\d{10}$/;
  // const emailvalidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


  formdata.push(datafromconstruct);
  localStorage.setItem("data", JSON.stringify(formdata));
}

// Creating a constructor function;

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




