import notFound from "../assets/images/404.jpeg";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <img src={notFound} alt="Not Found" />
    </div>
  );
};

export default NotFoundPage;
