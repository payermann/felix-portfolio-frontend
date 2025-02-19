import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const API = "https://api.felix-portfolio.de/items";
// const API_LOCAL = "http://localhost:80/api/items";

interface Item {
  name: string;
  img: string;
}

function App() {
  const [items, setItems] = useState<Item[] | null>(null);

  const fetchItems = () => {
    axios.get<Item[]>(API).then((r) => {
      setItems(r.data);
    });
  };

  useEffect(() => {
    fetchItems();
    const interval = setInterval(() => {
      fetchItems();
    }, 2000);
    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, []); // Добавлен закрывающий массив зависимостей

  return (
    <>
      {items &&
        items.map((item) => {
          return (
            <span
              style={{ padding: "0px 4px" }}
              key={item.name}
              className="roll-out"
            >
              <img
                src={item.img}
                alt="logo"
                width="16"
                style={{ padding: "0px 5px" }}
              ></img>
              <span>{item.name}</span>
            </span>
          );
        })}
    </>
  );
}

export default App;
