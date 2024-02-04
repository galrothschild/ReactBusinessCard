import Layout from "./layout/Layout";
import Router from "./routes/Router";


function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
