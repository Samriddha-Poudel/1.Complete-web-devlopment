// Sample menu data
const menu = [
  {
    name: 'Margherita Pizza',
    desc: 'Classic delight with 100% real mozzarella cheese',
    price: 399,
    img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Veg Burger',
    desc: 'Crispy patty with fresh veggies and cheese',
    price: 199,
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Chicken Biryani',
    desc: 'Aromatic rice with tender chicken and spices',
    price: 299,
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Pasta Alfredo',
    desc: 'Creamy Alfredo sauce with penne pasta',
    price: 249,
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Caesar Salad',
    desc: 'Fresh lettuce tossed with Caesar dressing',
    price: 179,
    img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80'
  }
];

// Render menu items
const menuItemsDiv = document.getElementById('menu-items');
const foodSelect = document.getElementById('food');
menu.forEach((item, idx) => {
  // Add to menu grid
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    <div class="price">₹${item.price}</div>
  `;
  menuItemsDiv.appendChild(card);
  // Add to order dropdown
  const opt = document.createElement('option');
  opt.value = idx;
  opt.textContent = `${item.name} (₹${item.price})`;
  foodSelect.appendChild(opt);
});

// Handle order form
const orderForm = document.getElementById('order-form');
const orderResult = document.getElementById('order-result');
orderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const foodIdx = foodSelect.value;
  const qty = parseInt(document.getElementById('quantity').value);
  if (foodIdx === '' || qty < 1) {
    orderResult.textContent = 'Please select a food item and quantity.';
    orderResult.style.color = 'red';
    return;
  }
  const item = menu[foodIdx];
  const total = item.price * qty;
  orderResult.innerHTML = `<strong>Order placed!</strong> You ordered ${qty} x ${item.name} for <span style='color:#ff7043'>₹${total}</span>. Thank you!`;
  orderResult.style.color = 'green';
});
