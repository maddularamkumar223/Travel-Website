let navbarContainer = document.getElementById("nav_container");

let logo = [
  {
    name: "Company Logo",
    src: "3",
    href: "../homepage/index.html",
  },
];

let navigationData = [
  {
    name: "Home",
    href: "../homepage/index.html",
    id: "home",
  },
  {
    name: "Add Package",
    href: "../addPackage/addPackage.html",
    id: "addPackage",
  },
  {
    name: "Trip Packages",
    href: "../tripPackages/tripPackage.html",
    id: "tripPackages",
  },
  {
    name: "Booked Packages",
    href: "../bookedPackages/bookedPackages.html",
    id: "bookedPackages",
  },
];

let profileData = [
  {
    name: "Notifications",
    href: "#",
    id: "notifications",
  },
  {
    name: "Profile",
    href: "#",
    id: "profile",
  },
];
let createNavbar = (navbarData) => {
  let container = document.createElement("article");
  let ul = document.createElement("ul");
  navbarData.map((value) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    if (value.name === "Company Logo") {
      let img = document.createElement("img");
      img.src = value.src;
      img.alt = value.name;
      a.append(img);
      a.href = value.href;
    } else {
      a.innerHTML = value.name;
      a.href = value.href;
    }
    li.id = value.id;
    li.append(a);
    ul.append(li);
  });
  container.append(ul);
  navbarContainer.append(container);
};

createNavbar(logo);
createNavbar(navigationData);
createNavbar(profileData);

let role = localStorage.getItem("role");
console.log(role);

let addPackageComponent = document.getElementById("addPackage");
addPackageComponent.style.display = "none";
console.log(addPackageComponent);
if (role === "admin") {
  addPackageComponent.style.display = "block";
}
