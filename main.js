const orderingPizza = () => {
  const name = document.querySelector('#name').value;
  const pizzaSizeValue = document.querySelector(
    'input[name="pizza-size"]:checked'
  )?.value;
  const pizzaTopping = document.querySelector(
    'input[name="topping"]:checked'
  )?.value;

  let deliveryCost = 0;

  const deliveryMethod = document.getElementById('delivery-method').value;
  if (deliveryMethod === 'We will deliver your pizza within 1 hour') {
    deliveryCost = 5.0;
  }
  if (name == '') {
    text = 'Please type your name';
  } else {
    let total = parseFloat(pizzaSizeValue) + deliveryCost;
    text = `Hello ${name}, at the moment your total is ${total}€. ${deliveryMethod}.`;
  }

  orderingInfo.textContent = text;
};
