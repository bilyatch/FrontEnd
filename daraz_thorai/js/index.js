


let slides = document.querySelectorAll('.slide');
let index = 0;

function changeSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;  // loops back to first image
  slides[index].classList.add('active');
}

setInterval(changeSlide, 3000); // changes image every 3 seconds



let items_container=document.querySelector('.item_container');
let innerHTML=' ';
items.forEach(item=>{

   innerHTML+= `<button class="item">
                        <div class="image"><img src=${item.image}></div>
                        <div class="product_name">${item.product_name}</div>
                        <div class="price">
                            <div class="current_price">Rs.${item.current_price}</div>
                            <span class="original_price" >Rs.${item.original_price}</span>
                            <span class="discount">-${item.discount}%</span>
                        </div>
                    </button>`;

})
items_container.innerHTML=innerHTML;
