const header1 = `font-semibold text-[#212529] font-general uppercase text-[9rem]`;

function Home() {
  return (
    <header
      id="home"
      className="w-10/12 mx-auto min-h-screen flex items-center"
    >
      <div className="flex items-center justify-center p-10">
        <div className="text-center mt-18">
          <h1 className={header1}>Jhon Michael Abbas</h1>
          <span className="uppercase text-[#6c757d]">Frontend Engineer</span>
        </div>
      </div>
    </header>
  );
}

export default Home;
