const header = document.createElement("header");
const webTitle = document.createElement("h2");
const ul = document.createElement("ul");
const headerItems = ["Home", "Blog", "Privacy Policy", "Contact Us", "Profile"];
const featureProducts = document.createElement("section");
const footer = document.createElement("footer");
const copyRight = document.createElement("p");

header.className = "header";
header.style.cssText = "box-shadow:0 0.5rem 1.5rem #0d2e2e23;padding:0.7rem;display:flex;flex-direction:row;justify-content:space-between;align-items:center;";

webTitle.innerHTML = "artizon";
webTitle.style.cssText = "margin:0";

headerItems.forEach((item) => {
   const li = document.createElement("li");
   li.textContent = item;
   ul.appendChild(li);
   li.style.cssText = "padding:0;height:fit-content;";
});

ul.style.cssText = "display:flex;flex-direction:row;justify-content:center;gap:1rem;margin:0;padding:0;height:fit-content;";

featureProducts.className = "feature-products-section";

for(i=0; i<=50; i++){
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.textContent = `product ${i}`;
    featureProducts.appendChild(productCard);
    productCard.style.cssText = "flex:1 1 25rem;padding:3.5rem 1rem;box-shadow:0 0.5rem 1.5rem #0d2e2e23;font-size:1.1rem;text-align:center;";
}

featureProducts.style.cssText = "display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;gap:1rem;flex-wrap:wrap;margin-top:2rem;margin-bottom:2rem;padding:0 2rem;";

header.appendChild(webTitle);
header.appendChild(ul);
copyRight.innerHTML = "artizon copy right 2024";
copyRight.style.cssText = "margin:0;padding:0;";

footer.style.cssText = "background-color:green;color:#fff;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:1rem 0;";
footer.appendChild(copyRight);

document.body.appendChild(header);
document.body.appendChild(featureProducts);
document.body.appendChild(footer);