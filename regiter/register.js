let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let name = formData.get("name");
  let email = formData.get("email");
  let password = formData.get("password");
  let confirmPassword = formData.get("confirmPassword");
  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Fill ALl the fields");
  } else if (password !== confirmPassword) {
    alert("Password Mismatch");
  } else {
    let userDetails = {
      name: name,
      email: email,
      password: password,
      role:"user"
    };
    console.log(userDetails);
    addUser(userDetails);
  }
}); 
let addUser = async (data) => {
  try {
    let response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (response.ok) {
      alert("Registration Successful");
    }
  } catch (error) {
    alert("Try Again");
  }
};
