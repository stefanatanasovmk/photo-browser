import { BrowserRouter, Route, Routes } from "react-router-dom";
import Images from "./Images";
import Image from "./Image";
import ErrorView from "./ErrorView";
function App() {
  return (
    <div style={body}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Images />} />
          <Route path="/image/:id" element={<Image />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const body: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#ebebeb",
  minHeight: "100vh",
};

export default App;
