import React, { useState, useEffect } from "react";
import './App.css';
import SuccessButton, {
  DropButton,
  WarnButton,
  InfoButton,
  DropButtonProps,
  NewDropButton
} from './Elements/StyledButton';

import Header from "./Components/Header";


function App() {
  const DISPLAY_LABEL = "Cacher les secrets";
  const HIDDEN_LABEL = "Afficher les secrets";
  const [state, setState] = useState({
    count: 0,
    visible: true,
    label: DISPLAY_LABEL
  });

  useEffect(() => {
    console.log('application effect');
  }, [state]);

  const addToCounter = () => {
    const newCount = state.count + 1;

    setState(prevState => {
      return {
        ...prevState,
        count: newCount
      }
    })
  };

  const dropToCounter = () => {
    const newCount = state.count - 1;

    setState(prevState => {
      return {
        ...prevState,
        count: newCount
      }
    });
  };

  const toggleVisibility = () => {
    setState(prevState => {
      return {
        ...prevState,
        visible: !state.visible,
        label: state.visible ?  HIDDEN_LABEL : DISPLAY_LABEL
      }
    })
  };


  return (
    <div className="App">
      <Header></Header>
      {state.visible ?
        <>
          <h3>{state.count}</h3>
          <SuccessButton onClick={addToCounter}>ajouter</SuccessButton>
          <WarnButton onClick={dropToCounter}>retirer</WarnButton>
          <InfoButton onClick={toggleVisibility}>{state.label}</InfoButton>
        </>
       : <>
          <p>Rien à afficher</p>
          <DropButton onClick={toggleVisibility}>{state.label}</DropButton>
        </>}
      <DropButtonProps background="purple"  color="black" onClick={toggleVisibility}>{state.label}</DropButtonProps>
      <NewDropButton onClick={toggleVisibility}>{state.label}</NewDropButton>
    </div>
  );
}

export default App;
