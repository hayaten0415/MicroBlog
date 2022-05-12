import Head from "next/head";
import { NextPage } from 'next';
import Image from "next/image";

const name = "hayaten";
const siteTitle = "Blog";

type Props = {
  children?: React.ReactNode;
}

const Layout: NextPage<Props> = ({children} : Props) => {
  return (
    <div className="container mx-xl py-4 px-0 mt-12 mx-auto mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col items-center">
        <Image
          className="borderCircle"
          src="/images/profile.png"
          alt="Profile"
          width={200}
          height={200}
        />
        <h1 className="heading2Xl">{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;