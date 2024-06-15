import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Add } from "./components/Add";
import { Home } from "./components/Home";
import { Edit } from "./components/Edit";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/add" element={<Add />}></Route>
                <Route path="/edit/:id" element={<Edit />}></Route>
            </Routes>
        </BrowserRouter >
    )
}

export default App;