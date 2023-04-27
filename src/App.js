import { Card, Header, Drawer } from "./components/index";

function App() {
  return (
    <div className="wrapper clear ">
      <Drawer />
      <Header />
      <div className="content p-40 ">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" name="" id="" />
          </div>
        </div>
        <div className="d-flex pt-40   ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
