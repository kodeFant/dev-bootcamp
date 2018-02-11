var faker = require("faker")
// faker.commerce.productName()
// faker.commerce.price()
const productList = (num) => {
    console.log("====================");
    console.log("WELCOME TO MY SHOP!");
    console.log("====================");
    for (var i = 0; i < num; i++) {
        console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
    }
}
productList(10);