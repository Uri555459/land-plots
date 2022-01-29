import { ArrangementVillage } from "./components/ArrangementVillage/ArrangementVillage";
import { Features } from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { IndividualOffer } from "./components/IndividualOffer/IndividualOffer";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import { Offer } from "./components/Offer/Offer";
import { SectitonDescr } from "./components/SectitonDescr/SectitonDescr";
import { LayoutDefault } from "./layouts/LayoutDefault";
import SeeLive from "./SeeLive/SeeLive";

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
      <SeeLive />
      <Footer />
    </LayoutDefault>
  );
}

export default App;
