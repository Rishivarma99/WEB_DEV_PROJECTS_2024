
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// WEBSITE CONTENT ON START: 
window.addEventListener
  ("DOMContentLoaded",
    function () {
      showMenu(menu);
      displayBtn();
    }
  )

// GETTING HTML ELEMENTS:
const menuItems = document.querySelector(".menu-items");
const btnDiv = document.querySelector(".menu-types-btn");

// FUNCTION TO SHOW THE MENU LIST 
function showMenu(menu) {
  menuItems.innerHTML = "";

  menu.forEach((item) => {

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const image = document.createElement("img");
    image.classList.add("photo");
    image.setAttribute("src", item.img);
    itemDiv.appendChild(image);

    const itemInfoDiv = document.createElement("div");
    itemDiv.classList.add("item-info");
    itemDiv.appendChild(itemInfoDiv);


    const header = document.createElement("header");
    itemInfoDiv.appendChild(header);

    const itemName = document.createElement("h3");
    itemName.textContent = item.title;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = item.price;

    header.appendChild(itemName);
    header.appendChild(itemPrice);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.desc;
    itemInfoDiv.appendChild(itemDescription);

    menuItems.appendChild(itemDiv);

  });
}

//FUNCTION TO DISPLAY AND ADD EVENTLISTNER TO BUTTONS 
function displayBtn() {

  // WE ARE COMPLETELY CREATING THE BUTTONS AND ADDING THME IN HTML 
  // DYBNAMICALLY 
  btnDiv.innerHTML = "";

  // Intially create the catogoes array from menu array to add them into buttons 
  // create a array named value that have have all name of categories from the menu array  
  const categories = menu.reduce( // using reduce after the function complete then reduce returns the acumulator 
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values; // each iteration accumulator is getting pushed 
    }
    , ["all"] // intial accumulator value array with all
  )
  console.log(categories); // cat ready 

  // CREATE THE BUTTONS AND INSERTING THEM  
  const buttons = categories.map((category) => {
    return ` <button data-id=${category} class="menu-btn" >${category}</button>`
  }).join("");
  btnDiv.innerHTML = buttons;

  // NOW BUTTONS READY ADD EVENT LISTNER 
  const categoryBtn = document.querySelectorAll(".menu-btn");
  // console.log(categoryBtn);
  categoryBtn.forEach((btn) => {

    btn.addEventListener("click", function (e) {
      const newMenu = menu.filter((item) => item.category == e.target.dataset.id); // we are filtering acc to cat
      showMenu(newMenu);
      if (e.target.dataset.id == "all") {
        showMenu(menu);
      }
      else {
        showMenu(newMenu);
      }
    }
    )
  }
  )
}

