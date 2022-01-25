import { Header } from "./components/Header/Header";
import { Offer } from "./components/Offer/Offer";
import { LayoutDefault } from "./layouts/LayoutDefault";

function App() {
  return (
    <LayoutDefault>
      <Header />
      <Offer />
    </LayoutDefault>
  );
}

export default App;
