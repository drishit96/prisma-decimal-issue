const prisma = require("./lib/prisma");
const prismaClient = require("@prisma/client");

async function testDecimal() {
  await prisma.user.create({ data: { id: "foo", decimal: 0 } });

  const decimal = new prismaClient.Prisma.Decimal("45125862532574256.2984");
  await prisma.user.upsert({
    create: {
      id: "foo",
      decimal,
    },
    update: {
      decimal: { increment: decimal },
    },
    where: { id: "foo" },
  });

  const user = await prisma.user.findUnique({ where: { id: "foo" } });
  console.log(user?.decimal);
}

testDecimal();
