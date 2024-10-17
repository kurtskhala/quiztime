import Header from "../../components/Header/Header";

const DefaultLayout = ({children}) => {
  return (
    <>
      <Header />
      {
        children
      }
    </>
  );
};

export default DefaultLayout;
