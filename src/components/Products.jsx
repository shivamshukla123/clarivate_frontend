import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);


    return (
        <div className="container">
            <h2>Product List</h2>

            <div className="table-container">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock Quantity</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.ProductId}>
                                <td>{product.ProductName}</td>
                                <td>{product.Description}</td>
                                <td>${product.Price}</td>
                                <td>{product.StockQuantity}</td>
                                <td>{product.category?.CategoryName || "No Category"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
