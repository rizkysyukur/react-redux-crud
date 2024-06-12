import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import add
//import home
// import edit
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                {/* Home */}
                {/* Add */}
                {/* Edit */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;