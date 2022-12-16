import { BrowserRouter, Route, Routes } from "react-router-dom";
// 페이지 컴포넌트
import Home from "../pages/Home";
import Detail from "../pages/Detail";

function Router() {
  return (
    // 두개의 페이지 구성
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
