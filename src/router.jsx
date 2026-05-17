import { createBrowserRouter } from "react-router-dom";

import App from "./App.js";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        "path": "/",
        "element": <App />,
        "children": [
            {
                "index": true,
                "element": <Home />,
            },
            {
                "path": "/about",
                "element": <About />
            },
            {
                "path": "/resume",
                "element": <Resume />
            },
            {
                "path": "/projects",
                "element": <Projects />
            },
            {
                "path": "/contact",
                "element": <Contact />
            },
            {
                "path": "*",
                "element": <NotFound />
            },
        ]
    }
]);

export default router;