let showText = document.querySelector('#textPrice');

const calculateTotalPrice = (quantity = 2, price = 15000000) => {
    const calcPrice = quantity * price;
    const myPrice = calcPrice.toLocaleString('ru-RU')
    
    showText.textContent =`стоимость покупки: ${myPrice} рублей` ;
}





