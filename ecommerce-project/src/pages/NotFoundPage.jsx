import Header from "../components/Header";
import notFound from "../assets/images/404.jpeg";

const NotFoundPage = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <div className="notFound">
        <img src={notFound} alt="Not Found" />
      </div>
    </>
  );
};

export default NotFoundPage;
