import "./App.css";
import { Header } from "./components";
import { MainContainer } from "./components";
import { CreateContainer } from "./components";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/stateProvider";
import { getAllItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    const response = await getAllItems();
    // console.log(response);
    dispatch({
      type: actionType.SET_FOOD_ITEMS,
      foodItems: response,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4  w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
