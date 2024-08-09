import Image from "next/image";
import Link from "next/link";

const Header = () => {
  
  return (
    <header className="bg-slate-600 px-4 mb-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <Image src='/favicon.png' width={80} height={80} className="app-logo" alt="logo" />
      <div className="nav-items">
        <nav>
          <ul className="flex">
            <li className="p-2 text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
              <Link href="/">Home</Link>
            </li>
            <li className="p-2 text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
              <Link href="/about">About</Link>
            </li>
            <li className="p-2 text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
