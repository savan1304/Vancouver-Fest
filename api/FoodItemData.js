import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.foodItem.createMany({
    data: [
      {
        name: 'Strawberry Milkshake',
        imageUrl: 'https://example.com/images/strawberry_milkshake.jpg',
        Summary: 'This strawberry milkshake is thick, creamy, and everything that you would hope a milkshake would be! This classic dessert is so delicious!',
        receipeLink: 'https://therecipecritic.com/strawberry-milkshake/',
        category: 'Drinks'
      },
      {
        name: 'Mango MilkShake',
        imageUrl: 'https://example.com/images/mango_milkshake.jpg',
        Summary: 'Mango milkshake made with fresh ripe mangoes is absolutely the perfect summer drink! Its a refreshing, drink and dessert rolled into one!',
        receipeLink: 'https://www.indianhealthyrecipes.com/mango-milk-shake-recipe/',
        category: 'Drinks'
      },
      {
        name: 'Milk Boba Tea',
        imageUrl: 'https://example.com/images/milk_boba_tea.jpg',
        Summary: 'This classic bubble tea drink, originating from Taiwan, is one of the favorite summer drink recipes.',
        receipeLink: 'https://tasty.co/recipe/boba-milk-tea',
        category: 'Drinks'
      },
      {
        name: 'Cappuccino',
        imageUrl: 'https://example.com/images/cappuccino.jpg',
        Summary: 'A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top.',
        receipeLink: 'https://www.thespruceeats.com/how-to-make-cappuccinos-766116',
        category: 'Drinks'
      },
      {
        name: 'Donut',
        imageUrl: 'https://example.com/images/donut.jpg',
        Summary: 'Doughnuts are a kind of ring-shaped snack food popular in many countries, which are usually deep fried from flour doughs. ',
        receipeLink: 'https://sallysbakingaddiction.com/how-to-make-homemade-glazed-doughnuts/',
        category: 'Dessert'
      },
      {
        name: 'Chocolate Chip Cookie',
        imageUrl: 'https://example.com/images/chocolate_chip_cookie.jpg',
        Summary: 'Ultra-thick Bakery Style Chocolate Chip Cookies feature golden brown edges with gooey centers. ',
        receipeLink: 'https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/',
        category: 'Dessert'
      },
      {
        name: 'Macaron',
        imageUrl: 'https://example.com/images/macaron.jpg',
        Summary: 'Macaron a sweet and delicate French meringue cookies made with ground almonds.',
        receipeLink: 'https://sugarspunrun.com/french-macaron-recipe/',
        category: 'Dessert'
      },
      {
        name: 'Strawberry Shortcake',
        imageUrl: 'https://example.com/images/strawberry_shortcake.jpg',
        Summary: 'A tender vanilla cake filled with layers of whipped cream frosting and juicy strawberries.',
        receipeLink: 'https://cooking.nytimes.com/recipes/11823-strawberry-shortcake',
        category: 'Dessert'
      },
      {
        name: 'Arrabiata Pasta',
        imageUrl: 'https://example.com/images/arrabiata_pasta.jpg',
        Summary: 'Penne arrabbiata - spicy Italian pasta dish that packs a punch! Excellent quick meal, with a garlic chilli Arrabbiata sauce.',
        receipeLink: 'https://www.recipetineats.com/penne-all-arrabbiata-spicy-tomato-pasta/',
        category: 'Snacks'
      },
      {
        name: 'Margherita Pizza',
        imageUrl: 'https://example.com/images/margherita_pizza.jpg',
        Summary: 'Margherita pizza is a classic. Nothing fancy. Just dough, tomato sauce, mozzarella, fresh basil. Thats it!',
        receipeLink: 'https://cookieandkate.com/margherita-pizza-recipe/',
        category: 'Snacks'
      },
      {
        name: 'Nachos',
        imageUrl: 'https://example.com/images/nachos.jpg',
        Summary: 'These classic Tex-Mex nachos are loaded to the max with cheese,  refried beans, guacamole, and salsa. ',
        receipeLink: 'https://www.simplyrecipes.com/recipes/nachos/',
        category: 'Snacks'
      },
      {
        name: 'French Fries',
        imageUrl: 'https://example.com/images/french_fries.jpg',
        Summary: 'A simple side dish to snack on.',
        receipeLink: 'https://www.recipetineats.com/french-fries/',
        category: 'Snacks'
      },
    ],
  });

  async function main() {
    for (const foodItem of foodItemsData) {
      await prisma.foodItem.upsert({
        where: { name: foodItem.name },
        update: {},
        create: foodItem,
      });
}
  console.log('Food items data entered.');

    await prisma.$transaction([
        prisma.foodItem.update({
            where: { id: 1 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 2 }, { id: 4 }, {id: 5}, { id: 7 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 2 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, {id: 5}, { id: 7 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 3 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 2 }, { id: 4 }, {id: 5}] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 4 },  
            data: {
            cafes: { connect: [{ id: 4 }, { id: 5 }, { id: 7 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 5 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 7 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 5 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },{ id: 6 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 6 },  
            data: {
            cafes: { connect: [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 7 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 4 }, { id: 6 }, { id: 7 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 8 },  
            data: {
            cafes: { connect: [{ id: 2 }, { id: 3 }, { id: 4 }, { id: 6 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 9 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 10 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 5 }] },
            },
        }),
    
        prisma.foodItem.update({
            where: { id: 11 },  
            data: {
            cafes: { connect: [{ id: 3 }, { id: 4 }, { id: 7 }] },
            },
        },
    
        prisma.foodItem.update({
            where: { id: 12 },  
            data: {
            cafes: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] },
            },
        }),
    
    )];
        console.log('Food items linked to cafes.');    
    
  }

  
main() 
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
