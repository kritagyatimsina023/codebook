import { Footer, Header } from "./components";
import useTitle from "./hooks/useTitle";
import AllRoutes from "./routes/AllRoutes";

function App() {
  useTitle("E-book");
  return (
    <div className="dark:bg-slate-800">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
