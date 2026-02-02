function getApi() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            var myText = "";
            for (let i = 0; i < data.products.length; i++) {
                myText += `
                    <div class="col-md-3 mb-4">
                        <img src="${data.products[i].images[2]}" alt="${data.products[i].title}" class="w-75 h-75">
                        <h5 class="mr-2">${data.products[i].title}</h5>
                        <p>Price: $${data.products[i].price}</p>
                        <p>Rating: ${data.products[i].rating} ⭐</p>
                    </div>
                `;
            }
            document.getElementById("product-row").innerHTML = myText;
        }
    };
    xhttp.open(
        "GET",
        "https://dummyjson.com/products/category/smartphones",
        true,
    );
    xhttp.send();
}
getApi();
