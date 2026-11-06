let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let email = formData.get("email");
  let password = formData.get("password");

  if (email === "" || password === "") {
    alert("Fill All The FIelds");
  } else {
    let loginDetails = {
      email: email,
      password: password,
    };
    console.log(loginDetails);
    validation(loginDetails);
  }
});
let validation = async (data) => {
  try {
    let response = await fetch("http://localhost:3000/users");
    let responseData = await response.json();
    let findSingleUser = responseData.find(
      (user) => user.email === data.email && user.password === data.password,
    );
    if (findSingleUser !== undefined) {
      console.log(findSingleUser);
      alert("Login Successful");
      localStorage.setItem("id", findSingleUser.id);
      localStorage.setItem("role", findSingleUser.role);
      location.href = "../homepage/index.html";
      // sessionStorage.setItem("id", findSingleUser.id);
      // sessionStorage.setItem("role", findSingleUser.role);
    } else {
      alert("User Not Found");
    }
  } catch (error) {
    alert("Try Again");
  }
};
