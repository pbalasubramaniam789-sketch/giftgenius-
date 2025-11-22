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
    
    // Additional comprehensive gift database expansion - 400+ more items
    
    // MOM - Additional Varieties
    { name: 'Aromatherapy Diffuser Set', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹449', url: 'https://www.amazon.in/s?k=aromatherapy+diffuser' },
    { name: 'Yoga Block Set Pink', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'fitness', price: '₹599', url: 'https://www.amazon.in/s?k=yoga+blocks' },
    { name: 'Meditation Cushion Premium', recipient: 'mom', occasion: 'birthday', budget: '1000-2500', interest: 'fitness', price: '₹1,299', url: 'https://www.amazon.in/s?k=meditation+cushion' },
    { name: 'Tea Gift Set Assorted', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹399', url: 'https://www.amazon.in/s?k=tea+gift+set' },
    { name: 'Spice Organizer Kitchen', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'cooking', price: '₹699', url: 'https://www.amazon.in/s?k=spice+organizer' },
    { name: 'Air Purifier Compact', recipient: 'mom', occasion: 'birthday', budget: '2500-5000', interest: 'technology', price: '₹3,999', url: 'https://www.amazon.in/s?k=air+purifier' },
    { name: 'Digital Photo Frame WiFi', recipient: 'mom', occasion: 'birthday', budget: '2500-5000', interest: 'technology', price: '₹4,499', url: 'https://www.amazon.in/s?k=digital+photo+frame' },
    { name: 'Essential Oil Set 12pc', recipient: 'mom', occasion: 'christmas', budget: 'under500', interest: 'fitness', price: '₹499', url: 'https://www.amazon.in/s?k=essential+oils' },
    { name: 'Cookbook Indian Vegetarian', recipient: 'mom', occasion: 'christmas', budget: 'under500', interest: 'cooking', price: '₹399', url: 'https://www.amazon.in/s?k=vegetarian+cookbook' },
    { name: 'Gardening Tool Set Ladies', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹799', url: 'https://www.amazon.in/s?k=gardening+tools' },

    // DAD - Extended Collection
    { name: 'Electric Shaver Premium', recipient: 'dad', occasion: 'birthday', budget: '2500-5000', interest: 'technology', price: '₹3,999', url: 'https://www.amazon.in/s?k=electric+shaver' },
    { name: 'Toolkit Professional 110pc', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'technology', price: '₹1,799', url: 'https://www.amazon.in/s?k=toolkit+professional' },
    { name: 'BBQ Grill Tools Set', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'cooking', price: '₹899', url: 'https://www.amazon.in/s?k=bbq+tools' },
    { name: 'Bluetooth Earphones Sports', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'fitness', price: '₹799', url: 'https://www.amazon.in/s?k=bluetooth+earphones+sports' },
    { name: 'Running Shoes Nike', recipient: 'dad', occasion: 'birthday', budget: '2500-5000', interest: 'fitness', price: '₹4,299', url: 'https://www.amazon.in/s?k=nike+running+shoes' },
    { name: 'Coffee Maker French Press', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'cooking', price: '₹699', url: 'https://www.amazon.in/s?k=french+press' },
    { name: 'Car Phone Mount Magnetic', recipient: 'dad', occasion: 'birthday', budget: 'under500', interest: 'technology', price: '₹399', url: 'https://www.amazon.in/s?k=car+phone+mount' },
    { name: 'Wallet Leather RFID', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=rfid+wallet' },
    { name: 'Gym Duffel Bag Large', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'fitness', price: '₹1,499', url: 'https://www.amazon.in/s?k=gym+bag' },
    { name: 'Binoculars Outdoor', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'travel', price: '₹1,899', url: 'https://www.amazon.in/s?k=binoculars' },

    // FRIEND - Extensive Variety
    { name: 'Board Game Catan', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'gaming', price: '₹1,699', url: 'https://www.amazon.in/s?k=catan+board+game' },
    { name: 'Portable Bluetooth Speaker JBL', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'music', price: '₹2,199', url: 'https://www.amazon.in/s?k=jbl+speaker' },
    { name: 'Headphones Noise Cancel', recipient: 'friend', occasion: 'birthday', budget: '2500-5000', interest: 'music', price: '₹3,999', url: 'https://www.amazon.in/s?k=noise+cancel+headphones' },
    { name: 'Camera Tripod Professional', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹899', url: 'https://www.amazon.in/s?k=camera+tripod' },
    { name: 'Instant Camera Fujifilm', recipient: 'friend', occasion: 'birthday', budget: '2500-5000', interest: 'art', price: '₹4,499', url: 'https://www.amazon.in/s?k=fujifilm+instax' },
    { name: 'Hammock Camping Portable', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'travel', price: '₹699', url: 'https://www.amazon.in/s?k=camping+hammock' },
    { name: 'World Map Wall Art', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'travel', price: '₹399', url: 'https://www.amazon.in/s?k=world+map+wall+art' },
    { name: 'Ukulele Soprano Beginner', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'music', price: '₹1,499', url: 'https://www.amazon.in/s?k=ukulele' },
    { name: 'Drone Camera Basic', recipient: 'friend', occasion: 'birthday', budget: '2500-5000', interest: 'technology', price: '₹4,799', url: 'https://www.amazon.in/s?k=drone+camera' },
    { name: 'Rubik Cube Speed Cube', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'gaming', price: '₹349', url: 'https://www.amazon.in/s?k=speed+cube' },

    // PARTNER - Romance & Celebration
    { name: 'Rose Box Preserved Flowers', recipient: 'partner', occasion: 'valentine', budget: '1000-2500', interest: 'fashion', price: '₹1,899', url: 'https://www.amazon.in/s?k=preserved+roses' },
    { name: 'Chocolate Gift Tower Ferrero', recipient: 'partner', occasion: 'valentine', budget: '500-1000', interest: 'cooking', price: '₹899', url: 'https://www.amazon.in/s?k=ferrero+rocher+tower' },
    { name: 'Personalized Pillow Couple', recipient: 'partner', occasion: 'anniversary', budget: 'under500', interest: 'art', price: '₹449', url: 'https://www.amazon.in/s?k=couple+pillow' },
    { name: 'Romantic Candles Set', recipient: 'partner', occasion: 'valentine', budget: 'under500', interest: 'art', price: '₹399', url: 'https://www.amazon.in/s?k=romantic+candles' },
    { name: 'Watch Couple Set Matching', recipient: 'partner', occasion: 'anniversary', budget: '2500-5000', interest: 'fashion', price: '₹3,999', url: 'https://www.amazon.in/s?k=couple+watches' },
    { name: 'Heart Pendant Necklace Silver', recipient: 'partner', occasion: 'valentine', budget: '1000-2500', interest: 'fashion', price: '₹1,699', url: 'https://www.amazon.in/s?k=heart+pendant' },
    { name: 'Couple Keychain Magnetic', recipient: 'partner', occasion: 'anniversary', budget: 'under500', interest: 'fashion', price: '₹349', url: 'https://www.amazon.in/s?k=couple+keychain' },
    { name: 'Smartwatch Fitness Tracker', recipient: 'partner', occasion: 'birthday', budget: '2500-5000', interest: 'fitness', price: '₹4,299', url: 'https://www.amazon.in/s?k=smartwatch' },
    { name: 'Photo Album Scrapbook', recipient: 'partner', occasion: 'anniversary', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=scrapbook+album' },
    { name: 'Aromatherapy Candles Luxury', recipient: 'partner', occasion: 'valentine', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=luxury+candles' },

    // SIBLING - Fun & Practical
    { name: 'Action Figure Marvel', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'gaming', price: '₹1,499', url: 'https://www.amazon.in/s?k=marvel+action+figure' },
    { name: 'LED Strip Lights RGB', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'technology', price: '₹699', url: 'https://www.amazon.in/s?k=led+strip+lights' },
    { name: 'Graphic Novel Set', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'books', price: '₹1,799', url: 'https://www.amazon.in/s?k=graphic+novels' },
    { name: 'Badminton Racket Pro', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'sports', price: '₹1,599', url: 'https://www.amazon.in/s?k=badminton+racket' },
    { name: 'Football Official Size', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'sports', price: '₹899', url: 'https://www.amazon.in/s?k=football' },
    { name: 'Gaming Mouse RGB', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'gaming', price: '₹799', url: 'https://www.amazon.in/s?k=gaming+mouse' },
    { name: 'Mechanical Keyboard RGB', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'gaming', price: '₹3,999', url: 'https://www.amazon.in/s?k=mechanical+keyboard' },
    { name: 'Skateboard Complete Set', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'sports', price: '₹1,899', url: 'https://www.amazon.in/s?k=skateboard' },
    { name: 'Anime Poster Collection', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹399', url: 'https://www.amazon.in/s?k=anime+posters' },
    { name: 'Sneakers Sports Nike', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'fashion', price: '₹4,299', url: 'https://www.amazon.in/s?k=nike+sneakers' },

    // COLLEAGUE - Professional & Thoughtful
    { name: 'Desk Organizer Wooden', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'art', price: '₹449', url: 'https://www.amazon.in/s?k=desk+organizer' },
    { name: 'Coffee Gift Set Gourmet', recipient: 'colleague', occasion: 'thankyou', budget: '500-1000', interest: 'cooking', price: '₹799', url: 'https://www.amazon.in/s?k=coffee+gift+set' },
    { name: 'Pen Set Parker Premium', recipient: 'colleague', occasion: 'thankyou', budget: '1000-2500', interest: 'art', price: '₹1,499', url: 'https://www.amazon.in/s?k=parker+pen' },
    { name: 'Notebook Leather Bound', recipient: 'colleague', occasion: 'thankyou', budget: '500-1000', interest: 'books', price: '₹699', url: 'https://www.amazon.in/s?k=leather+notebook' },
    { name: 'Wireless Mouse Office', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'technology', price: '₹399', url: 'https://www.amazon.in/s?k=wireless+mouse' },
    { name: 'Desk Plant Succulent Set', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'art', price: '₹349', url: 'https://www.amazon.in/s?k=desk+plants' },
    { name: 'Tea Sampler Luxury', recipient: 'colleague', occasion: 'thankyou', budget: '500-1000', interest: 'cooking', price: '₹599', url: 'https://www.amazon.in/s?k=tea+sampler' },
    { name: 'USB Hub Multiport', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'technology', price: '₹449', url: 'https://www.amazon.in/s?k=usb+hub' },
    { name: 'Stress Relief Balls Set', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'fitness', price: '₹299', url: 'https://www.amazon.in/s?k=stress+balls' },
    { name: 'Business Card Holder Elegant', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'fashion', price: '₹399', url: 'https://www.amazon.in/s?k=card+holder' },

    // CHILD - Educational & Fun
    { name: 'LEGO Classic Building Set', recipient: 'child', occasion: 'birthday', budget: '1000-2500', interest: 'gaming', price: '₹1,699', url: 'https://www.amazon.in/s?k=lego+classic' },
    { name: 'Kids Bicycle 16 Inch', recipient: 'child', occasion: 'birthday', budget: '2500-5000', interest: 'sports', price: '₹3,999', url: 'https://www.amazon.in/s?k=kids+bicycle' },
    { name: 'Coloring Book Set Kids', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹299', url: 'https://www.amazon.in/s?k=kids+coloring+books' },
    { name: 'Toy Kitchen Play Set', recipient: 'child', occasion: 'birthday', budget: '1000-2500', interest: 'cooking', price: '₹1,499', url: 'https://www.amazon.in/s?k=toy+kitchen' },
    { name: 'Remote Control Car Racing', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'gaming', price: '₹799', url: 'https://www.amazon.in/s?k=rc+car' },
    { name: 'Educational Tablet Kids', recipient: 'child', occasion: 'birthday', budget: '2500-5000', interest: 'technology', price: '₹4,499', url: 'https://www.amazon.in/s?k=kids+tablet' },
    { name: 'Puzzle Set 500 Pieces', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'gaming', price: '₹399', url: 'https://www.amazon.in/s?k=puzzle' },
    { name: 'Cricket Set Kids Complete', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'sports', price: '₹699', url: 'https://www.amazon.in/s?k=kids+cricket+set' },
    { name: 'Storybook Collection Famous', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'books', price: '₹799', url: 'https://www.amazon.in/s?k=kids+storybooks' },
    { name: 'Art Supplies Complete Kit', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=art+supplies+kids' },

    // WEDDING GIFTS - All Recipients
    { name: 'Dinner Set 24 Piece Ceramic', recipient: 'friend', occasion: 'wedding', budget: '2500-5000', interest: 'cooking', price: '₹3,999', url: 'https://www.amazon.in/s?k=dinner+set' },
    { name: 'Bedsheet Set Cotton King', recipient: 'friend', occasion: 'wedding', budget: '1000-2500', interest: 'fashion', price: '₹1,799', url: 'https://www.amazon.in/s?k=bedsheet+set' },
    { name: 'Wall Clock Designer Modern', recipient: 'friend', occasion: 'wedding', budget: '500-1000', interest: 'art', price: '₹799', url: 'https://www.amazon.in/s?k=wall+clock' },
    { name: 'Kitchen Appliance Combo Set', recipient: 'partner', occasion: 'wedding', budget: 'above5000', interest: 'cooking', price: '₹15,999', url: 'https://www.amazon.in/s?k=kitchen+appliances' },
    { name: 'Crystal Vase Decorative', recipient: 'friend', occasion: 'wedding', budget: '1000-2500', interest: 'art', price: '₹1,499', url: 'https://www.amazon.in/s?k=crystal+vase' },
    { name: 'Photo Frame Collage Large', recipient: 'sibling', occasion: 'wedding', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=photo+frame' },
    { name: 'Cookware Set Nonstick 7pc', recipient: 'friend', occasion: 'wedding', budget: '2500-5000', interest: 'cooking', price: '₹3,499', url: 'https://www.amazon.in/s?k=cookware+set' },
    { name: 'Towel Set Luxury 6pc', recipient: 'friend', occasion: 'wedding', budget: '1000-2500', interest: 'fashion', price: '₹1,299', url: 'https://www.amazon.in/s?k=towel+set' },
    { name: 'Table Lamp Modern LED', recipient: 'friend', occasion: 'wedding', budget: '500-1000', interest: 'technology', price: '₹899', url: 'https://www.amazon.in/s?k=table+lamp' },
    { name: 'Mixer Grinder 750W', recipient: 'partner', occasion: 'wedding', budget: '2500-5000', interest: 'cooking', price: '₹4,299', url: 'https://www.amazon.in/s?k=mixer+grinder' },

    // CHRISTMAS GIFTS - All Recipients
    { name: 'Christmas Tree Artificial 6ft', recipient: 'mom', occasion: 'christmas', budget: '2500-5000', interest: 'art', price: '₹3,999', url: 'https://www.amazon.in/s?k=christmas+tree' },
    { name: 'Santa Clause Costume Adult', recipient: 'dad', occasion: 'christmas', budget: '1000-2500', interest: 'fashion', price: '₹1,299', url: 'https://www.amazon.in/s?k=santa+costume' },
    { name: 'Christmas Lights String LED', recipient: 'mom', occasion: 'christmas', budget: 'under500', interest: 'art', price: '₹449', url: 'https://www.amazon.in/s?k=christmas+lights' },
    { name: 'Cake Baking Set Christmas', recipient: 'mom', occasion: 'christmas', budget: '500-1000', interest: 'cooking', price: '₹699', url: 'https://www.amazon.in/s?k=baking+set' },
    { name: 'Wine Glasses Crystal Set', recipient: 'dad', occasion: 'christmas', budget: '1000-2500', interest: 'cooking', price: '₹1,499', url: 'https://www.amazon.in/s?k=wine+glasses' },
    { name: 'Sweater Christmas Themed', recipient: 'sibling', occasion: 'christmas', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=christmas+sweater' },
    { name: 'Hot Chocolate Gift Set', recipient: 'friend', occasion: 'christmas', budget: 'under500', interest: 'cooking', price: '₹399', url: 'https://www.amazon.in/s?k=hot+chocolate+gift' },
    { name: 'Ornaments Christmas Tree Set', recipient: 'mom', occasion: 'christmas', budget: '500-1000', interest: 'art', price: '₹599', url: 'https://www.amazon.in/s?k=christmas+ornaments' },
    { name: 'Music Box Christmas Theme', recipient: 'child', occasion: 'christmas', budget: '500-1000', interest: 'music', price: '₹699', url: 'https://www.amazon.in/s?k=music+box' },
    { name: 'Wreath Door Christmas', recipient: 'mom', occasion: 'christmas', budget: 'under500', interest: 'art', price: '₹449', url: 'https://www.amazon.in/s?k=christmas+wreath' },

    // ANNIVERSARY GIFTS - Various
    { name: 'Champagne Gift Set Premium', recipient: 'partner', occasion: 'anniversary', budget: '2500-5000', interest: 'cooking', price: '₹4,499', url: 'https://www.amazon.in/s?k=champagne+gift' },
    { name: 'Memory Book Anniversary', recipient: 'partner', occasion: 'anniversary', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=memory+book' },
    { name: 'Engraved Plaque Silver', recipient: 'partner', occasion: 'anniversary', budget: '1000-2500', interest: 'fashion', price: '₹1,299', url: 'https://www.amazon.in/s?k=engraved+plaque' },
    { name: 'Rose Gold Bracelet', recipient: 'partner', occasion: 'anniversary', budget: '2500-5000', interest: 'fashion', price: '₹3,999', url: 'https://www.amazon.in/s?k=rose+gold+bracelet' },
    { name: 'Dinner Date Voucher Fine Dining', recipient: 'partner', occasion: 'anniversary', budget: '2500-5000', interest: 'cooking', price: '₹4,000', url: 'https://www.amazon.in/s?k=dining+voucher' },
    { name: 'Couple Ring Set Gold Plated', recipient: 'partner', occasion: 'anniversary', budget: '1000-2500', interest: 'fashion', price: '₹1,799', url: 'https://www.amazon.in/s?k=couple+rings' },
    { name: 'Love Letter Kit Vintage', recipient: 'partner', occasion: 'anniversary', budget: 'under500', interest: 'art', price: '₹399', url: 'https://www.amazon.in/s?k=letter+kit' },
    { name: 'Silk Scarf Designer', recipient: 'partner', occasion: 'anniversary', budget: '1000-2500', interest: 'fashion', price: '₹1,499', url: 'https://www.amazon.in/s?k=silk+scarf' },
    { name: 'Perfume Set Luxury Couple', recipient: 'partner', occasion: 'anniversary', budget: '2500-5000', interest: 'fashion', price: '₹3,799', url: 'https://www.amazon.in/s?k=perfume+set' },
    { name: 'Star Map Personalized', recipient: 'partner', occasion: 'anniversary', budget: '500-1000', interest: 'art', price: '₹799', url: 'https://www.amazon.in/s?k=star+map' },

    // GRADUATION GIFTS
    { name: 'Laptop Bag Professional', recipient: 'friend', occasion: 'graduation', budget: '1000-2500', interest: 'technology', price: '₹1,499', url: 'https://www.amazon.in/s?k=laptop+bag' },
    { name: 'Business Suit Formal', recipient: 'sibling', occasion: 'graduation', budget: '2500-5000', interest: 'fashion', price: '₹4,999', url: 'https://www.amazon.in/s?k=business+suit' },
    { name: 'Fountain Pen Luxury Parker', recipient: 'friend', occasion: 'graduation', budget: '1000-2500', interest: 'art', price: '₹1,699', url: 'https://www.amazon.in/s?k=fountain+pen' },
    { name: 'Portfolio Leather Professional', recipient: 'friend', occasion: 'graduation', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=leather+portfolio' },
    { name: 'Self Help Book Set', recipient: 'friend', occasion: 'graduation', budget: 'under500', interest: 'books', price: '₹449', url: 'https://www.amazon.in/s?k=self+help+books' },
    { name: 'Resume Paper Premium 100pc', recipient: 'friend', occasion: 'graduation', budget: 'under500', interest: 'art', price: '₹299', url: 'https://www.amazon.in/s?k=resume+paper' },
    { name: 'Briefcase Executive Black', recipient: 'friend', occasion: 'graduation', budget: '2500-5000', interest: 'fashion', price: '₹4,299', url: 'https://www.amazon.in/s?k=briefcase' },
    { name: 'Watch Formal Titan', recipient: 'sibling', occasion: 'graduation', budget: '2500-5000', interest: 'fashion', price: '₹3,999', url: 'https://www.amazon.in/s?k=titan+watch' },
    { name: 'Business Card Holder Premium', recipient: 'friend', occasion: 'graduation', budget: 'under500', interest: 'fashion', price: '₹399', url: 'https://www.amazon.in/s?k=business+card+holder' },
    { name: 'Success Planner 2025', recipient: 'friend', occasion: 'graduation', budget: 'under500', interest: 'books', price: '₹349', url: 'https://www.amazon.in/s?k=success+planner' },

    // JUST BECAUSE & VARIETY MIX - Maximum Coverage
    // Tech & Gadgets
    { name: 'Wireless Charger Fast Charging', recipient: 'friend', occasion: 'justbecause', budget: 'under500', interest: 'technology', price: '₹449', url: 'https://www.amazon.in/s?k=wireless+charger' },
    { name: 'Earbuds TWS Bluetooth', recipient: 'sibling', occasion: 'justbecause', budget: '500-1000', interest: 'music', price: '₹899', url: 'https://www.amazon.in/s?k=tws+earbuds' },
    { name: 'Power Strip Smart USB', recipient: 'colleague', occasion: 'justbecause', budget: 'under500', interest: 'technology', price: '₹399', url: 'https://www.amazon.in/s?k=smart+power+strip' },
    { name: 'Cable Organizer Kit', recipient: 'friend', occasion: 'justbecause', budget: 'under500', interest: 'technology', price: '₹299', url: 'https://www.amazon.in/s?k=cable+organizer' },
    { name: 'Webcam HD 1080p', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'technology', price: '₹1,899', url: 'https://www.amazon.in/s?k=webcam+1080p' },
    { name: 'Ring Light LED Selfie', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=ring+light' },
    { name: 'Screen Protector Tempered Glass', recipient: 'friend', occasion: 'justbecause', budget: 'under500', interest: 'technology', price: '₹249', url: 'https://www.amazon.in/s?k=screen+protector' },
    { name: 'Phone Stand Adjustable', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'technology', price: '₹349', url: 'https://www.amazon.in/s?k=phone+stand' },
    { name: 'Laptop Stand Aluminum', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'technology', price: '₹799', url: 'https://www.amazon.in/s?k=laptop+stand' },
    { name: 'Keyboard Mouse Combo Wireless', recipient: 'colleague', occasion: 'thankyou', budget: '500-1000', interest: 'technology', price: '₹799', url: 'https://www.amazon.in/s?k=keyboard+mouse+combo' },

    // Fashion & Accessories
    { name: 'Sunglasses Polarized UV', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹899', url: 'https://www.amazon.in/s?k=polarized+sunglasses' },
    { name: 'Belt Leather Formal', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹699', url: 'https://www.amazon.in/s?k=leather+belt' },
    { name: 'Tie Set Formal 5pc', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'fashion', price: '₹1,299', url: 'https://www.amazon.in/s?k=tie+set' },
    { name: 'Socks Pack Colorful 10 Pair', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'fashion', price: '₹399', url: 'https://www.amazon.in/s?k=socks+pack' },
    { name: 'Cap Baseball Adjustable', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'fashion', price: '₹349', url: 'https://www.amazon.in/s?k=baseball+cap' },
    { name: 'Scarf Winter Wool', recipient: 'mom', occasion: 'christmas', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=winter+scarf' },
    { name: 'Gloves Leather Touchscreen', recipient: 'dad', occasion: 'christmas', budget: '500-1000', interest: 'fashion', price: '₹699', url: 'https://www.amazon.in/s?k=leather+gloves' },
    { name: 'Anklet Silver Fashion', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'fashion', price: '₹449', url: 'https://www.amazon.in/s?k=silver+anklet' },
    { name: 'Earrings Set Fashion 12pc', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹699', url: 'https://www.amazon.in/s?k=earrings+set' },
    { name: 'Bracelet Charm Personalized', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'fashion', price: '₹799', url: 'https://www.amazon.in/s?k=charm+bracelet' },

    // Books & Reading
    { name: 'Biography Elon Musk', recipient: 'dad', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹399', url: 'https://www.amazon.in/s?k=elon+musk+biography' },
    { name: 'Atomic Habits Book', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹349', url: 'https://www.amazon.in/s?k=atomic+habits' },
    { name: 'Rich Dad Poor Dad Book', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹299', url: 'https://www.amazon.in/s?k=rich+dad+poor+dad' },
    { name: 'Harry Potter Box Set', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'books', price: '₹4,499', url: 'https://www.amazon.in/s?k=harry+potter+box+set' },
    { name: 'Notebook Set Moleskine 3pc', recipient: 'friend', occasion: 'thankyou', budget: '1000-2500', interest: 'books', price: '₹1,499', url: 'https://www.amazon.in/s?k=moleskine+notebooks' },
    { name: 'Bookmark Set Decorative', recipient: 'mom', occasion: 'justbecause', budget: 'under500', interest: 'books', price: '₹249', url: 'https://www.amazon.in/s?k=decorative+bookmarks' },
    { name: 'Book Light LED Rechargeable', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'books', price: '₹399', url: 'https://www.amazon.in/s?k=book+light' },
    { name: 'Dictionary English Advanced', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'books', price: '₹699', url: 'https://www.amazon.in/s?k=english+dictionary' },
    { name: 'Comic Book Collection Marvel', recipient: 'child', occasion: 'birthday', budget: '1000-2500', interest: 'books', price: '₹1,799', url: 'https://www.amazon.in/s?k=marvel+comics' },
    { name: 'Magazine Subscription National Geographic', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'travel', price: '₹1,499', url: 'https://www.amazon.in/s?k=national+geographic' },

    // Fitness & Health
    { name: 'Resistance Bands Set 5pc', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹449', url: 'https://www.amazon.in/s?k=resistance+bands' },
    { name: 'Skipping Rope Weighted', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹349', url: 'https://www.amazon.in/s?k=skipping+rope' },
    { name: 'Yoga Mat Premium 6mm', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'fitness', price: '₹699', url: 'https://www.amazon.in/s?k=yoga+mat' },
    { name: 'Protein Shaker Bottle', recipient: 'dad', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹299', url: 'https://www.amazon.in/s?k=protein+shaker' },
    { name: 'Massage Gun Handheld', recipient: 'dad', occasion: 'birthday', budget: '2500-5000', interest: 'fitness', price: '₹3,999', url: 'https://www.amazon.in/s?k=massage+gun' },
    { name: 'Foam Roller Exercise', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'fitness', price: '₹699', url: 'https://www.amazon.in/s?k=foam+roller' },
    { name: 'Gym Gloves Workout', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹399', url: 'https://www.amazon.in/s?k=gym+gloves' },
    { name: 'Pedometer Step Counter', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹449', url: 'https://www.amazon.in/s?k=pedometer' },
    { name: 'Water Bottle Steel 1L', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'fitness', price: '₹399', url: 'https://www.amazon.in/s?k=steel+water+bottle' },
    { name: 'Exercise Ball Stability 65cm', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'fitness', price: '₹799', url: 'https://www.amazon.in/s?k=exercise+ball' },

    // COOKING & KITCHEN - Comprehensive
    { name: 'Chef Knife Set Professional 8pc', recipient: 'mom', occasion: 'birthday', budget: '1000-2500', interest: 'cooking', price: '₹1,899', url: 'https://www.amazon.in/s?k=chef+knife+set' },
    { name: 'Cutting Board Wooden Large', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹449', url: 'https://www.amazon.in/s?k=cutting+board' },
    { name: 'Spice Jar Set 24pc Glass', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'cooking', price: '₹799', url: 'https://www.amazon.in/s?k=spice+jars' },
    { name: 'Apron Kitchen Cotton Premium', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹349', url: 'https://www.amazon.in/s?k=kitchen+apron' },
    { name: 'Measuring Cups Spoons Set', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹299', url: 'https://www.amazon.in/s?k=measuring+cups' },
    { name: 'Pressure Cooker 5L Steel', recipient: 'mom', occasion: 'wedding', budget: '1000-2500', interest: 'cooking', price: '₹1,499', url: 'https://www.amazon.in/s?k=pressure+cooker' },
    { name: 'Baking Tray Set 3pc Nonstick', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'cooking', price: '₹699', url: 'https://www.amazon.in/s?k=baking+tray' },
    { name: 'Rolling Pin Marble', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹399', url: 'https://www.amazon.in/s?k=rolling+pin' },
    { name: 'Food Storage Container Set 12pc', recipient: 'mom', occasion: 'wedding', budget: '500-1000', interest: 'cooking', price: '₹799', url: 'https://www.amazon.in/s?k=food+containers' },
    { name: 'Electric Kettle 1.5L Fast Boil', recipient: 'colleague', occasion: 'thankyou', budget: '500-1000', interest: 'cooking', price: '₹799', url: 'https://www.amazon.in/s?k=electric+kettle' },
    { name: 'Salt Pepper Grinder Set', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹449', url: 'https://www.amazon.in/s?k=salt+pepper+grinder' },
    { name: 'Blender Hand Stick Immersion', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'cooking', price: '₹899', url: 'https://www.amazon.in/s?k=hand+blender' },
    { name: 'Toaster 2 Slice Automatic', recipient: 'partner', occasion: 'wedding', budget: '1000-2500', interest: 'cooking', price: '₹1,799', url: 'https://www.amazon.in/s?k=toaster' },
    { name: 'Tawa Nonstick 30cm', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'cooking', price: '₹399', url: 'https://www.amazon.in/s?k=tawa' },
    { name: 'Lunch Box Steel 3 Tier', recipient: 'colleague', occasion: 'thankyou', budget: 'under500', interest: 'cooking', price: '₹449', url: 'https://www.amazon.in/s?k=lunch+box' },

    // ART & CRAFTS - Creative Collection
    { name: 'Watercolor Paint Set 48 Colors', recipient: 'child', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=watercolor+set' },
    { name: 'Sketch Pencils Set 24pc', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹449', url: 'https://www.amazon.in/s?k=sketch+pencils' },
    { name: 'Canvas Boards Set 10pc', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=canvas+boards' },
    { name: 'Acrylic Paint Set 24 Tubes', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'art', price: '₹1,299', url: 'https://www.amazon.in/s?k=acrylic+paint' },
    { name: 'Paint Brushes Set Professional', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹799', url: 'https://www.amazon.in/s?k=paint+brushes' },
    { name: 'Easel Stand Wooden Adjustable', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'art', price: '₹1,799', url: 'https://www.amazon.in/s?k=easel+stand' },
    { name: 'Clay Modeling Set Kids', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹349', url: 'https://www.amazon.in/s?k=modeling+clay' },
    { name: 'Origami Paper Colorful 500pc', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹299', url: 'https://www.amazon.in/s?k=origami+paper' },
    { name: 'Adult Coloring Book Mandala', recipient: 'mom', occasion: 'justbecause', budget: 'under500', interest: 'art', price: '₹349', url: 'https://www.amazon.in/s?k=adult+coloring+book' },
    { name: 'Calligraphy Pen Set Beginners', recipient: 'friend', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=calligraphy+set' },
    { name: 'Scrapbooking Kit Complete', recipient: 'mom', occasion: 'birthday', budget: '1000-2500', interest: 'art', price: '₹1,499', url: 'https://www.amazon.in/s?k=scrapbooking+kit' },
    { name: 'Embroidery Hoop Set 6pc', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹399', url: 'https://www.amazon.in/s?k=embroidery+hoops' },
    { name: 'Knitting Needles Set Bamboo', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'art', price: '₹449', url: 'https://www.amazon.in/s?k=knitting+needles' },
    { name: 'Beads Jewelry Making Kit', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'art', price: '₹699', url: 'https://www.amazon.in/s?k=jewelry+beads' },
    { name: 'Resin Craft Kit Epoxy', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'art', price: '₹1,299', url: 'https://www.amazon.in/s?k=resin+craft+kit' },

    // MUSIC - Instruments & Accessories
    { name: 'Guitar Acoustic Yamaha Beginner', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'music', price: '₹4,999', url: 'https://www.amazon.in/s?k=acoustic+guitar' },
    { name: 'Capo Guitar Universal', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'music', price: '₹299', url: 'https://www.amazon.in/s?k=guitar+capo' },
    { name: 'Guitar Strings Set 6pc', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'music', price: '₹249', url: 'https://www.amazon.in/s?k=guitar+strings' },
    { name: 'Harmonica Hohner Key C', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'music', price: '₹499', url: 'https://www.amazon.in/s?k=harmonica' },
    { name: 'Microphone Condenser USB', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'music', price: '₹1,899', url: 'https://www.amazon.in/s?k=usb+microphone' },
    { name: 'Headphone Stand Aluminum', recipient: 'friend', occasion: 'justbecause', budget: 'under500', interest: 'music', price: '₹399', url: 'https://www.amazon.in/s?k=headphone+stand' },
    { name: 'Drum Pad Electronic Practice', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'music', price: '₹3,999', url: 'https://www.amazon.in/s?k=drum+pad' },
    { name: 'Keyboard Piano 61 Keys', recipient: 'child', occasion: 'birthday', budget: '2500-5000', interest: 'music', price: '₹4,499', url: 'https://www.amazon.in/s?k=keyboard+piano' },
    { name: 'Metronome Digital', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'music', price: '₹449', url: 'https://www.amazon.in/s?k=metronome' },
    { name: 'Violin Acoustic 4/4 Size', recipient: 'child', occasion: 'birthday', budget: '2500-5000', interest: 'music', price: '₹3,999', url: 'https://www.amazon.in/s?k=violin' },
    { name: 'Recorder Flute Yamaha', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'music', price: '₹349', url: 'https://www.amazon.in/s?k=recorder+flute' },
    { name: 'Music Stand Folding Metal', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'music', price: '₹499', url: 'https://www.amazon.in/s?k=music+stand' },
    { name: 'Tambourine Wooden Hand', recipient: 'child', occasion: 'birthday', budget: 'under500', interest: 'music', price: '₹299', url: 'https://www.amazon.in/s?k=tambourine' },
    { name: 'Guitar Tuner Clip On', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'music', price: '₹349', url: 'https://www.amazon.in/s?k=guitar+tuner' },
    { name: 'Speaker Bluetooth Waterproof', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'music', price: '₹1,699', url: 'https://www.amazon.in/s?k=bluetooth+speaker' },

    // SPORTS - Comprehensive Sports Collection
    { name: 'Tennis Racket Wilson Pro', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'sports', price: '₹4,499', url: 'https://www.amazon.in/s?k=tennis+racket' },
    { name: 'Yoga Ball 65cm Anti-Burst', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'fitness', price: '₹699', url: 'https://www.amazon.in/s?k=yoga+ball' },
    { name: 'Cricket Bat Kashmir Willow', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'sports', price: '₹899', url: 'https://www.amazon.in/s?k=cricket+bat' },
    { name: 'Volleyball Nivia Official', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'sports', price: '₹499', url: 'https://www.amazon.in/s?k=volleyball' },
    { name: 'Basketball Spalding Size 7', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'sports', price: '₹1,299', url: 'https://www.amazon.in/s?k=basketball' },
    { name: 'Swimming Goggles Anti-Fog', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'sports', price: '₹399', url: 'https://www.amazon.in/s?k=swimming+goggles' },
    { name: 'Cycle Helmet Adult', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'sports', price: '₹799', url: 'https://www.amazon.in/s?k=cycle+helmet' },
    { name: 'Chess Board Wooden Professional', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'gaming', price: '₹799', url: 'https://www.amazon.in/s?k=chess+board' },
    { name: 'Badminton Shuttlecock Set 10pc', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'sports', price: '₹349', url: 'https://www.amazon.in/s?k=shuttlecocks' },
    { name: 'Table Tennis Bat Set', recipient: 'sibling', occasion: 'birthday', budget: 'under500', interest: 'sports', price: '₹499', url: 'https://www.amazon.in/s?k=table+tennis' },
    { name: 'Golf Balls Set Wilson', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'sports', price: '₹1,499', url: 'https://www.amazon.in/s?k=golf+balls' },
    { name: 'Sports Watch Fitness Tracker', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'fitness', price: '₹1,899', url: 'https://www.amazon.in/s?k=sports+watch' },
    { name: 'Jump Box Plyometric', recipient: 'dad', occasion: 'birthday', budget: '2500-5000', interest: 'fitness', price: '₹3,999', url: 'https://www.amazon.in/s?k=plyo+box' },
    { name: 'Kettlebell 8kg Cast Iron', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'fitness', price: '₹899', url: 'https://www.amazon.in/s?k=kettlebell' },
    { name: 'Ankle Weights 2kg Pair', recipient: 'mom', occasion: 'birthday', budget: 'under500', interest: 'fitness', price: '₹449', url: 'https://www.amazon.in/s?k=ankle+weights' },

    // TRAVEL - Travel & Adventure Gear
    { name: 'Backpack Travel 50L Hiking', recipient: 'friend', occasion: 'birthday', budget: '2500-5000', interest: 'travel', price: '₹3,999', url: 'https://www.amazon.in/s?k=hiking+backpack' },
    { name: 'Travel Pillow Neck Memory Foam', recipient: 'dad', occasion: 'birthday', budget: 'under500', interest: 'travel', price: '₹449', url: 'https://www.amazon.in/s?k=travel+pillow' },
    { name: 'Suitcase Trolley 24 inch', recipient: 'dad', occasion: 'birthday', budget: '2500-5000', interest: 'travel', price: '₹4,499', url: 'https://www.amazon.in/s?k=trolley+bag' },
    { name: 'Travel Adapter Universal', recipient: 'friend', occasion: 'justbecause', budget: 'under500', interest: 'travel', price: '₹399', url: 'https://www.amazon.in/s?k=travel+adapter' },
    { name: 'Passport Cover Leather', recipient: 'friend', occasion: 'graduation', budget: 'under500', interest: 'travel', price: '₹349', url: 'https://www.amazon.in/s?k=passport+cover' },
    { name: 'Camping Tent 4 Person', recipient: 'friend', occasion: 'birthday', budget: '2500-5000', interest: 'travel', price: '₹3,999', url: 'https://www.amazon.in/s?k=camping+tent' },
    { name: 'Sleeping Bag Waterproof', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'travel', price: '₹1,799', url: 'https://www.amazon.in/s?k=sleeping+bag' },
    { name: 'Portable Camping Stove', recipient: 'dad', occasion: 'birthday', budget: '500-1000', interest: 'travel', price: '₹899', url: 'https://www.amazon.in/s?k=camping+stove' },
    { name: 'Waterproof Dry Bag 20L', recipient: 'friend', occasion: 'birthday', budget: 'under500', interest: 'travel', price: '₹449', url: 'https://www.amazon.in/s?k=dry+bag' },
    { name: 'Travel Organizer Set 7pc', recipient: 'mom', occasion: 'birthday', budget: '500-1000', interest: 'travel', price: '₹699', url: 'https://www.amazon.in/s?k=travel+organizer' },
    { name: 'Compact Binoculars 10x25', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'travel', price: '₹1,499', url: 'https://www.amazon.in/s?k=binoculars' },
    { name: 'Travel Journal Leather Bound', recipient: 'friend', occasion: 'graduation', budget: 'under500', interest: 'travel', price: '₹449', url: 'https://www.amazon.in/s?k=travel+journal' },
    { name: 'Portable Charger 20000mAh', recipient: 'friend', occasion: 'birthday', budget: '1000-2500', interest: 'technology', price: '₹1,699', url: 'https://www.amazon.in/s?k=power+bank' },
    { name: 'Action Camera 4K Waterproof', recipient: 'friend', occasion: 'birthday', budget: '2500-5000', interest: 'technology', price: '₹4,999', url: 'https://www.amazon.in/s?k=action+camera' },
    { name: 'Trekking Poles Pair Adjustable', recipient: 'dad', occasion: 'birthday', budget: '1000-2500', interest: 'travel', price: '₹1,299', url: 'https://www.amazon.in/s?k=trekking+poles' },

    // GAMING - Video Games & Gaming Gear
    { name: 'Gaming Chair Ergonomic', recipient: 'sibling', occasion: 'birthday', budget: 'above5000', interest: 'gaming', price: '₹9,999', url: 'https://www.amazon.in/s?k=gaming+chair' },
    { name: 'Gaming Headset RGB 7.1', recipient: 'sibling', occasion: 'birthday', budget: '1000-2500', interest: 'gaming', price: '₹1,899', url: 'https://www.amazon.in/s?k=gaming+headset' },
    { name: 'Gaming Mousepad XXL RGB', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'gaming', price: '₹499', url: 'https://www.amazon.in/s?k=gaming+mousepad' },
    { name: 'Controller Wireless Xbox Style', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'gaming', price: '₹3,999', url: 'https://www.amazon.in/s?k=gaming+controller' },
    { name: 'VR Headset All-in-One', recipient: 'sibling', occasion: 'birthday', budget: 'above5000', interest: 'gaming', price: '₹19,999', url: 'https://www.amazon.in/s?k=vr+headset' },
    { name: 'Gaming Glasses Blue Light', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'gaming', price: '₹449', url: 'https://www.amazon.in/s?k=gaming+glasses' },
    { name: 'Controller Charging Dock', recipient: 'sibling', occasion: 'justbecause', budget: 'under500', interest: 'gaming', price: '₹399', url: 'https://www.amazon.in/s?k=controller+charger' },
    { name: 'Game Storage Tower', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'gaming', price: '₹799', url: 'https://www.amazon.in/s?k=game+storage' },
    { name: 'Racing Wheel Pedal Set', recipient: 'sibling', occasion: 'birthday', budget: 'above5000', interest: 'gaming', price: '₹12,999', url: 'https://www.amazon.in/s?k=racing+wheel' },
    { name: 'Cooling Pad Laptop Gaming', recipient: 'sibling', occasion: 'birthday', budget: '500-1000', interest: 'gaming', price: '₹899', url: 'https://www.amazon.in/s?k=laptop+cooling+pad' },
    { name: 'Capture Card HDMI', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'gaming', price: '₹4,499', url: 'https://www.amazon.in/s?k=capture+card' },
    { name: 'Flight Stick Joystick', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'gaming', price: '₹3,999', url: 'https://www.amazon.in/s?k=flight+stick' },
    { name: 'Stream Deck Elgato', recipient: 'sibling', occasion: 'birthday', budget: 'above5000', interest: 'gaming', price: '₹15,999', url: 'https://www.amazon.in/s?k=stream+deck' },
    { name: 'Arcade Stick Fighting', recipient: 'sibling', occasion: 'birthday', budget: '2500-5000', interest: 'gaming', price: '₹4,999', url: 'https://www.amazon.in/s?k=arcade+stick' },
    { name: 'Gaming Monitor 144Hz 24 inch', recipient: 'sibling', occasion: 'birthday', budget: 'above5000', interest: 'gaming', price: '₹19,999', url: 'https://www.amazon.in/s?k=gaming+monitor' }

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
