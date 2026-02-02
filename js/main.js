//============ Fetch API =============== //

function getApi() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            
            var myText = "";
            for (let i = 0; i < data.products.length; i++) {
                myText += `
                    <div class="col-md-3 card p-3 mt-3 text-center">
                        <img src="${data.products[i].images[2]}" alt="${data.products[i].title}" class="w-75  img-fluid ">
                        <h5 class="mt-2">${data.products[i].title}</h5>
                        <p>Descripe: ${data.products[i].description}</p>
                        <p>Price: $${data.products[i].price} ---- Rating: ${data.products[i].rating}⭐</p>
                        <p>Category: ${data.products[i].category}</p>
                        <button class="btn btn-primary rounde w-50 m-auto"}>Buy Now</button>
                    </div>
                `;
            }
            document.getElementById("product-row").innerHTML = myText;
        }
    };
    xhttp.open("GET","https://dummyjson.com/products/category/smartphones",true);
    xhttp.send();
}
getApi();
