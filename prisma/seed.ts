import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function createMedia(url: string, title: string) {
  const media = await prisma.media.create({
    data: {
      url,
      title,
    },
  });
  console.log("Created media:", media);
}

createMedia('"https://dutchie.com/kiosks/arcanna1"', "Media")
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
