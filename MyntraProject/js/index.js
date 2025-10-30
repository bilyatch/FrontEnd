
let bagged_item;
onLoad();

function onLoad(){
    let bag_item=localStorage.getItem('item');
    bagged_item= bag_item ? JSON.parse(bag_item): [];
    itemsContainer();
    item_bagged();
}


function bagged(id){
    bagged_item.push(id);
    localStorage.setItem('item',JSON.stringify(bagged_item));
    item_bagged();
}



function item_bagged(){
    let added=document.querySelector('.add-to-bag');
    if (bagged.length>0){
        added.innerHTML=bagged_item.length;
        added.style.visibility="visible";       
    }
    else{
        added.style.visibility="hidden"; 
    }
}

function itemsContainer(){
    
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHTML=' ';
    items.forEach(item=>{
        innerHTML+=`
                <div class="item-container">
                    <div><img class="image-container" src=${item.image}></div>
                    <div class="rating">${item.rating.stars}⭐|${item.rating.count}</div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current_price">NRs. ${item.current_price} </span>
                        <span class="actual_price">NRs. ${item.original_price} </span>
                        <span class="discount">(${item.discount_percentage}% OFF) </span>
                    </div>
                    <button class="add" onclick="bagged(${item.id});displayAmount();">Add to Bag</button>
                </div>
    `;
    });

    itemsContainerElement.innerHTML=innerHTML;
}



