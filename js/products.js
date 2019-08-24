function sortProducts(criteria, array){

}

function showProductsList(currentProductsArray){
    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let products = currentProductsArray[i];

            htmlContentToAppend += `
            <a href="products-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                    </div>
            
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ products.name +`</h4>
                            <small class="text-muted">` + products.soldCount + ` artículos vendidos</small>
                            </div>
                        <p class="mb-1">` + products.description + `</p>
                        <p>` + products.cost + products.currency + `</p>
                    </div>
                </div>
            </a>
            `
        }

        document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
    }
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
     showProductsList(resultObj.data);
        }
    });    

});