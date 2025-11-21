// Simple gift database
const gifts = {
    mom: [
        { name: "Spa Gift Voucher", icon: "💆‍♀️", description: "Relaxation & pampering", price: "₹2,500", url: "https://www.amazon.in/s?k=spa+gift+voucher" },
        { name: "Jewelry Set", icon: "💎", description: "Timeless beauty", price: "₹5,000", url: "https://www.amazon.in/s?k=jewelry+set+women" },
        { name: "Designer Handbag", icon: "👜", description: "Elegant & stylish", price: "₹4,500", url: "https://www.amazon.in/s?k=designer+handbag" }
    ],
    dad: [
        { name: "Wireless Earbuds", icon: "🎧", description: "Premium sound", price: "₹2,999", url: "https://www.amazon.in/s?k=wireless+earbuds" },
        { name: "Premium Wallet", icon: "👔", description: "Leather craft", price: "₹1,800", url: "https://www.amazon.in/s?k=leather+wallet+men" },
        { name: "Smart Watch", icon: "⌚", description: "Stay connected", price: "₹3,500", url: "https://www.amazon.in/s?k=smartwatch" }
    ],
    friend: [
        { name: "Gaming Headset", icon: "🎮", description: "Immersive gaming", price: "₹2,500", url: "https://www.amazon.in/s?k=gaming+headset" },
        { name: "Coffee Maker", icon: "☕", description: "Fresh brew daily", price: "₹3,200", url: "https://www.amazon.in/s?k=coffee+maker" },
        { name: "Books Set", icon: "📚", description: "Knowledge & fun", price: "₹1,500", url: "https://www.amazon.in/s?k=book+set" }
    ],
    partner: [
        { name: "Perfume Set", icon: "🌹", description: "Romantic fragrance", price: "₹4,000", url: "https://www.amazon.in/s?k=perfume+set" },
        { name: "Couple Watch", icon: "💑", description: "Matching timepieces", price: "₹8,000", url: "https://www.amazon.in/s?k=couple+watch" },
        { name: "Photo Album", icon: "📸", description: "Memories together", price: "₹1,200", url: "https://www.amazon.in/s?k=photo+album" }
    ],
    sibling: [
        { name: "Backpack", icon: "🎒", description: "Travel companion", price: "₹2,000", url: "https://www.amazon.in/s?k=backpack" },
        { name: "Sneakers", icon: "👟", description: "Trendy footwear", price: "₹3,500", url: "https://www.amazon.in/s?k=sneakers" },
        { name: "Bluetooth Speaker", icon: "🔊", description: "Party anywhere", price: "₹2,800", url: "https://www.amazon.in/s?k=bluetooth+speaker" }
    ],
    colleague: [
        { name: "Desk Organizer", icon: "📋", description: "Stay organized", price: "₹800", url: "https://www.amazon.in/s?k=desk+organizer" },
        { name: "Coffee Mug Set", icon: "☕", description: "Morning essential", price: "₹600", url: "https://www.amazon.in/s?k=coffee+mug+set" },
        { name: "Plant Pot", icon: "🌱", description: "Green workspace", price: "₹500", url: "https://www.amazon.in/s?k=plant+pot" }
    ],
    child: [
        { name: "Toy Set", icon: "🧸", description: "Fun & learning", price: "₹1,500", url: "https://www.amazon.in/s?k=toy+set" },
        { name: "Storybooks", icon: "📖", description: "Bedtime stories", price: "₹800", url: "https://www.amazon.in/s?k=story+books+kids" },
        { name: "Art Supplies", icon: "🎨", description: "Creative fun", price: "₹1,000", url: "https://www.amazon.in/s?k=art+supplies+kids" }
    ],
    default: [
        { name: "Gift Card", icon: "🎁", description: "Perfect for anyone", price: "₹1,000", url: "https://www.amazon.in/gift-cards" },
        { name: "Chocolates", icon: "🍫", description: "Sweet treats", price: "₹500", url: "https://www.amazon.in/s?k=chocolate+gift+box" },
        { name: "Flower Bouquet", icon: "💐", description: "Fresh & lovely", price: "₹800", url: "https://www.amazon.in/s?k=flower+bouquet" }
    ]
};

// Function to extract numeric price from price string
function getNumericPrice(priceStr) {
    return parseInt(priceStr.replace(/\D/g, ''));}

// Function to filter gifts by budget
function filterByBudget(giftList, budget) {
    const budgetRanges = {
        'under500': { min: 0, max: 500 },
        '500-1000': { min: 501, max: 1000 },
        '1000-2500': { min: 1001, max: 2500 },
        '2500-5000': { min: 2501, max: 5000 },
        'above5000': { min: 5001, max: Infinity }
    };

    const range = budgetRanges[budget];
    if (!range) return giftList;

    return giftList.filter(gift => {
        const price = getNumericPrice(gift.price);
        return price >= range.min && price <= range.max;
    });
}

// Form submission
document.getElementById('giftForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const recipient = document.getElementById('recipient').value;
    const occasion = document.getElementById('occasion').value;
    const budget = document.getElementById('budget').value;
    const interest = document.getElementById('interest').value;

    if (!recipient || !occasion || !budget || !interest) {
        alert('Please fill all fields!');
        return;
    }

    // Get gifts for recipient
    let selectedGifts = gifts[recipient] || gifts.friend;

    // Filter gifts by budget
    selectedGifts = filterByBudget(selectedGifts, budget);

    // If no gifts match the budget, show default gifts filtered by budget
    if (selectedGifts.length === 0) {
        selectedGifts = filterByBudget(gifts.default, budget);
    }

    // Show results
    document.getElementById('giftFinder').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';

    // Display gifts
    const resultsDiv = document.getElementById('giftResults');
    resultsDiv.innerHTML = '';

        // If still no gifts found, show message
    if (selectedGifts.length === 0) {
        resultsDiv.innerHTML = '<div style="text-align: center; padding: 40px; color: #666;"><h3>😔 No gifts found</h3><p>We couldn\'t find any gifts matching your budget criteria. Please try a different budget range.</p></div>';
        return;
    }

    selectedGifts.forEach(gift => {
        const giftCard = document.createElement('div');
        giftCard.className = 'gift-card';
        giftCard.innerHTML = `
            <div class="gift-icon">${gift.icon}</div>
            <div class="gift-name">${gift.name}</div>
            <div class="gift-description">${gift.description}</div>
            <div class="gift-price">${gift.price}</div>
            <button class="buy-btn" onclick="window.open('${gift.url}', '_blank')">View Product</button>
        `;
        resultsDiv.appendChild(giftCard);
    });
});

// Retry button
document.getElementById('retryBtn').addEventListener('click', function() {
    document.getElementById('giftFinder').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('giftForm').reset();
});
