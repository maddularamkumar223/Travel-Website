let displayPackages = document.getElementById("displayPackages");

let fetchPackages = async () => {
  try {
    let response = await fetch("http://localhost:3000/packages");
    let responseData = await response.json();
    console.log(responseData);

    responseData.map((value) => {
      let container = document.createElement("article");
      container.innerHTML = `
        <figure><img src="${value.image}"/></figure>
        <p>Place Name: ${value.name}</p>
        <p>Description: ${value.description}</p>
        <p>Days: ${value.days}</p>
        <p>Price: ${value.price}</p>
      `;

      let button = document.createElement("button");
      button.innerHTML = "Add Package";

      button.addEventListener("click", () => {
        let obj = { user_id: localStorage.getItem("id"), ...value };
        addPackageToUSer(obj);
      });
      container.append(button);
      container.id = "packageContainer";

      displayPackages.append(container);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchPackages();

let addPackageToUSer = async (data) => {
  try {
    let response = await fetch("http://localhost:3000/bookedPackages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 201) {
      alert("Package Added Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
