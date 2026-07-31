import "./styles/variables.css";
import "./styles/shell.css";

import {
 BrowserRouter,
 Routes,
 Route,
} from "react-router-dom";

import AppShell from "./layout/AppShell";

import Workspace from "./pages/Workspace";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Analytics from "./pages/Analytics";

export default function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route element={<AppShell />}>

     <Route
      path="/"
      element={<Workspace />}
     />

     <Route
      path="/library"
      element={<Library />}
     />

     <Route
      path="/search"
      element={<Search />}
     />

     <Route
      path="/analytics"
      element={<Analytics />}
     />

    </Route>

   </Routes>

  </BrowserRouter>

 );

}