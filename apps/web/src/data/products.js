export const categories = [
  {
    id: 'brownie',
    name: 'Brownie',
    image: 'https://images.unsplash.com/photo-1688577727548-bf5d7e31cb38',
    description: 'Rich, fudgy, and decadent chocolate brownies baked to perfection.'
  },
  {
    id: 'cake',
    name: 'Cake',
    image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/ad987e16f5b1cd28fb9f8ba4698a569d.jpg',
    description: 'Artisan cakes crafted with premium ingredients for your special moments.'
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    image: 'https://images.unsplash.com/photo-1452703417006-a00f3164fe7a',
    description: 'Handcrafted artisanal chocolates and truffles.'
  },
  {
    id: 'cheese-cake',
    name: 'Cheese Cake',
    image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/53c3658324b275faa62e2b02f9f1208a.jpg',
    description: 'Creamy and decadent cheesecake desserts layered in elegant glass jars.'
  }
];

export const products = {
  brownie: [
    { id: 'b1', name: 'Classic Fudge Brownie', category: 'brownie', price: '₹450', image: 'https://images.unsplash.com/photo-1688577727548-bf5d7e31cb38', description: 'Traditional rich and fudgy chocolate brownie baked with premium cocoa.' },
    { id: 'b2', name: 'Walnut Espresso Brownie', category: 'brownie', price: '₹550', image: 'https://images.unsplash.com/photo-1628068779668-50cbb2a6e0aa', description: 'Deep chocolate brownie infused with espresso and studded with walnuts.' },
    { id: 'b3', name: 'Salted Caramel Swirl', category: 'brownie', price: '₹500', image: 'https://images.unsplash.com/photo-1688577725175-6e8b3f389065', description: 'Decadent brownie swirled with house-made salted caramel.' },
    { id: 'b4', name: 'Double Chocolate Chunk', category: 'brownie', price: '₹480', image: 'https://images.unsplash.com/photo-1628084848748-0c71333e0416', description: 'Fudgy base loaded with generous chunks of dark chocolate.' },
    { id: 'b5', name: 'Peanut Butter Marble', category: 'brownie', price: '₹520', image: 'https://images.unsplash.com/photo-1619270298835-6681d172c02b', description: 'Rich chocolate marbled with creamy peanut butter swirls.' },
    { id: 'b6', name: 'Mint Dark Chocolate', category: 'brownie', price: '₹490', image: 'https://images.unsplash.com/photo-1691691214692-d4a3cace1afe', description: 'Dark chocolate brownie perfectly balanced with refreshing mint.' }
  ],
  cake: [
    { id: 'c1', name: 'Pink Pearl Layer Cake', category: 'cake', price: '₹1200', image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/ad987e16f5b1cd28fb9f8ba4698a569d.jpg', description: 'Beautiful pink and white layered cake with delicate pearl decorations.' },
    { id: 'c2', name: 'Purple Heart Design Cake', category: 'cake', price: '₹1400', image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/7c8a0b60e4c2b76953db52b1daf1b400.jpg', description: 'Elegant purple and white decorated cake featuring a romantic heart design.' },
    { id: 'c3', name: 'Yellow Ribbon Bow Cake', category: 'cake', price: '₹1600', image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/18cc10c1ddccad4d43dbf1581622e1de.jpg', description: 'Sunny yellow cake with beautiful pink frosting decorations and a ribbon bow.' },
    { id: 'c4', name: 'Blue Superhero Cake', category: 'cake', price: '₹1350', image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/d5b506e9b8db9d630eae154455246b20.jpg', description: 'Fun and vibrant blue superhero themed cake perfect for celebrations.' },
    { id: 'c5', name: 'Pink Rosette Pearl Cake', category: 'cake', price: '₹1500', image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/1449720205e977b8d1640134f5c21580.jpg', description: 'Stunning cake decorated with pink rosettes and shimmering pearl accents.' },
    { id: 'c6', name: 'Chocolate Cream Cookie Cake', category: 'cake', price: '₹1450', image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/099dbda175a4da1ce1c9432ba47907a2.jpg', description: 'Decadent chocolate cake with rich cream frosting and cookie decorations.' }
  ],
  chocolate: [
    { id: 'ch1', name: 'Assorted Truffle Box', category: 'chocolate', price: '₹850', image: 'https://images.unsplash.com/photo-1452703417006-a00f3164fe7a', description: 'A handpicked selection of our finest artisanal truffles.' },
    { id: 'ch2', name: 'Dark Chocolate Bark', category: 'chocolate', price: '₹600', image: 'https://images.unsplash.com/photo-1680552505972-a096a74c122a', description: 'Rich 70% dark chocolate bark with roasted nuts and sea salt.' },
    { id: 'ch3', name: 'Sea Salt Caramels', category: 'chocolate', price: '₹750', image: 'https://images.unsplash.com/photo-1694006756798-5ba959c998d7', description: 'Chewy vanilla caramel enrobed in chocolate and topped with sea salt.' },
    { id: 'ch4', name: 'Pistachio White Chocolate', category: 'chocolate', price: '₹650', image: 'https://images.unsplash.com/photo-1695417520098-ba898a16bf83', description: 'Creamy white chocolate blended with premium roasted pistachios.' },
    { id: 'ch5', name: 'Orange Zest Ganache', category: 'chocolate', price: '₹700', image: 'https://images.unsplash.com/photo-1686578220035-eb8530720b5b', description: 'Smooth dark chocolate ganache infused with fresh orange zest.' },
    { id: 'ch6', name: 'Ruby Chocolate Hearts', category: 'chocolate', price: '₹900', image: 'https://images.unsplash.com/photo-1586782668209-e1502c50d456', description: 'Naturally pink ruby chocolate molded into delicate heart shapes.' }
  ],
  'cheese-cake': [
    { id: 'cc1', name: 'Cocoa Dream Cheesecake Jar', category: 'cheese-cake', price: '₹350', image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/53c3658324b275faa62e2b02f9f1208a.jpg', description: 'Creamy cheesecake dessert layered in a glass jar, finished with a delicate dusting of cocoa powder.' },
    { id: 'cc2', name: 'Dark Chocolate Layer Cheesecake', category: 'cheese-cake', price: '₹380', image: 'https://horizons-cdn.hostinger.com/2e79bef1-1f79-43e5-89e1-e398e3a843f9/ea8dafdfa02c2f38292dbcf13530054f.jpg', description: 'Luxurious creamy cheesecake dessert in a glass jar featuring a decadent dark chocolate ganache layer.' }
  ]
};