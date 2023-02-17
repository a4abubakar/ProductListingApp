import { Container, Col, Row, Card } from "react-bootstrap"
import { UsersData } from "../../UsersData/UsersData";

const ProductCard = ({ role }) => {
    const currentUserData = UsersData.filter(data => data.role === role)
    const otherUsersData = UsersData.filter(data => data.role !== role)
    const productsData = currentUserData.concat(otherUsersData);
    return (
        <Container>
            <Col xs={12} className="my-5 pb-2">
                <h2 className="text-center text-primary mb-4">Products</h2>
                <Row className="d-flex align-items-stretch">
                    {
                        productsData.map(data => (
                            <Col xs={12} md={4} className="my-5 py-5">
                                <Card className="rounded-0 border-1 h-100 bg-white">
                                    <Card.Body>
                                        <p>Description: {data.description}</p>
                                        <p>Price: {data.price}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Container>
    )
}

export default ProductCard