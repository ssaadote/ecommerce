const SERVER_BASE = "http://localhost:3000";
const CATEGORIES_URL = SERVER_BASE + "/category/all";
const CATEGORY_INFO_URL = SERVER_BASE + "/category/?id=1234";
const PUBLISH_PRODUCT_URL = SERVER_BASE + "/product/";
const PRODUCTS_URL = SERVER_BASE + "/product/all";
const PRODUCT_INFO_URL = SERVER_BASE + "/product/?id=5678";
const CART_INFO_URL = SERVER_BASE + "/cart/?id=987";
const CART_BUY_URL = SERVER_BASE + "/cart/";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
