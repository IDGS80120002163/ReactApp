import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Profile from "./components/client/profile/Profile"
import Product from "./components/client/product/Product"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
