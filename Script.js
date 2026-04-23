// Dummy Restaurant Data
const restaurants = [
    {
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
        name: "Sharma Dhaba",
        rating: 4.4,
        food: "North Indian",
        price: 400,
        location: "CP, Delhi"
    },
    {
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400",
        name: "Pizza Hub",
        rating: 4.7,
        food: "Italian",
        price: 800,
        location: "Koramangala, Bangalore"
    },
    {
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400",
        name: "Sushi World",
        rating: 4.8,
        food: "Japanese",
        price: 1200,
        location: "Bandra, Mumbai"
    },
    {
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
        name: "Dosa Express",
        rating: 4.2,
        food: "South Indian",
        price: 300,
        location: "Jayanagar, Bangalore"
    },
    {
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400",
        name: "Burger King",
        rating: 4.5,
        food: "Fast Food",
        price: 500,
        location: "Andheri, Mumbai"
    }
];

// Cards dikhane ka function
function showRestaurants(list) {
    const root = document.getElementById('root');
    root.innerHTML = '';

    list.forEach(r => {
        root.innerHTML += `
            <div class="card">
                <img src="${r.image}" alt="${r.name}">
                <div class="card-content">
                    <h3>${r.name}</h3>
                    <p>🍽️ ${r.food}</p>
                    <p>⭐ ${r.rating}</p>
                    <p>📍 ${r.location}</p>
                    <p class="price">₹${r.price} for two</p>
                </div>
            </div>
        `;
    });
}

// Search function
document.getElementById('searchBar').addEventListener('input', function(e) {
    const search = e.target.value.toLowerCase();

    const filtered = restaurants.filter(r =>
        r.name.toLowerCase().includes(search) ||
        r.food.toLowerCase().includes(search) ||
        r.location.toLowerCase().includes(search)
    );

    showRestaurants(filtered);
});

// Page load hote hi sab dikhao
window.onload = () => showRestaurants(restaurants);
