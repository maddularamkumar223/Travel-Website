let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(form);
  let destination = formData.get("destination");
  let price = formData.get("price");
  let days = formData.get("days");
  let image = formData.get("image");
  let description = formData.get("description");
  let fileReader = new FileReader();
  if (
    description === "" ||destination === "" ||price === "" ||days === "" ||image ===""
  ) {
    alert("Fill All the fields");
  } else {
    fileReader.onload = (e) => {
      let imageUrl = e.target.result;
      let details = {
        name: destination,
        description: description,
        price: price,
        days: days,
        image: imageUrl,
      };
      addPackage(details);
    };
    fileReader.readAsDataURL(image);
  }
});

let addPackage = async (data) => {
  try {
    let response = await fetch("http://localhost:3000/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      alert("Package Added");
    }
  } catch (error) {
    console.log(error);
  }
};
