import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ setIsLogin }) => {
    return (
        <div className="pb-5">
            <Navbar
                bg="primary"
                variant="dark"
                expand="lg"
                fixed="top"
                className="border-bottom MainHeader"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/productlistings">
                        <span className="d-flex  align-items-center justify-content-center">
                            <span className="pe-2">
                                <span className="text-center">
                                    Product Listings{" "}
                                </span>{" "}
                            </span>
                        </span>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Button className="text-white" onClick={() => { localStorage.removeItem("role"); setIsLogin(false) }}>Log Out</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header