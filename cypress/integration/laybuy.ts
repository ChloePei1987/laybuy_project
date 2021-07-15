import {Mainpage} from "../pages/Main_page"
import {Tilespage} from "../pages/Tiles_page"
//import {TileDetailpage} from "../pages/TileDetail_page"

const mainpage = new Mainpage()
const tilespage = new Tilespage()
//const tileDetailpage = new TileDetailpage()

it('search', function(){

    // navigate to shopping page
    mainpage.navigate('https://sandbox-www.laybuy.com/nz/shop-here')
    //accept the cookies
    mainpage.clickButton('.iubenda-cs-accept-btn')
    // type "Heart of Oxford" in search bar
    mainpage.searchBar('Heart of Oxford')
    //click search 
    mainpage.clickButton('.header-module--search-button--fsejo > :nth-child(2) > svg > path')

   
})
  
it('Tiles', function(){
   // choose shop
    tilespage.chooseTile('2313')
    //tilespage.waittime(5000)

})
