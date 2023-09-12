const form = document.querySelector('form');

const firstName = document.querySelector('#firstName');
const pizzaSize = document.querySelectorAll('[name="pizza-size"]');
const pizzaTopping = document.querySelectorAll('input[type="checkbox"]');
const deliveryInfo = document.querySelector('#delivery-method');
const orderingInfo = document.querySelector('#orderingInfo');

const totalPrice = document.querySelector('#totalPrice');

const pizzaOrder = () => {
  let selectedToppings = [];
  let total = 0;
  let sizePrice = '';
  let deliveryResult = deliveryInfo.options[deliveryInfo.selectedIndex].value;
  let customerName = firstName.value;

  pizzaSize.forEach((item) => {
    if (item.checked) {
      sizePrice = item.id;
    }
  });

  switch (sizePrice) {
    case 'size-2':
      total += 7.5;
      break;
    case 'size-4':
      total += 10.5;
      break;
    case 'size-6':
      total += 12.5;
      break;
    case 'size-8':
      total += 15.5;
      break;
  }

  pizzaTopping.forEach((item) => {
    if (item.checked) {
      selectedToppings.push(item.value);
    }
  });

  if (selectedToppings.length > 4) {
    total += (selectedToppings.length - 4) * 0.5;
  }

  if (deliveryResult === 'We will deliver your pizza within 1 hour') {
    total += 5.0;
  }

  let text = `Hello! ${customerName}`;
  totalPrice.textContent = total;
};

form.addEventListener('input', pizzaOrder);
