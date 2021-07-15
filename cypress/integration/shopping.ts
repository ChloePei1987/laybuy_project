import {TileDetailpage} from "../pages/TileDetail_page"
import {Itempage} from "../pages/item_page"
const tileDetailpage = new TileDetailpage()
const itempage = new Itempage()

it ('shopping',function(){
    tileDetailpage.navigate('https://with-love-styling.myshopify.com/')
    tileDetailpage.clickLink('.site-nav__label','Our Packages')
    
   
})

it ('chooseitem',function(){
    
    //loop for add items
    for (let i = 1; i < 3; i++) {
    itempage.chooseItem(i)
    itempage.clickbutton('.product-form__item--submit > .btn')
    itempage.assertproduct('.cart__product-title','The Lux')
    itempage.clickbutton('.cart-header > .text-link') 
    }

    // go to shopping bag
    itempage.clickbutton('.site-header__cart > .icon')  
    
})