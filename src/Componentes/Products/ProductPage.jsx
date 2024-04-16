import React from "react";
import { useParams } from 'react-router-dom';
import "./ProductPage.css";
import productsData from './productsData';

const ProductPage = () => {
    const { productId } = useParams(); // Obtenha o productId da URL
    const product = productsData[productId]; // Busque os dados do produto com base no productId
    console.log(product.imageUrl)
    // Verifique se o produto foi encontrado
    if (!product) {
        return <p>Produto não encontrado.</p>;
    }

    return (
        <div className="section-product">
            <div className="product-window">
                <img
                    className="img-product-window"
                    src={product.imageUrl} // Use `product.imageUrl` para a imagem do produto
                    alt={product.name} // Use `product.name` para o alt text
                    width="450"
                    height="340"
                />
                <div className="description">
                    <h2 className="title-product">{product.name}</h2> {/* Use `product.name` para o título */}
                    <p className="text-description">{product.description}</p> {/* Use `product.description` para a descrição */}
                    <button className="btn-buy" type="button">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
