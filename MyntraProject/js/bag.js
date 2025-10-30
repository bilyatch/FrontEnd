
let filtered=[];
let mapped;

onLoad();

function onLoad(){
    let bag_item=localStorage.getItem('item');
    bagged_item= bag_item ? JSON.parse(bag_item): [];
    mapping();
    DisplayBagItem();
    displayAmount();
}

//BY the method of map
function mapping(){
  console.log(mapped);
  mapped=bagged_item.map((itemid)=>{
    for (let i=0;i<items.length;i++){
      if(itemid==items[i].id){
        return items[i];
      }
    }
  });
console.log(mapped);
}

function removeCart(itemId){
  for(let i=0;i<mapped.length;i++){
    if(itemId==mapped[i].id){
      mapped.splice(i,1);
    }
    
  }

  for(let i=0;i<bagged_item.length;i++){
    if(itemId==bagged_item[i]){
      bagged_item.splice(i,1);
      localStorage.setItem('item',JSON.stringify(bagged_item));
    }
  }

  DisplayBagItem();
  displayAmount();
}



//BY the method of filter
// function filtering(){
//     bagged_item.forEach((item)=>{
//         bagged_item.filter((item)=>{
//             return items[item-1].id==item;
//     });
//     filtered.push(items[item-1]);
//     });

//     console.log(filtered);
    
// }



function DisplayBagItem(){
    let container=document.querySelector('.bag-items-container');
  
    innerHTML='';
    mapped.forEach((item) => {
    innerHTML+=`
    <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src=${item.image}>
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">14 days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">10 Oct 2023</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeCart(${item.id}); item_bagged();">X</div>
          </div>
`;
    });
    
container.innerHTML=innerHTML;
}



function displayAmount(){
  let TotalMRP=0;
  let Discount=0;
  let TotalAmt=0;
  let ConvenienceFee=99;
  mapped.forEach((item)=>{
  TotalMRP+=item.original_price;
  Discount+=(item.discount_percentage/100)*item.original_price;
  Discount=Math.floor(Discount);
  TotalAmt=Math.floor(TotalMRP-Discount+ConvenienceFee);
});

let bagSummary=document.querySelector(".bag-summary");

bagSummary.innerHTML=
  `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${mapped.length} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${TotalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs ${Discount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${TotalAmt}</span>
            </div>
    
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
    </div>`;



}



