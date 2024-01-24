import { prisma } from "../lib/prisma";
import { Media } from "@prisma/client";
import { GetServerSideProps } from "next";
import MediaComponent from "../public/module/media";

type Props = {
  media: Media | null;
};

export default function Page(props: Props) {
  return (
<main><MediaComponent mediaUrl={(props.media && props.media.url) || 'defaultUrl.com'} /></main>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    await prisma.$connect();

    const media = await prisma.media.findFirst();

    return {
      props: {
        media,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        media: null,
      },
    };
  } finally {
    await prisma.$disconnect();
  }
};
