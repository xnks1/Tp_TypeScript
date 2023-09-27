
type Rating = {
    rate: number;
    count: number;
};


type Product = {
id: string;
title: string;
price: number;
description: string;
category: string;
image: string;
rating: Rating;
};


fetch ('https://fakestoreapi.com/products')
.then(res => res.json())
.then((products: Product[])=> {

    //tablaHTML
    let tableHTML: string ='<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';

    //rellenar rows tabla con for
    products.forEach((p: Product) => {
        tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
        });

    // Close table body
    tableHTML += '</tbody>';

    //asigno valores
    document.querySelector('#table_element')!.innerHTML = tableHTML;

    //esconder spiner
    const spiner_Elemt: HTMLElement = document.querySelector('#spiner_cont')!;
    spiner_Elemt.style.display= 'none'

});
