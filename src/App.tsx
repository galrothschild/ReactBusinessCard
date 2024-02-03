import CardsPage from "./cards/pages/CardsPage";
import Header from "./layout/components/header/Header";
import Router from "./routes/Router";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <CardsPage />
    </div>
  );
}

export default App;
