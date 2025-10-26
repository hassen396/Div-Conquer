import  useDocumentTitle  from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");

  return (
    <div>
      <p className="bg-amber-600">the real home</p>
    </div>
  );
};

export default Home;
