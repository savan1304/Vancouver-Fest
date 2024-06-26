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
        imageUrl: 'https://app.gemoo.com/share/image-annotation/664408296547057664?codeId=vzaek1E9WboLO&origin=imageurlgenerator&card=664408295225851904',
      },
      {
        name: 'Commercial Street Cafe',
        hours: '11 AM to 11 PM',
        address: '3599 Commercial Street',
        priceRange: '10$-15$',
        description: 'Low - key setup for daytime eats & coffee',
        contactEmail: 'commercial@gmail.com',
        imageUrl: '',
      },
      {
        name: 'Liberte Cafe & REstaurant',
        hours: '10 AM to 9 PM',
        address: '3670 Vanness Ave',
        priceRange: '10$-20$',
        description: 'Classy cafe & bakery with Filipino meals',
        contactEmail: 'liberte@gmailcom',
        imageUrl: '',
      },
      {
        name: 'Wicked Cafe',
        hours: '10 AM to 12 PM',
        address: '1399 W 7th Ave',
        priceRange: '10$-25$',
        description: 'Fair-trade coffee & casual light meals',
        contactEmail: 'wickedcafe@gmail.com',
        imageUrl: '',
      },
      {
        name: 'Root Cafe',
        hours: '4 PM to 12 PM',
        address: '6502 Main St',
        priceRange: '10$-15$',
        description: 'Canadian fare in a bright space',
        contactEmail: 'root@gmail.com',
        imageUrl: '',
      },
      {
        name: 'Bel Cafe ',
        hours: '10 AM to 11 PM',
        address: '801 W Georgia St',
        priceRange: '10$-25$',
        description: 'Sleek counter serve for coffee & sweets',
        contactEmail: 'bel@gmail.com',
        imageUrl: '',
      },
      {
        name: 'Nelson the Seagull cafe',
        hours: '10 AM to 12 PM',
        address: '315 Carrall St',
        priceRange: '10$-15$',
        description: 'Bakery-cafe with breakfast & lunch fare',
        contactEmail: 'nelson@gmail.com',
        imageUrl: '',
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
