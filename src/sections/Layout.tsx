import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1>Общее меню</h1>
        <nav>
          <a href="/" className="mr-4">
            Главная
          </a>
          <a href="/about" className="mr-4">
            О нас
          </a>
          <a href="/exemple">Пример</a>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Общий футер</p>
      </footer>
    </div>
  );
};

export default Layout;
