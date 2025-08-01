import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="w-full h-14 p-6 md:p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-gray-600 md:hidden">ToDone</h1>
        <button type="button" className="md:hidden">
          {" "}
          <Menu />{" "}
        </button>
      </div>
    </header>
  );
}

export default Header;
