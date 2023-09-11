const orderingPizza = () => {
  const orderingInfo = document.getElementById('orderingInfo');
  const name = document.querySelector('#name').value;
  const deliveryInfo = document.getElementById('deliveryInfo');
  const finalToppings = document.getElementById('finalToppings');

  const totalPrice = document.getElementById('totalPrice');
  const pizzaSizeValue = document.querySelector(
    'input[name="pizza-size"]:checked'
  )?.value;

  const pizzaTopping = document.querySelectorAll(
    'input[name="topping"]:checked'
  );

  let count = 0;
  let extraTopping = 0;
  let selectedToppings = '';

  pizzaTopping.forEach((input) => {
    count++;
    selectedToppings += input.value + ',';
  });

  if (count > 4) {
    extraTopping = (count - 4) * 0.5;
  }

  let deliveryCost = 0;

  const deliveryMethod = document.getElementById('delivery-method').value;
  if (deliveryMethod === 'We will deliver your pizza within 1 hour') {
    deliveryCost = 5.0;
  }
  let total = 0;
  total = parseFloat(pizzaSizeValue) + deliveryCost + extraTopping;
  let text = `HellO! ${name} 
`;

  orderingInfo.textContent = text;
  totalPrice.textContent = total;
  deliveryInfo.textContent = deliveryMethod;
  finalToppings.textContent = selectedToppings;
};
const pizzaForm = document.getElementById('pizza-form');
pizzaForm.addEventListener('change', orderingPizza);
