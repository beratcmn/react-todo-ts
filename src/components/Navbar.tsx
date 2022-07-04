function Navbar() {
  return (
    <nav className="w-full h-16 bg-green-500 sticky top-0">
      <div className="max-w-7xl h-full mx-auto flex flex-row items-center justify-between">
        <h1 className="text-white text-2xl font-semibold">
          Another TODO App{" "}
          <span className="font-normal text-lg">by Berat Çimen</span>
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
