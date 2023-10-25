import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import ExempleJSX from './components/02-communication-inter-composants/ExempleJSX';
import ControlledForm from './components/02-communication-inter-composants/ControlledForm';
import Todo from './components/02-communication-inter-composants/todo/Todo';
import SwapiCharacter from './components/03-interaction-serveur/SwapiCharacter';
import ClassCounter from './components/04-hooks/ClassCounter';
import DemoUseEffect from './components/04-hooks/DemoUseEffect';
// import ExempleComposant from "./components/01-components/ExempleComposant";
// import Calculatrice from "./components/01-components/Calculatrice";
// import Parent from "./components/02-communication-inter-composants/Parent";
// import Binding from "./components/02-communication-inter-composants/Binding";
// import CycleDeVie from './components/02-communication-inter-composants/CycleDeVie';
import Users from './components/04-hooks/tp-users/Users'
import ErrorBoundary from './components/05-gestion-des-erreurs/ErrorBoundary';
import ThemeSwitcher from './components/06-context/ThemeSwitcher';
import ThemeContext from './components/06-context/ThemeContext';
import Liste from "./components/07-hoc/Liste";

function App() {
  const [theme, setTheme] = useState("light");
  return (
  //  <ExempleComposant></ExempleComposant>
  // <Calculatrice></Calculatrice>
  // <Parent></Parent>
  // <Binding></Binding>
  // <CycleDeVie></CycleDeVie>
  // <ExempleJSX></ExempleJSX>
  // <ControlledForm></ControlledForm>
  // <Todo></Todo>
  //<SwapiCharacter></SwapiCharacter>
  //<ClassCounter></ClassCounter>
  //<DemoUseEffect></DemoUseEffect>
  // <ErrorBoundary>
  //     <Users></Users>
  // </ErrorBoundary>
  // <ThemeContext.Provider value={{theme, setTheme}}>
  //   <ThemeSwitcher></ThemeSwitcher>
  // </ThemeContext.Provider>
  <Liste></Liste>

  );
}

export default App;
