import HomeLayout from "../components/HomeLayout";
import Footer from "../components/Footer";
import Head from "next/head";

type MainLayoutProps = {
  title?: string;
  children: JSX.Element | JSX.Element[];
};

const MainLayout = (props: MainLayoutProps) => {
  const { title, children } = props;

  return (
    <div className="Layout">
      <Head>
        <title>{title ?? "miles"}</title>
      </Head>
      <HomeLayout />
      <div className="Content">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
