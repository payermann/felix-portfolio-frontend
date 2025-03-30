import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Menu() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-xl dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow items-center px-2"
          >
            <ul>
              <li>
                <Link
                  to="/e-commerce"
                  className="font-bold lg:text-xl px-8 text-xl btn btn-ghost"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <a href="#contact" className="px-4 text-xl btn btn-ghost">
                  Contact me
                </a>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </div>
        <Link
          to="/"
          className="font-bold lg:text-2xl px-8 text-2xl text-primary"
        >
          Felix Portfolio
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link to="/e-commerce" className="px-4 text-xl btn btn-ghost">
              E-commerce
            </Link>
          </li>
          <li>
            <a href="#contact" className="px-4 text-xl btn btn-ghost">
              Contact me
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </div>
  );
}
