import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
export default function Card(){
    const {id}=useParams();
    const [data, setData]= useState(null);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[id]);
    return(
        <>
            <div className="detail-header"><Link className="back-link" to="/products">← Back to products</Link></div>
            {data && (
                <main className="page detail-page">
                    <img className="detail-image" src={data.thumbnail} alt={data.title}/>
                    <section className="detail-content">
                        <span className="eyebrow">Product details</span>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <span className="price">${data.price}</span>
                    </section>
                </main>
            )}
        </>
    )
}