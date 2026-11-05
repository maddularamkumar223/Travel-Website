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
        <button id="addPackageButton">Add Package</button>
      `;
      container.id = "packageContainer";

      displayPackages.append(container);
    });
  } catch (error) {
    console.log(error);
  }
};

fetchPackages();
