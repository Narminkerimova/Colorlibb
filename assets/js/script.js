const colorlib_rezume = document.querySelector(".colorlib_rezume")
const rezume_nav = document.querySelector(".rezume_nav")
const remove_button = document.querySelector(".remove_button")
const colorlib_nav = document.querySelector(".colorlib_nav")
const main_nav = document.querySelector(".main_nav")
const menu_nav = document.querySelector(".menu_nav")
const menu_btn = document.getElementById("menu_btn")
const portfolio_products = document.querySelector(".portfolio_products")
const category_links = document.querySelectorAll(".category_links")

const port_data = [
    {
        image: "./assets/img/prod1.webp",
        name: "Square Box Mockup",
        category: "Mockup"
    },
    {
        image: "./assets/img/prod2.webp",
        name: "Product Box Package Mockup",
        category: "Mockup"
    },
    {
        image: "./assets/img/prod3.webp",
        name: "Creative Package Design",
        category: "Packaging"
    },
    {
        image: "./assets/img/prod4.webp",
        name: "Packaging Brand",
        category: "Packaging"
    },
    {
        image: "./assets/img/prod5.webp",
        name: "Isometric 3D Extrusion",
        category: "Typography"
    },
    {
        image: "./assets/img/prod6.webp",
        name: "White Space Photography",
        category: "Photography"
    },
]

colorlib_rezume.addEventListener("click", function () {
    rezume_nav.classList.toggle("rezume_hidden")
})
remove_button.addEventListener("click", function () {
    colorlib_nav.classList.add("colorlib_hidden")
    main_nav.style.marginTop = ("0vh")
    menu_nav.style.marginTop = ("10vh")
})
menu_btn.addEventListener("click", function () {
    menu_nav.classList.toggle("hidden_menu")
})

function renderProducts(products) {
    portfolio_products.innerHTML = "";
    products.forEach(prod => {
        portfolio_products.innerHTML += `
        <div class="port_prod_card">
            <div class="prod_card_image">
                <img src="${prod.image}" alt="prod">
            </div>
            <div class="prod_card_title">
                <div class="prod_name">${prod.name}</div>
                <div class="prod_categ">${prod.category}</div>
            </div>
        </div>
        `;
    });
}
renderProducts(port_data);

category_links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const category = this.textContent;
        let filteredProducts;
        if (category === "All") {
            filteredProducts = port_data;
        } else {
            filteredProducts = port_data.filter(p => p.category === category);
        }
        renderProducts(filteredProducts); 
    });
});
