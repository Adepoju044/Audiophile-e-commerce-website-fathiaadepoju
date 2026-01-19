import Header from "./Header";

function PageHeader({ title }) {
  return (
    <div className="bg-black">
      <Header />;
      <header className="bg-black py-8 md:py-22 mb-18">
        <div className="container mx-auto px-7">
          <h1 className="text-white text-3xl font-bold text-center md:text-4xl uppercase">
            {title}
          </h1>
        </div>
      </header>
    </div>
  );
}
export default PageHeader;
