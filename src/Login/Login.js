import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
    Container,
    Col,
    Row,
    Button,
    Form,
    InputGroup,
    Card,
} from "react-bootstrap";


const Login = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem("role")
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (role) navigate("/productlistings")
    }, [role])

    function handleLogin(event) {
        event.preventDefault();
        if (email === "mike@gmail.com" && password === "123456") {
            localStorage.setItem("role", "leader")
            navigate('/productlistings')
        }
        else if (email === "omair@gmail.com" && password === "123456") {
            localStorage.setItem("role", "entrepreneur")
            navigate('/productlistings')
        }
        else if (email === "abubaker@gmail.com" && password === "123456") {
            localStorage.setItem("role", "member")
            navigate('/productlistings')
        }
        else {
            alert("No user exists")
        }
    }

    function isValidEmail(text = "") {
        let pattern = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return pattern.test(text);
    }

    function handleEmailChange(event) {
        let _email = event.target.value;
        setEmail(_email);
        setEmailValid(isValidEmail(_email));
        setFormSubmitted(false);
    }

    function handlePasswordChange(event) {
        let password = event.target.value;
        setPassword(password);
        setPasswordValid(!!password.length);
        setFormSubmitted(false);
    }

    function toggleVisiblePassword() {
        setShowPassword(!showPassword);
    }

    return (
        <Container className="Login mt-6 mb-5">
            <Row>
                <Col
                    xl={{ span: 4, offset: 4 }}
                    lg={{ span: 4, offset: 4 }}
                    md={{ span: 6, offset: 3 }}
                    sm={{ span: 8, offset: 2 }}
                >
                    <Card className="border shadow-sm">
                        <Card.Body>
                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        autoComplete="email"
                                        onChange={handleEmailChange}
                                        isInvalid={!emailValid && formSubmitted}
                                        placeholder="Enter email"
                                        autoFocus
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        This should be a valid email address
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            autoComplete="current-password"
                                            onChange={handlePasswordChange}
                                            isInvalid={!passwordValid && formSubmitted}
                                            placeholder="Password"
                                        />
                                        <Button
                                            variant="light"
                                            className="border-top border-end border-start border-bottom"
                                            onClick={toggleVisiblePassword}
                                        >
                                            {showPassword ? (
                                                <span className="material-icons-outlined">visibility_off</span>
                                            ) : (
                                                <span className="material-icons-outlined">visibility</span>
                                            )}
                                        </Button>
                                    </InputGroup>
                                    <Form.Control.Feedback type="invalid">
                                        This is required
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-grid gap-2 mb-3">
                                    <Button type="submit" color="primary" className="text-white">
                                        Sign in
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;