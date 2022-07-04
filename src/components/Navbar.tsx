function Navbar() {
  return (
    <nav className="w-full h-16 bg-green-500 sticky top-0 z-10">
      <div className="max-w-7xl px-10 h-full mx-auto flex flex-row items-center justify-between">
        <h1 className="text-white text-base xl:text-2xl font-semibold">
          Another TODO App <br className="block xl:hidden" />
          <span className="font-normal text-sm xl:text-lg">
            by Berat Çimen
          </span>
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
