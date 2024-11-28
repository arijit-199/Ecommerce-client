import './App.css';
import { Routes, Route, BrowserRouter } from "react-router";
import { Outlet } from "react-router-dom";
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';



function HomeLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}






export default App;
