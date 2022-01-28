import { ArrangementVillage } from "./components/ArrangementVillage/ArrangementVillage";
import { Features } from "./components/Features/Features";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { IndividualOffer } from "./components/IndividualOffer/IndividualOffer";
import Infrastructure from "./components/Infrastructure/Infrastructure";
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
      <Gallery />
      <Infrastructure />
    </LayoutDefault>
  );
}

export default App;
