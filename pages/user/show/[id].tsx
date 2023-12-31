import { HeadlessShowInferencer } from "@refinedev/inferencer/headless";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]";

export default function UserShow() {
  return <HeadlessShowInferencer />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: `/login?to=${encodeURIComponent("/user")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
