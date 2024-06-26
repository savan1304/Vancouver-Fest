import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.festival.createMany({
    data: [
      {
        id: 1,
        name: 'Ice cream Festival',
        tagline: 'Festival of icecream for summer.',
        startDate: new Date('2024-07-12'),
        endDate: new Date('2024-07-18'),
        Location: 'Vancouver',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/4cgJEMe',
      },
      {
        id: 2,
        name: 'Mango Festival',
        tagline: 'Festival for fresh mangoes',
        startDate: new Date('2024-07-15'),
        endDate: new Date('2024-07-19'),
        Location: 'Burnaby',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/4ciZAO4',
      },
      {
        id: 3,
        name: 'Autumn Festival',
        tagline: 'Festival of red and gold',
        startDate: new Date('2024-09-5'),
        endDate: new Date('2024-09-19'),
        Location: 'Richmond',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/4chTH3F',
      },
      {
        id: 4,
        name: 'Festival of Light',
        tagline: 'Festival for celebration of light with amazing fireworks',
        startDate: new Date('2024-07-20'),
        endDate: new Date('2024-07-27'),
        Location: 'Vancouver',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/3zgjn2a',
      },
      {
        id: 5,
        name: 'Music Festival',
        tagline: 'Annual Music Festival',
        startDate: new Date('2024-08-15'),
        endDate: new Date('2024-08-19'),
        Location: 'Coquitlam',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/3VZ6e6H',
      },
      {
        id: 6,
        name: 'Summer Food Festival',
        tagline: 'Festival for fresh mangoes',
        startDate: new Date('2024-08-3'),
        endDate: new Date('2024-08-4'),
        Location: 'Langley',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/45Fiqwo',
      },
      {
        id: 7,
        name: 'Food Truck Fest',
        tagline: 'First ever Food Truck Fest in Vancouver',
        startDate: new Date('2024-07-15'),
        endDate: new Date('2024-07-19'),
        Location: 'Burnaby',
        numberOfAttendees: 0,
        imageUrl: 'https://bit.ly/3L0PcyE',
      }
    ],
  });
  console.log('Festivals data entered.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });