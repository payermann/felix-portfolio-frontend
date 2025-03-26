import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://api.felix-portfolio.de/items";
// const API = "http://localhost:80/api/items";

interface Item {
  name: string;
  img: string;
}

function Home() {
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
    return () => clearInterval(interval);
  }, []);
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
export default Home;
