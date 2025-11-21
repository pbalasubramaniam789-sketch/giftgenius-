// Simple gift database
const gifts = {
    mom: [
        { name: "Spa Gift Voucher", icon: "💆‍♀️", description: "Relaxation & pampering", price: "₹2,500" },
        { name: "Jewelry Set", icon: "💎", description: "Timeless beauty", price: "₹5,000" },
        { name: "Designer Handbag", icon: "👜", description: "Elegant & stylish", price: "₹4,500" }
    ],
    dad: [
        { name: "Wireless Earbuds", icon: "🎧", description: "Premium sound", price: "₹2,999" },
        { name: "Premium Wallet", icon: "👔", description: "Leather craft", price: "₹1,800" },
        { name: "Smart Watch", icon: "⌚", description: "Stay connected", price: "₹3,500" }
    ],
    friend: [
        { name: "Gaming Headset", icon: "🎮", description: "Immersive gaming", price: "₹2,500" },
        { name: "Coffee Maker", icon: "☕", description: "Fresh brew daily", price: "₹3,200" },
        { name: "Books Set", icon: "📚", description: "Knowledge & fun", price: "₹1,500" }
    ],
    partner: [
        { name: "Perfume Set", icon: "🌹", description: "Romantic fragrance", price: "₹4,000" },
        { name: "Couple Watch", icon: "💑", description: "Matching timepieces", price: "₹8,000" },
        { name: "Photo Album", icon: "📸", description: "Memories together", price: "₹1,200" }
    ],
    sibling: [
        { name: "Backpack", icon: "🎒", description: "Travel companion", price: "₹2,000" },
        { name: "Sneakers", icon: "👟", description: "Trendy footwear", price: "₹3,500" },
        { name: "Bluetooth Speaker", icon: "🔊", description: "Party anywhere", price: "₹2,800" }
    ],
    colleague: [
        { name: "Desk Organizer", icon: "📋", description: "Stay organized", price: "₹800" },
        { name: "Coffee Mug Set", icon: "☕", description: "Morning essential", price: "₹600" },
        { name: "Plant Pot", icon: "🌱", description: "Green workspace", price: "₹500" }
    ],
    child: [
        { name: "Toy Set", icon: "🧸", description: "Fun & learning", price: "₹1,500" },
        { name: "Storybooks", icon: "📖", description: "Bedtime stories", price: "₹800" },
        { name: "Art Supplies", icon: "🎨", description: "Creative fun", price: "₹1,000" }
    ]
};

// Form submit handler
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
    const selectedGifts = gifts[recipient] || gifts.friend;
    
    // Show results
    document.getElementById('giftFinder').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    
    // Display gifts
    const resultsDiv = document.getElementById('giftResults');
    resultsDiv.innerHTML = '';
    
    selectedGifts.forEach(gift => {
        const giftCard = document.createElement('div');
        giftCard.className = 'gift-card';
        giftCard.innerHTML = `
            <div class="gift-icon">${gift.icon}</div>
            <div class="gift-name">${gift.name}</div>
            <div class="gift-description">${gift.description}</div>
            <div class="gift-price">${gift.price}</div>
            <button class="buy-btn" onclick="alert('Opening shopping link...')">View Product</button>
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
