import { Features } from "./components/Features/Features";
import { Header } from "./components/Header/Header";
import { Offer } from "./components/Offer/Offer";
import { SectitonDescr } from "./components/SectitonDescr/SectitonDescr";
import { LayoutDefault } from "./layouts/LayoutDefault";

function App() {
  return (
    <LayoutDefault>
      <Header />
      <Offer />
      <SectitonDescr />
      <Features />
    </LayoutDefault>
  );
}

export default App;
