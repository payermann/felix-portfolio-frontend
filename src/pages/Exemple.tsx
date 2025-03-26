const Exemple = () => {
  return (
    <div>
      <div className="bg-blue-500 text-white flex items-center justify-center">
        <h1>Это страница с другим шаблоном</h1>
      </div>

      <nav>
        <a href="/" className="mr-4">
          Главная
        </a>
        <a href="/about" className="mr-4">
          О нас
        </a>
        <a href="/exemple">Пример</a>
      </nav>
    </div>
  );
};

export default Exemple;
