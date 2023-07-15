import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import Scroll2Top from "components/Scroll2Top";
import NotFound404 from "pages/NotFound404";
import Post from "pages/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";

export default function AppRoutes() {
  return (
    <>
     <BrowserRouter>
      <Menu />
      <Scroll2Top />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />        
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Rodape />
     </BrowserRouter>
    </>
  );
}
