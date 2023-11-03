const product = [
    {
        id: 0,
        image: 'image/a-11.jpg',
        price: 115,
        discounted:60,
    },
    {
        id: 1,
        image: 'image/a-22.jpg',
        price: 195,
        discounted:95,
    },
    {
        id: 2,
        image: 'image/a-33.jpg',
        price: 95,
        discounted:40,
    },
    {
        id: 3,
        image: 'image/a-44.jpg',
        price: 195,
        discounted:95,
    },
    {
        id: 4,
        image: 'image/a-55.jpg',
        price: 45,
        discounted:20,
    },
    {
        id: 5,
        image: 'image/a-66.jpg',
        price: 95,
        discounted:50,
    },
    {
        id: 6,
        image: 'image/a-77.jpg',
        price: 65,
        discounted:20,
    },
    {
        id: 7,
        image: 'image/a-88.jpg',
        price: 84,
        discounted:36,
    }

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, price,discounted} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
    
        <h6><s>$ ${price}.00</s></h6>
        <h6>$ ${discounted}.00</h6>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, price,discounted} = items;
            total=total+discounted;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                
                <h2 style='font-size: 15px;'>$ ${discounted}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}