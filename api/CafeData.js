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
        festivalId: 1  
      },
      {
        name: 'Commercial Street Cafe',
        hours: '11 AM to 11 PM',
        address: '3599 Commercial Street',
        priceRange: '10$-15$',
        description: 'Low - key setup for daytime eats & coffee',
        contactEmail: 'commercial@gmail.com',
        festivalId: 1  
      },
      {
        name: 'Liberte Cafe & REstaurant',
        hours: '10 AM to 9 PM',
        address: '3670 Vanness Ave',
        priceRange: '10$-20$',
        description: 'Classy cafe & bakery with Filipino meals',
        contactEmail: 'liberte@gmailcom',
        festivalId: 3  
      },
      {
        name: 'Wicked Cafe',
        hours: '10 AM to 12 PM',
        address: '1399 W 7th Ave',
        priceRange: '10$-25$',
        description: 'Fair-trade coffee & casual light meals',
        contactEmail: 'wickedcafe@gmail.com',
        festivalId: 4  
      },
      {
        name: 'Root Cafe',
        hours: '4 PM to 12 PM',
        address: '6502 Main St',
        priceRange: '10$-15$',
        description: 'Canadian fare in a bright space',
        contactEmail: 'root@gmail.com',
        festivalId: 5  
      },
      {
        name: 'Bel Cafe ',
        hours: '10 AM to 11 PM',
        address: '801 W Georgia St',
        priceRange: '10$-25$',
        description: 'Sleek counter serve for coffee & sweets',
        contactEmail: 'bel@gmail.com',
        festivalId: 6  
      },
      {
        name: 'Nelson the Seagull cafe',
        hours: '10 AM to 12 PM',
        address: '315 Carrall St',
        priceRange: '10$-15$',
        description: 'Bakery-cafe with breakfast & lunch fare',
        contactEmail: 'nelson@gmail.com',
        festivalId: 7  
      }
    ],
  });
  console.log('Cafes data entered.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
