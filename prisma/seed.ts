// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    { firstName: 'Vladislav', lastName: 'Peskov' },
    { firstName: 'Alex', lastName: 'Liberman' },
    { firstName: 'Alice', lastName: 'Cat' },
    { firstName: 'Bob', lastName: 'Dog' },
    { firstName: 'Charlie', lastName: 'Chaplin' },
    { firstName: 'Eve', lastName: 'Mendes' },
    { firstName: 'Frank', lastName: 'Senatra' },
    { firstName: 'Grace', lastName: 'Popper' },
    { firstName: 'Halk', lastName: 'Marvel' },
    { firstName: 'Donald', lastName: 'Trump' },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
