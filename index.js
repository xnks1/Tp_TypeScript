fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    //tablaHTML
    var tableHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
    //rellenar rows tabla con for
    products.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td></tr>");
    });
    // Close table body
    tableHTML += '</tbody>';
    //asigno valores
    document.querySelector('#table_element').innerHTML = tableHTML;
    //esconder spiner
    var spiner_Elemt = document.querySelector('#spiner_cont');
    spiner_Elemt.style.display = 'none';
});
