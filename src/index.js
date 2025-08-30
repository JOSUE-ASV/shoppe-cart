
import * as serviceCart from "./services/cart.js"
import createItem from "./services/item.js"

const mycart = []

console.log('Welcome to the your Shopee Cart!')

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborguini", 39.99, 3)

await serviceCart.addItem(mycart,item1)
await serviceCart.addItem(mycart,item2)


await serviceCart.deleteItem(mycart, item2)
await serviceCart.deleteItem(mycart, item1)



await serviceCart.showCart(mycart)
await serviceCart.calculateTotal(mycart)