let loginUser = localStorage.getItem("id");
let displayProfile = document.getElementById("displayProfile");

let fetchUser = async (id) => {
  try {
    let response = await fetch(`http://localhost:3000/users/${id}`);
    let responseData = await response.json();
    console.log(responseData);

    let container = document.createElement("article");
    let email = document.createElement("p");
    let userName = document.createElement("p");
    let button = document.createElement("button");

    email.innerHTML = `Email: ${responseData.email}`;
    userName.innerHTML = `Name: ${responseData.name}`;
    button.innerHTML = "LOGOUT";

    button.addEventListener("click",()=>{
        logout()
    })

    container.append(userName, email, button);
    displayProfile.append(container);
  } catch (error) {
    console.log(error);
  }
};
fetchUser(loginUser);

let logout = () => {
  localStorage.removeItem("id");
  localStorage.removeItem("role");
  location.href = "../login/login.html";
};
