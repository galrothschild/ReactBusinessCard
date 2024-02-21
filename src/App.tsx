import { useEffect } from "react";
import Layout from "./layout/Layout";
import Router from "./routes/Router";

function App() {
  // useEffect(() => {
  //   console.log = () => {};
  //   console.warn = () => {};
  //   console.error = () => {};
  // });
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
