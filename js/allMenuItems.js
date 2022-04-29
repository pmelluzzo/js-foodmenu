
const classicRolls = [
  {
    name: "Asparagus Roll",
    des: "8 pieces. Temp. asparagus, avocado, sesame seeds.",
    price: "$5.78"
  },
  {
    name: "Albacore Tuna Roll",
    des: "8 pieces. Seared albacore tuna, avocado, green onion, sesame seeds.",
    price: "$7.09"
  },
  {
    name: "Spring Roll",
    des: "4 pieces. Deep-fried vegetable roll served with sweet and sour sauce.",
    price: "$6.48"
  }
];

const menuItems = [
  {
    name: "Chicken Mushroom Soup",
    img: "images/CCMS.jpg",
    des: "With goji berries, Chinese dates, ginger, and Shiitake mushrooms, this soup is healthy, if not downright healing–but also decidedly delicious!",
    price: "$10.27",
    nutrition: `
                <h2>Nutrition Facts</h2>
                <h3>Per 3/4 cup (175g)<br>
                Amount % Daily Value</h3><br>
                <p>Calories: 160<br>
                Fat: 2.5g	4%<br>
                Saturated: 1.5 g<br>
                +Trans: 0g	8%<br>
                Cholesterol: 10 mg<br>
                Sodium: 75mg	3%<br>
                Carbohydrate: 25g	8%<br>
                Fibre: 0g	0%<br>
                Sugars: 24g<br>
                Protein: 8g<br>
                Vitamin A: 2%<br>
                Vitamin C:	0%<br>
                Calcium:	20%<br>
                Iron:	0%</p>
                `
  },
  {
    name: "Lotus Root & Pork Soup",
    img: "images/LR&PS.jpg",
    des: "Grandma’s classic! It has a light broth with fall apart pork simmered in a garlic and ginger infused homemade stock. As all Cantonese soups promise, one bowl is guaranteed to warm your soul!",
    price: "$9.09",
    nutrition: `
                <h2>Nutrition Facts</h2>
                <h3><p>Per 3/4 cup (175g)<br>
                Amount % Daily Value</h3><br>
                Calories: 160<br>
                Fat: 2.5g	4%<br>
                Saturated: 1.5 g<br>
                +Trans: 0g	8%<br>
                Cholesterol: 10 mg<br>
                Sodium: 75mg	3%<br>
                Carbohydrate: 25g	8%<br>
                Fibre: 0g	0%<br>
                Sugars: 24g<br>
                Protein: 8g<br>
                Vitamin A: 2%<br>
                Vitamin C:	0%<br>
                Calcium:	20%<br>
                Iron:	0%</p>
                `
  },
  {
    name: "Taiwanese Sesame Oil Chicken Soup",
    img: "images/SO&CS.jpg",
    des: "This Taiwanese sesame oil chicken soup will literally warm your bones. With loads of fresh ginger and rice wine, you’ll break a sweat by the time you’re at the bottom of your bowl.",
    price: "$6.48",
    nutrition: `
                <h2>Nutrition Facts</h2>
                <h3><p>Per 3/4 cup (175g)<br>
                Amount % Daily Value</h3><br>
                Calories: 160<br>
                Fat: 2.5g	4%<br>
                Saturated: 1.5 g<br>
                +Trans: 0g	8%<br>
                Cholesterol: 10 mg<br>
                Sodium: 75mg	3%<br>
                Carbohydrate: 25g	8%<br>
                Fibre: 0g	0%<br>
                Sugars: 24g<br>
                Protein: 8g<br>
                Vitamin A: 2%<br>
                Vitamin C:	0%<br>
                Calcium:	20%<br>
                Iron:	0%</p>
                `
  },
  {
    name: "Chicken Balls Soup",
    img: "images/CBallS.jpg",
    des: "This is just like everyone’s favorite cozy, comforting homemade chicken noodle soup except made even better with chicken meatballs! You’ll only want this version of chicken noodle soup after trying this! Promise!",
    price: "$10.27",
    nutrition: `
                <h2>Nutrition Facts</h2>
                <h3><p>Per 3/4 cup (175g)<br>
                Amount % Daily Value</h3><br>
                Calories: 160<br>
                Fat: 2.5g	4%<br>
                Saturated: 1.5 g<br>
                +Trans: 0g	8%<br>
                Cholesterol: 10 mg<br>
                Sodium: 75mg	3%<br>
                Carbohydrate: 25g	8%<br>
                Fibre: 0g	0%<br>
                Sugars: 24g<br>
                Protein: 8g<br>
                Vitamin A: 2%<br>
                Vitamin C:	0%<br>
                Calcium:	20%<br>
                Iron:	0%</p>
                `
  },
  {
    name: "Pork Butt Soup",
    img: "images/chinese-pork-stew-1.jpg",
    des: "Pork Stew has tender chunks of pork and vegetables in a thick and hearty broth. It’s so flavorful and rich, you’ll have the whole family reaching for another bowl!",
    price: "$9.09",
    nutrition: `
                <h2>Nutrition Facts</h2>
                <h3><p>Per 3/4 cup (175g)<br>
                Amount % Daily Value</h3><br>
                Calories: 160<br>
                Fat: 2.5g	4%<br>
                Saturated: 1.5 g<br>
                +Trans: 0g	8%<br>
                Cholesterol: 10 mg<br>
                Sodium: 75mg	3%<br>
                Carbohydrate: 25g	8%<br>
                Fibre: 0g	0%<br>
                Sugars: 24g<br>
                Protein: 8g<br>
                Vitamin A: 2%<br>
                Vitamin C:	0%<br>
                Calcium:	20%<br>
                Iron:	0%</p>
                `
  },
  {
    name: "Szechwan Hot Oil Hot Pot Soup",
    img: "images/hot-pot-14-1.jpg",
    des: "If you’re looking for a break from the traditional chili, corn chowder, or chicken noodle soup, you’ll want to try our Sichuan Hot Pot. This mouthwatering and customizable authentic soup will be made with anything you desire. ",
    price: "$6.48",
    nutrition: `
                <h2>Nutrition Facts</h2>
                <h3><p>Per 3/4 cup (175g)<br>
                Amount % Daily Value</h3><br>
                Calories: 160<br>
                Fat: 2.5g	4%<br>
                Saturated: 1.5 g<br>
                +Trans: 0g	8%<br>
                Cholesterol: 10 mg<br>
                Sodium: 75mg	3%<br>
                Carbohydrate: 25g	8%<br>
                Fibre: 0g	0%<br>
                Sugars: 24g<br>
                Protein: 8g<br>
                Vitamin A: 2%<br>
                Vitamin C:	0%<br>
                Calcium:	20%<br>
                Iron:	0%</p>
                `
  },
  {
    name: "Mushroom Miso Soup",
    img: "images/homemade-miso-soup-3.jpg",
    des: "Miso is an ancient Japanese seasoning paste made from fermented soybeans. It’s got that salty, umami flavor that distinguishes so many Japanese dishes like this classic miso soup.",
    price: "$10.27",
    nutrition: `
                <h2>Nutrition Facts</h2>
                <h3><p>Per 3/4 cup (175g)<br>
                Amount % Daily Value</h3><br>
                Calories: 160<br>
                Fat: 2.5g	4%<br>
                Saturated: 1.5 g<br>
                +Trans: 0g	8%<br>
                Cholesterol: 10 mg<br>
                Sodium: 75mg	3%<br>
                Carbohydrate: 25g	8%<br>
                Fibre: 0g	0%<br>
                Sugars: 24g<br>
                Protein: 8g<br>
                Vitamin A: 2%<br>
                Vitamin C:	0%<br>
                Calcium:	20%<br>
                Iron:	0%</p>
                `
  },
  {
    name: "Winter Melon Stew",
    img: "images/220215_Winter-Melon-Soup-With-Meatballs_4.jpg",
    des: "Winter melon soup is a delicately flavored yet warm, comforting dish that is usually served on cooler days. The winter melon is cooked in a rich-tasting chicken broth until tender. The addition of tiny tender homemade pork meatballs and fresh organic kale makes this simple soup taste delicious and hearty.",
    price: "$10.27"
    ,nutrition: `
                <h2>Nutrition Facts</h2>
                <h3><p>Per 3/4 cup (175g)<br>
                Amount % Daily Value</h3><br>
                Calories: 160<br>
                Fat: 2.5g	4%<br>
                Saturated: 1.5 g<br>
                +Trans: 0g	8%<br>
                Cholesterol: 10 mg<br>
                Sodium: 75mg	3%<br>
                Carbohydrate: 25g	8%<br>
                Fibre: 0g	0%<br>
                Sugars: 24g<br>
                Protein: 8g<br>
                Vitamin A: 2%<br>
                Vitamin C:	0%<br>
                Calcium:	20%<br>
                Iron:	0%</p>
                `
  }
];
