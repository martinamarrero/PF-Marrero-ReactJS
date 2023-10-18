import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ id, name, img, price, stock, onDetailClick }) => {
    
    return (
        <article className="CardItem item-card">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`}>
                    <p className="Option">
                        Ver detalle
                    </p>
                </Link>
            </footer>
        </article>
    )
}

export default Item