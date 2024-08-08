import Image from "next/image";
import Link from "next/link";

const Header = () => {
  
  return (
    <header className="app-header flex justify-between items-center pl-5 pr-10">
      <Image src='/favicon.png' width={80} height={80} className="app-logo" alt="logo" />
      <div className="nav-items">
        <nav>
          <ul className="flex">
            <li className="p-2">
              <Link href="/">Home</Link>
            </li>
            <li className="p-2">
              <Link href="/about">About</Link>
            </li>
            <li className="p-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
