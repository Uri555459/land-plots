import { useState } from "react";
import { ArrangementVillage } from "./components/ArrangementVillage/ArrangementVillage";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { IndividualOffer } from "./components/IndividualOffer/IndividualOffer";
import { Infrastructure } from "./components/Infrastructure/Infrastructure";
import { Modal } from "./components/Modal/Modal";
import { Offer } from "./components/Offer/Offer";
import { SectitonDescr } from "./components/SectitonDescr/SectitonDescr";
import { LayoutDefault } from "./layouts/LayoutDefault";
import { SeeLive } from "./SeeLive/SeeLive";
import { ModalContext } from './context/ModalContext/ModalContext'

function App() {
  const [modalToggle, setModalToggle] = useState(false);
  const [formVisinble, setFormVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    setFormVisible(!formVisinble);
  };

  const formPolicyHandler = () => {
    setIsChecked(!isChecked)
  }

  const modalClose = () => {
    setModalToggle(!modalToggle);
    setFormVisible(true)
  };
  const modalOpen = () => {
    setModalToggle(!modalToggle);
  };


  return (
    <LayoutDefault>
      <ModalContext.Provider value={{ modalToggle, modalClose, modalOpen, formSubmit, formVisinble, formPolicyHandler, isChecked }}>
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
        <Modal />
      </ModalContext.Provider>
    </LayoutDefault>
  );
}

export default App;
