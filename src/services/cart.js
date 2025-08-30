// quais ações meu carrinho pode fazer

//adicionar item no carrinho
//deleter item do carrinho
// remover um item
//calcular o total


async function addItem(userCart, item){
    userCart.push(item)

}

async function deleteItem(userCart, product){

    const indexFound = userCart.findIndex((item)=> item.name === product.name)
   

    if(userCart[indexFound].quantity > 1){

        userCart[indexFound].quantity -= 1

        return
    }

    if(userCart[indexFound].quantity ===1 ) {
        userCart.splice(indexFound, 1)
    }



   
    

    //diminui um item
}

async function removeItem(userCart, index){

    if(index >= 0 && index <= userCart.length){
        userCart.splice(index - 1,1)

    }
}


async function calculateTotal(userCart){
    console.log('Shopee Cart Total is: ')
    console.log(userCart.reduce((total, index)=> total + index.subtotal(),0))

}

async function showCart(userCart)
{
    userCart.forEach(element => {
        console.log(`nome: ${element.name} 
            price: ${element.price}  ${element.quantity}         
            ${element.subtotal()}  
            
            `)
    });
}
export {
    calculateTotal, removeItem, deleteItem, addItem, showCart
}