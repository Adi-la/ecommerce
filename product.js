async function product_view() {
    var products=await fetch("https://fakestoreapi.com/products", {
        method : "GET"
    })
    var data=await products.json()
    let product_list = ""  //initilization- empty variable
    for(let p of data) {
        product_list = product_list + `<div class="card" style="width: 18rem;">
  <img src="${p.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${p.title}</h5>
    <p class="card-text">${p.description}</p>
    
  </div>
</div>`
    }

    document.getElementById("product_space").innerHTML=product_list

}

product_view()
