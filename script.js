// Comprehensive Gift Database - 100+ Items
const gifts = [
  // MOM GIFTS - Birthday
  { name: 'Silk Saree', recipient: 'mom', occasion: 'birthday', budget: '2500-5000', interest: 'fashion', price: '₹3,500', url: 'https://www.amazon.in/s?k=silk+saree' },
  { name: 'Gold Plated Jewelry Set', recipient: 'mom', occasion: 'birthday', budget: '1000-2500', interest: 'fashion', price: '₹1,800', url: 'https://www.amazon.in/s?k=gold+plated+jewelry' },
  { name: 'Spa Gift Voucher', recipient: 'mom', occasion: 'birthday', budget: '2500-5000', interest: 'fitness', price: '₹3,000', url: 'https://www.amazon.in/s?k=spa+voucher' },
  { name: 'Kitchen Appliance Set', recipient: 'mom', occasion: 'birthday', budget: '1000-2500', interest: 'cooking', price: '₹2,200', url: 'https://www.amazon.in/s?k=kitchen+appliance' },
  { name: 'Handbag Designer', recipient: 'mom', occasion: 'birthday', budget: '1000-2500', interest: 'fashion', price: '₹1,500', url: 'https://www.amazon.in/s?k=designer+handbag' },
  { name: 'Perfume Set Luxury', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹899', url: 'https://www.amazon.in/s?k=perfume+set' },
  { name: 'Plant Pot Ceramic', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹450', url: 'https://www.amazon.in/s?k=ceramic+plant+pot' },
  { name: 'Recipe Book Indian', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹399', url: 'https://www.amazon.in/s?k=indian+recipe+book' },

  // DAD GIFTS - Birthday
  { name: 'Leather Wallet Premium', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=leather+wallet' },
  { name: 'Smart Watch Fitness', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'technology', price: '₹1,999', url: 'https://www.amazon.in/s?k=smart+watch' },
  { name: 'Bluetooth Speaker Portable', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'music', price: '₹899', url: 'https://www.amazon.in/s?k=bluetooth+speaker' },
  { name: 'Golf Set Beginner', recipient: 'dad', occasion: 'birthday', budget: '2500-5000', interest: 'sports', price: '₹3,500', url: 'https://www.amazon.in/s?k=golf+set' },
  { name: 'Books Set Business', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'books', price: '₹699', url: 'https://www.amazon.in/s?k=business+books' },
  { name: 'Grooming Kit Men', recipient: 'dad', occasion: 'birthday', budget: 'under500', interest: 'fashion', price: '₹499', url: 'https://www.amazon.in/s?k=men+grooming+kit' },
  { name: 'Travel Bag Duffel', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'travel', price: '₹1,299', url: 'https://www.amazon.in/s?k=duffel+bag' },
  { name: 'Power Bank 20000mAh', recipient: 'dad', occasion: 'birthday', budget: 'under500', interest: 'technology', price: '₹499', url: 'https://www.amazon.in/s?k=power+bank' },

  // FRIEND GIFTS - Birthday  
  { name: 'Wireless Earbuds Gaming', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'gaming', price: '₹449', url: 'https://www.amazon.in/s?k=wireless+earbuds' },
  { name: 'Sneakers Sports', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'sports', price: '₹1,799', url: 'https://www.amazon.in/s?k=sports+sneakers' },
  { name: 'Backpack College', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'travel', price: '₹699', url: 'https://www.amazon.in/s?k=college+backpack' },
  { name: 'Gaming Mouse RGB', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'gaming', price: '₹399', url: 'https://www.amazon.in/s?k=gaming+mouse' },
  { name: 'Novel Set Bestseller', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹450', url: 'https://www.amazon.in/s?k=bestseller+novels' },
  { name: 'Fitness Band Tracker', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'fitness', price: '₹599', url: 'https://www.amazon.in/s?k=fitness+band' },
  { name: 'Tshirt Graphic Cool', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'fashion', price: '₹349', url: 'https://www.amazon.in/s?k=graphic+tshirt' },
  { name: 'Coffee Mug Funny', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹299', url: 'https://www.amazon.in/s?k=funny+mug' },

  // PARTNER GIFTS - Anniversary
  { name: 'Diamond Ring Silver', recipient: 'partner', occasion: 'anniversary', budget: '2500-5000', interest: 'fashion', price: '₹4,500', url: 'https://www.amazon.in/s?k=silver+diamond+ring' },
  { name: 'Perfume Set Couple', recipient: 'partner', occasion: 'anniversary', budget: '1000-2500', interest: 'fashion', price: '₹1,499', url: 'https://www.amazon.in/s?k=couple+perfume' },
  { name: 'Photo Frame Digital', recipient: 'partner', occasion: 'anniversary', budget: '1000-2500', interest: 'technology', price: '₹1,299', url: 'https://www.amazon.in/s?k=digital+photo+frame' },
  { name: 'Chocolate Box Belgian', recipient: 'partner', occasion: 'anniversary', budget: 'under500', interest: 'cooking', price: '₹499', url: 'https://www.amazon.in/s?k=belgian+chocolate' },
  { name: 'Rose Bouquet Eternal', recipient: 'partner', occasion: 'anniversary', budget: '500-1000', interest: 'art', price: '₹799', url: 'https://www.amazon.in/s?k=eternal+rose' },
  { name: 'Couple Watch Matching', recipient: 'partner', occasion: 'anniversary', budget: '2500-5000', interest: 'fashion', price: '₹3,999', url: 'https://www.amazon.in/s?k=couple+watch' },
  { name: 'Necklace Heart Pendant', recipient: 'partner', occasion: 'anniversary', budget: '1000-2500', interest: 'fashion', price: '₹1,799', url: 'https://www.amazon.in/s?k=heart+pendant' },
  { name: 'Teddy Bear Giant', recipient: 'partner', occasion: 'anniversary', budget: '500-1000', interest: 'art', price: '₹899', url: 'https://www.amazon.in/s?k=giant+teddy' },

  // SIBLING GIFTS - Birthday
  { name: 'Gaming Console Controller', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'gaming', price: '₹1,999', url: 'https://www.amazon.in/s?k=game+controller' },
  { name: 'Sketchbook Art Professional', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹399', url: 'https://www.amazon.in/s?k=art+sketchbook' },
  { name: 'Bicycle MTB Kids', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'sports', price: '₹4,299', url: 'https://www.amazon.in/s?k=kids+bicycle' },
  { name: 'Makeup Kit Teens', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹699', url: 'https://www.amazon.in/s?k=teen+makeup+kit' },
  { name: 'Headphones Noise Cancel', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'music', price: '₹1,499', url: 'https://www.amazon.in/s?k=noise+cancelling+headphones' },
  { name: 'Study Lamp LED', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹449', url: 'https://www.amazon.in/s?k=led+study+lamp' },
  { name: 'Sports Shoes Running', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'fitness', price: '₹1,799', url: 'https://www.amazon.in/s?k=running+shoes' },
  { name: 'Camera Instant Polaroid', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'technology', price: '₹3,999', url: 'https://www.amazon.in/s?k=instant+camera' },

  // COLLEAGUE GIFTS
  { name: 'Desk Organizer Wooden', recipient: 'colleague', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹399', url: 'https://www.amazon.in/s?k=desk+organizer' },
  { name: 'Coffee Mug Corporate', recipient: 'colleague', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹299', url: 'https://www.amazon.in/s?k=corporate+mug' },
  { name: 'Pen Set Executive', recipient: 'colleague', occasion: 'birthday', budget: '500-1000', interest: 'books', price: '₹699', url: 'https://www.amazon.in/s?k=executive+pen' },
  { name: 'Notebook Leather Bound', recipient: 'colleague', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹449', url: 'https://www.amazon.in/s?k=leather+notebook' },
  { name: 'Plant Succulent Mini', recipient: 'colleague', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹299', url: 'https://www.amazon.in/s?k=succulent+plant' },
  { name: 'Mouse Pad Ergonomic', recipient: 'colleague', occasion: 'birthday', budget: 'under500', interest: 'technology', price: '₹349', url: 'https://www.amazon.in/s?k=ergonomic+mousepad' },

  // CHILD GIFTS
  { name: 'Toy Car Remote Control', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'gaming', price: '₹799', url: 'https://www.amazon.in/s?k=rc+car+kids' },
  { name: 'Coloring Book Set', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹299', url: 'https://www.amazon.in/s?k=coloring+book' },
  { name: 'Building Blocks Lego', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'gaming', price: '₹699', url: 'https://www.amazon.in/s?k=lego+blocks' },
  { name: 'Cricket Bat Kids', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'sports', price: '₹449', url: 'https://www.amazon.in/s?k=kids+cricket+bat' },
  { name: 'Story Books Set', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹399', url: 'https://www.amazon.in/s?k=kids+story+books' },
  { name: 'School Bag Cartoon', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹599', url: 'https://www.amazon.in/s?k=kids+school+bag' },
  { name: 'Puzzle Game Educational', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'gaming', price: '₹349', url: 'https://www.amazon.in/s?k=educational+puzzle' },
  { name: 'Water Bottle Cartoon', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹299', url: 'https://www.amazon.in/s?k=kids+water+bottle' },

  // WEDDING GIFTS
  { name: 'Dinner Set Ceramic', recipient: 'friend', occasion: 'wedding', budget: '2500-5000', interest: 'cooking', price: '₹3,999', url: 'https://www.amazon.in/s?k=ceramic+dinner+set' },
  { name: 'Bedsheet Set Cotton', recipient: 'friend', occasion: 'wedding', budget: '1000-2500', interest: 'fashion', price: '₹1,799', url: 'https://www.amazon.in/s?k=cotton+bedsheet' },
  { name: 'Mixer Grinder 750W', recipient: 'friend', occasion: 'wedding', budget: '2500-5000', interest: 'cooking', price: '₹3,499', url: 'https://www.amazon.in/s?k=mixer+grinder' },
  { name: 'Pressure Cooker 5L', recipient: 'friend', occasion: 'wedding', budget: '1000-2500', interest: 'cooking', price: '₹1,499', url: 'https://www.amazon.in/s?k=pressure+cooker' },
  { name: 'Photo Frame Wooden', recipient: 'friend', occasion: 'wedding', budget: 'under500', interest: 'art', price: '₹449', url: 'https://www.amazon.in/s?k=wooden+photo+frame' },
  { name: 'Silver Coin Set Gift', recipient: 'friend', occasion: 'wedding', budget: '2500-5000', interest: 'fashion', price: '₹4,999', url: 'https://www.amazon.in/s?k=silver+coin+gift' },
  { name: 'Towel Set Luxury', recipient: 'friend', occasion: 'wedding', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=luxury+towel+set' },
  { name: 'Showpiece Home Decor', recipient: 'friend', occasion: 'wedding', budget: '1000-2500', interest: 'art', price: '₹1,299', url: 'https://www.amazon.in/s?k=home+decor+showpiece' },

  // CHRISTMAS GIFTS
  { name: 'Christmas Tree Artificial', recipient: 'mom', occasion: 'christmas', budget: '1000-2500', interest: 'art', price: '₹1,799', url: 'https://www.amazon.in/s?k=christmas+tree' },
  { name: 'Santa Dress Kids', recipient: 'child', occasion: 'christmas', budget: 'under500', interest: 'fashion', price: '₹399', url: 'https://www.amazon.in/s?k=santa+dress+kids' },
  { name: 'Wine Bottle Premium', recipient: 'dad', occasion: 'christmas', budget: '1000-2500', interest: 'cooking', price: '₹1,299', url: 'https://www.amazon.in/s?k=wine+bottle' },
  { name: 'Christmas Lights LED', recipient: 'friend', occasion: 'christmas', budget: 'under500', interest: 'art', price: '₹449', url: 'https://www.amazon.in/s?k=christmas+lights' },
  { name: 'Cake Christmas Special', recipient: 'partner', occasion: 'christmas', budget: '500-1000', interest: 'cooking', price: '₹699', url: 'https://www.amazon.in/s?k=christmas+cake' },
  { name: 'Sweater Winter Warm', recipient: 'sibling', occasion: 'christmas', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=winter+sweater' },

  // VALENTINES DAY GIFTS
  { name: 'Rose Bouquet Red 100', recipient: 'partner', occasion: 'valentine', budget: '1000-2500', interest: 'art', price: '₹1,499', url: 'https://www.amazon.in/s?k=red+rose+bouquet' },
  { name: 'Heart Necklace Gold', recipient: 'partner', occasion: 'valentine', budget: '2500-5000', interest: 'fashion', price: '₹3,999', url: 'https://www.amazon.in/s?k=heart+necklace+gold' },
  { name: 'Chocolate Box Heart', recipient: 'partner', occasion: 'valentine', budget: 'under500', interest: 'cooking', price: '₹499', url: 'https://www.amazon.in/s?k=heart+chocolate+box' },
  { name: 'Perfume Romantic Special', recipient: 'partner', occasion: 'valentine', budget: '1000-2500', interest: 'fashion', price: '₹1,299', url: 'https://www.amazon.in/s?k=romantic+perfume' },
  { name: 'Teddy Bear Love', recipient: 'partner', occasion: 'valentine', budget: '500-1000', interest: 'art', price: '₹599', url: 'https://www.amazon.in/s?k=love+teddy+bear' },
  { name: 'Greeting Card Handmade', recipient: 'partner', occasion: 'valentine', budget: 'under500', interest: 'art', price: '₹299', url: 'https://www.amazon.in/s?k=handmade+greeting+card' },
  { name: 'Watch Couple Set', recipient: 'partner', occasion: 'valentine', budget: '2500-5000', interest: 'fashion', price: '₹4,499', url: 'https://www.amazon.in/s?k=couple+watch+set' },

  // GRADUATION GIFTS
  { name: 'Laptop Bag Professional', recipient: 'friend', occasion: 'graduation', budget: '500-1000', interest: 'technology', price: '₹899', url: 'https://www.amazon.in/s?k=laptop+bag' },
  { name: 'Pen Drive 64GB', recipient: 'friend', occasion: 'graduation', budget: 'under500', interest: 'technology', price: '₹399', url: 'https://www.amazon.in/s?k=pen+drive+64gb' },
  { name: 'Wristwatch Formal', recipient: 'friend', occasion: 'graduation', budget: '1000-2500', interest: 'fashion', price: '₹1,799', url: 'https://www.amazon.in/s?k=formal+watch' },
  { name: 'Books Career Guide', recipient: 'friend', occasion: 'graduation', budget: 'under500', interest: 'books', price: '₹449', url: 'https://www.amazon.in/s?k=career+guide+books' },
  { name: 'Formal Shoes Leather', recipient: 'friend', occasion: 'graduation', budget: '1000-2500', interest: 'fashion', price: '₹1,999', url: 'https://www.amazon.in/s?k=formal+leather+shoes' },
  { name: 'Tablet 10 inch Android', recipient: 'friend', occasion: 'graduation', budget: '2500-5000', interest: 'technology', price: '₹4,999', url: 'https://www.amazon.in/s?k=android+tablet' },

  // THANK YOU GIFTS
  { name: 'Chocolate Assorted Box', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'cooking', price: '₹399', url: 'https://www.amazon.in/s?k=assorted+chocolates' },
  { name: 'Coffee Beans Pack', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'cooking', price: '₹449', url: 'https://www.amazon.in/s?k=coffee+beans' },
  { name: 'Thank You Card Set', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'art', price: '₹249', url: 'https://www.amazon.in/s?k=thank+you+cards' },
  { name: 'Dry Fruits Box Premium', recipient: 'colleague', occasion: 'thankyou', budget: '500-1000', interest: 'cooking', price: '₹799', url: 'https://www.amazon.in/s?k=dry+fruits+box' },
  { name: 'Plant Bamboo Lucky', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'art', price: '₹299', url: 'https://www.amazon.in/s?k=lucky+bamboo' },

  // HIGH-END GIFTS (Above 5000)
  { name: 'Laptop Gaming Beast', recipient: 'sibling', occasion: 'birthday', budget: 'above5000', interest: 'gaming', price: '₹59,999', url: 'https://www.amazon.in/s?k=gaming+laptop' },
  { name: 'iPhone Latest Model', recipient: 'partner', occasion: 'anniversary', budget: 'above5000', interest: 'technology', price: '₹79,900', url: 'https://www.amazon.in/s?k=iphone' },
  { name: 'Gold Necklace 22k', recipient: 'partner', occasion: 'wedding', budget: 'above5000', interest: 'fashion', price: '₹45,000', url: 'https://www.amazon.in/s?k=gold+necklace' },
  { name: 'DSLR Camera Professional', recipient: 'friend', occasion: 'graduation', budget: 'above5000', interest: 'technology', price: '₹55,000', url: 'https://www.amazon.in/s?k=dslr+camera' },
  { name: 'Home Theater System', recipient: 'dad', occasion: 'birthday', budget: 'above5000', interest: 'music', price: '₹35,000', url: 'https://www.amazon.in/s?k=home+theater' },
  { name: 'Treadmill Motorized', recipient: 'dad', occasion: 'birthday', budget: 'above5000', interest: 'fitness', price: '₹25,000', url: 'https://www.amazon.in/s?k=motorized+treadmill' },
  { name: 'Designer Saree Silk', recipient: 'mom', occasion: 'anniversary', budget: 'above5000', interest: 'fashion', price: '₹15,000', url: 'https://www.amazon.in/s?k=designer+silk+saree' },
  { name: 'Refrigerator Double Door', recipient: 'friend', occasion: 'wedding', budget: 'above5000', interest: 'cooking', price: '₹38,000', url: 'https://www.amazon.in/s?k=refrigerator' },

  // MORE VARIETY FOR DIFFERENT INTERESTS
  { name: 'Yoga Mat Premium', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹499', url: 'https://www.amazon.in/s?k=yoga+mat' },
  { name: 'Dumbbells Set 20kg', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'fitness', price: '₹1,599', url: 'https://www.amazon.in/s?k=dumbbell+set' },
  { name: 'Guitar Acoustic Beginner', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'music', price: '₹3,999', url: 'https://www.amazon.in/s?k=acoustic+guitar' },
  { name: 'Keyboard Piano Digital', recipient: 'child', occasion: 'birthday', budget: '2500-5000', interest: 'music', price: '₹4,499', url: 'https://www.amazon.in/s?k=digital+piano' },
  { name: 'Canvas Painting Set', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=canvas+painting+set' },
  { name: 'Craft Kit DIY', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹399', url: 'https://www.amazon.in/s?k=diy+craft+kit' },
  { name: 'Travel Luggage 28 inch', recipient: 'dad', occasion: 'birthday', budget: '2500-5000', interest: 'travel', price: '₹3,499', url: 'https://www.amazon.in/s?k=travel+luggage' },
  { name: 'Camera Bag DSLR', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'travel', price: '₹799', url: 'https://www.amazon.in/s?k=camera+bag' },
  { name: 'PS5 Console', recipient: 'sibling', occasion: 'birthday', budget: 'above5000', interest: 'gaming', price: '₹49,999', url: 'https://www.amazon.in/s?k=ps5+console' },
  { name: 'Nintendo Switch', recipient: 'child', occasion: 'birthday', budget: 'above5000', interest: 'gaming', price: '₹25,999', url: 'https://www.amazon.in/s?k=nintendo+switch' },
  { name: 'Cookbook Indian Recipes', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹349', url: 'https://www.amazon.in/s?k=indian+cookbook' },
  { name: 'Blender Smoothie Maker', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'cooking', price: '₹899', url: 'https://www.amazon.in/s?k=smoothie+blender' },
  { name: 'Air Fryer 4L', recipient: 'mom', occasion: 'birthday', budget: '2500-5000', interest: 'cooking', price: '₹4,299', url: 'https://www.amazon.in/s?k=air+fryer' },
  { name: 'Novel Mystery Thriller', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹299', url: 'https://www.amazon.in/s?k=mystery+thriller' },
  { name: 'Bookshelf Wooden', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'books', price: '₹1,899', url: 'https://www.amazon.in/s?k=wooden+bookshelf' },
  { name: 'Kindle E-Reader', recipient: 'dad', occasion: 'birthday', budget: '2500-5000', interest: 'books', price: '₹4,999', url: 'https://www.amazon.in/s?k=kindle+e-reader' }
];

// Helper function to extract numeric price
function getNumericPrice(priceStr) {
  return parseInt(priceStr.replace(/\D/g, ''));
}

// Filter gifts by budget range
function filterByBudget(gifts, budget) {
  const budgetRanges = {
    'under500': { min: 0, max: 500 },
    '500-1000': { min: 501, max: 1000 },
    '1000-2500': { min: 1001, max: 2500 },
    '2500-5000': { min: 2501, max: 5000 },
    'above5000': { min: 5001, max: Infinity }
  };
  
  const range = budgetRanges[budget];
  if (!range) return gifts;
  
  return gifts.filter(gift => {
    const price = getNumericPrice(gift.price);
    return price >= range.min && price <= range.max;
  });
}

// Form submission handler
document.getElementById('giftForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const recipient = document.getElementById('recipient').value;
  const occasion = document.getElementById('occasion').value;
  const budget = document.getElementById('budget').value;
  const interest = document.getElementById('interest').value;
  
  // Filter gifts
  let filteredGifts = gifts.filter(gift => 
    gift.recipient === recipient &&
    gift.occasion === occasion &&
    gift.interest === interest
  );
  
  // Filter by budget
  filteredGifts = filterByBudget(filteredGifts, budget);
  
  // If no gifts found, show default gifts
  if (filteredGifts.length === 0) {
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';
    const giftResults = document.getElementById('giftResults');
    giftResults.innerHTML = '<div class="no-results"><h3>😔 No gifts found</h3><p>We couldn\'t find any gifts matching your criteria. Please try different options!</p></div>';
    return;
  }
  
  // Display results
  displayResults(filteredGifts);
});

// Display gift results
function displayResults(gifts) {
  const resultsSection = document.getElementById('resultsSection');
  const giftResults = document.getElementById('giftResults');
  
  resultsSection.style.display = 'block';
  
  giftResults.innerHTML = gifts.map(gift => `
    <div class="gift-card">
      <div class="gift-icon">🎁</div>
      <h3>${gift.name}</h3>
      <p class="gift-description">${gift.description || 'Perfect gift choice'}</p>
      <p class="gift-price">${gift.price}</p>
      <button class="view-product-btn" onclick="window.open('${gift.url}', '_blank')">View Product</button>
    </div>
  `).join('');
  
  resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Find More Gifts button
document.getElementById('retryBtn').addEventListener('click', function() {
  document.getElementById('giftForm').reset();
  document.getElementById('resultsSection').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
