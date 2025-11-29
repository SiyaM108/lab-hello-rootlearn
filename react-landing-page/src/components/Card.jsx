function Card({ img, title, text }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;
