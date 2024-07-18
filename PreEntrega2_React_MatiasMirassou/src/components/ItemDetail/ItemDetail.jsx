
const ItemDetail = ({ name, rutaImagen, artist, category, price }) => {
    return (
        <article className="card" style={{ width: "18rem", padding: "10px", margin: "20px", alignContent: "center", justifyContent: "center" }}>
            <h1>{name}</h1>
            <video className="card-img-top" src={rutaImagen}  type="video/mp4" autoPlay muted loop style={{ width: "250px", height: "auto" }} />
            <div className="card-body">
                <p className="card-title">Artist: {artist}</p>
                <p className="card-text">Collection: {category}</p>
                <p className="card-text">${price}</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
        </article>
    )
}

export default ItemDetail