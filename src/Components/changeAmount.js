const changeAmount = function(){
    const addItemtoCart=function(item){
        if(cart.length==0){
        var quantity = 1;
        cart.push({item, quantity})
        }
        else{
        cart.map((product)=>{
            if(product.item == item){
            product.quantity = product.quantity + 1 
            }
        })
        }
        console.log(cart)
    return cart
  }
  const removeItemfromCart = function(){
    if(cart.length>0){
      cart.map((product)=>{
        if(product.item==item){
          product.quantity = product.quantity - 1
          
          if(product.quantity==0){
            cart.splice(cart.indexOf(product) ,1)
          }
        }
      })
    }
    console.log(cart)
    return cart
  }
  return()
}