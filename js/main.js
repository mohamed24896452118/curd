/*
1-ui vs frontend
2-js intro
3-where to write js(internal,external,inline)
4-o/p methods to user,comment,semicol
window.alert('hello from alert');
document.getElementById('demo').innerHTML='web development';
console.log('hello from console');  //for development purpose
5-variables
6-data types 
 -primitive data-types(string,number,boolean,null,undefined)
 -non-primit (object)
7-prompt 
8-logical pathes(if,if,else if)
 = assignment op
 ==  comparision op
 === identical op
 4/2 
 5/2
 operators %
 && || logical ops
9- arithmatic  op +,-,*,/
 + arith, concatenation op
10-switch case 
----------------------------------
1-loops(for,while,do-while)
2-functions details
3-return statement,rules
4-types of functions && hoisting && interview question
5-scope
6-functional programming language(first class object)
    -function can be assignmed to a variable
    -function can be passed to another fun
    -function can be returned from another fun.
    -function can be property of object

7-iife(immeditely invoked fun expression)  
8-object details
9-built-in objects 
10-array
11-built-in functions in array
*/

var empolyee =
{
    name: 'nadia',
    age: 30,
    salary: 102392,
    work: function () {
        window.alert('nadia working')
    },
    child: {
        name: 'ali',
        age: 2,
        walk: function () {
            window.alert('ali walking')
        }
    }
}

/*
  built-in methods
console.log(friends.length);
console.log(friends.indexOf('mona'));
console.log(friends.lastIndexOf('mona'));
console.log(friends.includes('nadia'));
console.log(friends.concat('nadia'));
-------------------------------

friends.push('nadia');
friends.unshift('nadia');
friends.pop();
friends.shift();
friends.splice(3,1);  //remove
friends.splice(3,0,'4a3ban');  //add
friends.splice(3,1,'4a3ban');  //add,remove
console.log(friends.sort())
console.log(friends.sort())
*/
//inputs nafsohom
//move then improve
var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var searchInput = document.getElementById('searchInput');
var addBtn = document.getElementById('addBtn');
var inputs = document.getElementsByClassName('form-control');
var currentIndex=0;


var products = [];

if (JSON.parse(localStorage.getItem('productsList')) != null) {
    products = JSON.parse(localStorage.getItem('productsList'));
    displayData()
}
//localStorage.setItem('test','habmozo');
addBtn.onclick = function () {
    if (addBtn.innerHTML == 'add product') {  //add mode
        addProduct();
    }
    else {  //update mode
        updateProduct()
    }
    displayData();
    clearForm();
}
function addProduct() {
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }
    products.push(product);
    localStorage.setItem('productsList', JSON.stringify(products))
}
function displayData() {
    var cartona = '';
    for (var i = 0; i < products.length; i++) {
        cartona += `<tr>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].category}</td>
                <td>${products[i].desc}</td>
                <td><button onclick="getProductInfo(${i})" class='btn btn-warning'>update</button></td>
                <td><button onclick="deleteProduct(${i})" class='btn btn-danger'>delete</button></td>
               </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayData();
    localStorage.setItem('productsList', JSON.stringify(products))
}
function clearForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
}

searchInput.onkeyup = function () {
    var cartona = '';
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            cartona += `<tr>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].category}</td>
            <td>${products[i].desc}</td>
            <td><button onclick="getProductInfo(${i})" class='btn btn-warning'>update</button></td>
            <td><button onclick="deleteProduct(${i})" class='btn btn-danger'>delete</button></td>
           </tr>`
        }

    }
    document.getElementById('tableBody').innerHTML = cartona
}
function getProductInfo(index) {
    currentIndex=index;
    var currentProduct = products[index];
    productNameInput.value = currentProduct.name;
    productPriceInput.value = currentProduct.price;
    productCategoryInput.value = currentProduct.category;
    productDescInput.value = currentProduct.desc;
    addBtn.innerHTML = 'update product';

}
function updateProduct(){
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
    }
    products[currentIndex]=product;
    localStorage.setItem('productsList', JSON.stringify(products))
    addBtn.innerHTML = 'add product';
}


// productNameInput .onkeyup=function(){
//     var nameRejex=/^[A-Z][a-z]{2,8}$/;
//     if(nameRejex.test(productNameInput.value)){
//         addBtn.removeAttribute('disabled');
//     }
//     else{
//         addBtn.disabled='true';
//     }
// }
var nameAlert=document.getElementById('nameAlert');
productNameInput .onkeyup=function(){
    var nameRejex=/^[A-Z][a-z]{2,8}[0-9]{2}$/;
    if(nameRejex.test(productNameInput.value)){
        addBtn.removeAttribute('disabled');
        productNameInput.classList.add('is-valid');
        productNameInput.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    }
    else{
        addBtn.disabled='true';
        productNameInput.classList.add('is-invalid');
        productNameInput.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');
    }
}

// var regex=/^[1-9][0-9]{0,4}$/;
var priceAlert=document.getElementById('priceAlert');
productPriceInput .onkeyup=function(){
    var regex=/^[1-9][0]{0,4}$/;
    if(regex.test(productPriceInput.value)){
        addBtn.removeAttribute('disabled');
        productPriceInput.classList.add('is-valid');
        productPriceInput.classList.remove('is-invalid');
        priceAlert.classList.add('d-none');
    }
    else{
        addBtn.disabled='true';
        productPriceInput.classList.add('is-invalid');
        productPriceInput.classList.remove('is-valid');
        priceAlert.classList.remove('d-none');
    }
}









/*
string built-in methods
  console.log(userName.length);
  console.log(userName.indexOf('a'));
  console.log(userName.lastIndexOf('a'));
  console.log(userName.charAt(i));
  console.log(userName.search('z'));

  console.log(userName.includes('z'));
  console.log(userName.startsWith('N'));
  console.log(userName.endsWith('A'));

  console.log(userName.toUpperCase());
  console.log(userName.toLowerCase());

console.log(userName.substr(3,9));
console.log(userName.substring(3,9));
console.log(userName.slice(9,3));

*/

