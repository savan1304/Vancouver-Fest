import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.festival.createMany({
    data: [
      {
        name: 'Ice cream Festival',
        tagline: 'Festival of icecream for summer.',
        startDate: new Date('2024-06-28'),
        endDate: new Date('2024-06-29'),
        Location: 'Vancouver',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/4cgJEMe',
      },
      {
        name: 'Mango Festival',
        tagline: 'Festival for fresh mangoes',
        startDate: new Date('2024-06-29'),
        endDate: new Date('2024-06-30'),
        Location: 'Burnaby',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/4ciZAO4',
      },
      {
        name: 'Autumn Festival',
        tagline: 'Festival of red and gold',
        startDate: new Date('2024-07-5'),
        endDate: new Date('2024-07-6'),
        Location: 'Richmond',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/4chTH3F',
      },
      {
        name: 'Festival of Light',
        tagline: 'Festival for celebration of light with amazing fireworks',
        startDate: new Date('2024-07-2'),
        endDate: new Date('2024-07-7'),
        Location: 'Vancouver',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/3zgjn2a',
      },
      {
        name: 'Music Festival',
        tagline: 'Annual Music Festival',
        startDate: new Date('2024-06-28'),
        endDate: new Date('2024-06-30'),
        Location: 'Coquitlam',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/3VZ6e6H',
      },
      {
        name: 'Summer Food Festival',
        tagline: 'Festival for fresh mangoes',
        startDate: new Date('2024-07-3'),
        endDate: new Date('2024-07-4'),
        Location: 'Burnaby',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/45Fiqwo',
      },
      {
        name: 'Food Truck Fest',
        tagline: 'First ever Food Truck Fest in Vancouver',
        startDate: new Date('2024-07-5'),
        endDate: new Date('2024-07-9'),
        Location: 'Burnaby',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/3L0PcyE',
      }
    ],
  });
  console.log('Festivals data entered.');

  const festivalCafes = await prisma.festival.findMany({
    include: {
      cafes: {
        include: {
          foodItems: true
        }
      }
    }
  });

  for (const festival of festivalCafes) {
    const uniqueFoodItems = new Set();
    festival.cafes.forEach(cafe => {
      cafe.foodItems.forEach(foodItem => {
        uniqueFoodItems.add(foodItem.id);
      });
    });

    await prisma.festival.update({
      where: { id: festival.id },
      data: {
        foodItems: { connect: Array.from(uniqueFoodItems).map(id => ({ id })) }
      }
    });
  }

  console.log('Food items linked to festivals through cafes.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });