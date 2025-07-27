import { faker } from '@faker-js/faker';

const cartString = `<div>You have ${faker.number.int(20)} items in your cart!</div>`;
console.log(cartString);
document.querySelector('#cart-list').innerHTML = cartString;