let displayPackages = document.getElementById("displayPackages");

let fetchPackages = async () => {
  try {
    let response = await fetch("http://localhost:3000/bookedPackages");
    let responseData = await response.json();
    console.log(responseData);

    responseData
      .filter((value) => value.user_id === localStorage.getItem("id"))
      .map((value) => {
        let container = document.createElement("article");
        container.innerHTML = `
        <figure><img src="${value.image}"/></figure>
        <p>Place Name: ${value.name}</p>
        <p>Description: ${value.description}</p>
        <p>Days: ${value.days}</p>
        <p>Price: ${value.price}</p>
      `;

        let button = document.createElement("button");
        button.innerHTML = "Remove Package";

        button.addEventListener("click", () => {
          removePackageToUser(value.id);
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

let removePackageToUser = async (id) => {
  try {
    await fetch(`http://localhost:3000/bookedPackages/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};
