import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../Header/Header"
import ProductCard from "./ProductCard/ProductCard"

const ProductListing = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem("role")
    const [isLogin, setIsLogin] = useState(true)

    useEffect(() => {
        if (!role || !isLogin) navigate("/")
    }, [role, isLogin])

    return (
        <div>
            <Header setIsLogin={setIsLogin} />
            <ProductCard role={role} />
        </div>
    )
}

export default ProductListing