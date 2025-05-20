import { useState, useEffect } from "react";
import Card from './Card'; // Asegúrate de importar el componente Card

function ProductGrid() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []); // No olvides el array de dependencias vacío
    
    return (
        <div key="product-grid" className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">      
            {products.map(product => (
                <Card 
                    key={product.id} 
                    title={product.title} 
                    paragraph={product.description} 
                    image={product.image} 
                    model={product.price}
                />
            ))}
        </div>
    );
}

export default ProductGrid;