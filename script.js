// при первой загрузке страницы инициализируем функцию CartChaged
function onLoad(){
    Ecwid.OnAPILoaded.add(function() {
        CartChanged();
    });
};
//при каждом изменеии корзины вызываем функцию(в т.ч. при первой загрузке), проверяющую "собранность машины"
function CartChanged(){
    Ecwid.OnCartChanged.add(function(cart){
        isFullCarAdded();
    });
};
// в зависимости от колличества товаров в корзине (элементов в массиве cart) меняем статус отображения на противоположный у пары изображение-текст 
function isFullCarAdded() {
    Ecwid.Cart.get(function(cart){
        if (cart.items.length >=5 ) {
            car_image.style . display= "none";
            car_text.style . display = "block";
        }
        else {
            car_text.style . display = "none";
            car_image.style . display= "block";
        }
    });
};       
//
function wheel() {   
    Ecwid.Cart.addProduct(169134046);  
};
function suspension() {
    Ecwid.Cart.addProduct(169134043);
};
function hood() {
    Ecwid.Cart.addProduct(173431127);
};
function roof() {
    Ecwid.Cart.addProduct(169134042);
};
function cab() {
    Ecwid.Cart.addProduct(169134045);
};
