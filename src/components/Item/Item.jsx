import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ id, name, img, price, stock, onDetailClick }) => {
    const handleDetailClick = () => {
        // Llama a la función de manejo del evento y pasa la información del producto
        onDetailClick({ id, name, img, price, stock });
    };

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
                    <button className="Option" onClick={handleDetailClick}>
                        Ver detalle
                    </button>
                </Link>
            </footer>
        </article>
    )
}

export default Item