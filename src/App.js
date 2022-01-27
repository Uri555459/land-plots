import { ArrangementVillage } from "./components/ArrangementVillage/ArrangementVillage";
import { Features } from "./components/Features/Features";
import { Header } from "./components/Header/Header";
import { IndividualOffer } from "./components/IndividualOffer/IndividualOffer";
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
      <IndividualOffer />
      <ArrangementVillage />
    </LayoutDefault>
  );
}

export default App;
