import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.cafe.createMany({
    data: [
      {
        name: 'Milk & Sugar Cafe',
        hours: '10 AM to 12 PM',
        address: '3365 Kingsway',
        priceRange: '10$-15$',
        description: 'Bubble Tea Specialist with breakfast',
        contactEmail: 'milk@gmail.com',
        imageUrl: 'https://bit.ly/4bii2oY',
      },
      {
        name: 'Commercial Street Cafe',
        hours: '11 AM to 11 PM',
        address: '3599 Commercial Street',
        priceRange: '10$-15$',
        description: 'Low - key setup for daytime eats & coffee',
        contactEmail: 'commercial@gmail.com',
        imageUrl: 'https://bit.ly/3XKm3iV',
      },
      {
        name: 'Liberte Cafe & Restaurant',
        hours: '10 AM to 9 PM',
        address: '3670 Vanness Ave',
        priceRange: '10$-20$',
        description: 'Classy cafe & bakery with Filipino meals',
        contactEmail: 'liberte@gmailcom',
        imageUrl: 'https://bit.ly/3zbi2cP',
      },
      {
        name: 'Wicked Cafe',
        hours: '10 AM to 12 PM',
        address: '1399 W 7th Ave',
        priceRange: '10$-25$',
        description: 'Fair-trade coffee & casual light meals',
        contactEmail: 'wickedcafe@gmail.com',
        imageUrl: 'https://bit.ly/3xnGNSR',
      },
      {
        name: 'Root Cafe',
        hours: '4 PM to 12 PM',
        address: '6502 Main St',
        priceRange: '10$-15$',
        description: 'Canadian fare in a bright space',
        contactEmail: 'root@gmail.com',
        imageUrl: 'https://bit.ly/3Xzvl0Z',
      },
      {
        name: 'Bel Cafe ',
        hours: '10 AM to 11 PM',
        address: '801 W Georgia St',
        priceRange: '10$-25$',
        description: 'Sleek counter serve for coffee & sweets',
        contactEmail: 'bel@gmail.com',
        imageUrl: 'https://bit.ly/4eFfILt',
      },
      {
        name: 'Nelson the Seagull cafe',
        hours: '10 AM to 12 PM',
        address: '315 Carrall St',
        priceRange: '10$-15$',
        description: 'Bakery-cafe with breakfast & lunch fare',
        contactEmail: 'nelson@gmail.com',
        imageUrl: 'https://bit.ly/45NzWi7',
      }
    ],
  });
  console.log('cafes data entered.');

  await prisma.cafe.update({
    where: { id: 1 },  
    data: {
      festivals: { connect: [{ id: 1 }, { id: 2 }] },
    },
  });

  await prisma.cafe.update({
    where: { id: 2 }, 
    data: {
      festivals: { connect: [{ id: 2 }] },
    },
  });

  await prisma.cafe.update({
    where: { id: 3 },  
    data: {
      festivals: { connect: [{ id: 3 }, { id: 4 }] },
    },
  });

  await prisma.cafe.update({
    where: { id: 4 }, 
    data: {
      festivals: { connect: [{ id: 2 }] },
    },
  });

  await prisma.cafe.update({
    where: { id: 5 }, 
    data: {
      festivals: { connect: [{ id: 7 }, { id: 1 }, { id: 3 }] },
    },
  });
  await prisma.cafe.update({
    where: { id: 6 }, 
    data: {
      festivals: { connect: [{ id: 7 }, { id: 4 }, { id: 5 }] },
    },
  });
  await prisma.cafe.update({
    where: { id: 7 }, 
    data: {
      festivals: { connect: [{ id: 7 }, { id: 5 }] },
    },
  });

  console.log('cafes linked to festivals.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
