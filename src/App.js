import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login/Login";
import ProductListing from "./ProductListing/ProductListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/productlistings" element={<ProductListing />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

const NoMatch = () => (
  <div className="Main">
    <Container>
      <div className="MainContent text-center pt-5">
        Hmm… we’re sorry, we can’t seem to find the page you are looking for.
        <br />
        You might like to try going back to our <Link to="/">Login</Link>
        page.
      </div>
    </Container>
  </div>
);

export default App;
