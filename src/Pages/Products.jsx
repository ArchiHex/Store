import Header from "../Component/Header.jsx";
import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
export default function Products(){
    const navigate = useNavigate();
    const [produits, setProduits]= useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data=>setProduits(data.products))
    },[])
    return (
        <>
            <Header/>
            <main className="page">
            <div className="page-heading">
                <span className="eyebrow">The collection</span>
                <h1>Shop products</h1>
                <p>Discover something new from our latest picks.</p>
            </div>
            <div className="container product-grid">
                {produits.map((produit)=>(
                    <div className="card" key={produit.id}>
                        <img src={produit.thumbnail} alt="Product Image"/>
                        <div className="card-content">
                            <h2>{produit.title}</h2>
                            <p className="product-description">{produit.description}</p>
                            <div className="card-footer">
                                <span className="price">${produit.price}</span>
                                <button className="button button-primary" onClick={()=>navigate(`/products/${produit.id}`)}>View item</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </main>
        </>
    )
}