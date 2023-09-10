const orderingPizza = () => {
  const orderingInfo = document.getElementById('orderingInfo');

  const name = document.querySelector('#name').value;
  const pizzaSizeValue = document.querySelector(
    'input[name="pizza-size"]:checked'
  )?.value;
  const pizzaTopping = document.querySelectorAll(
    'input[name="topping"]:checked'
  );

  let count = 0;
  let extraTopping = 0;
  if (pizzaTopping.length > 4) {
    pizzaTopping.forEach((checkbox) => {
      count++;
    });
    extraTopping = (count - 4) * 0.5;
  }

  let deliveryCost = 0;

  const deliveryMethod = document.getElementById('delivery-method').value;
  if (deliveryMethod === 'We will deliver your pizza within 1 hour') {
    deliveryCost = 5.0;
  }
  if (name == '') {
    text = 'Please type your name';
  } else {
    let total = parseFloat(pizzaSizeValue) + deliveryCost + extraTopping;
    text = `Hello ${name}. Your total order is ${total}€. ${deliveryMethod}.
    `;
  }

  orderingInfo.textContent = text;
};
