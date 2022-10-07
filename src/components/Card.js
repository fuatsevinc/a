import "../scss/Card.scss";

const Card = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div className="content" key={id}>
            <h2>{title}</h2>
            <img src={image} alt="img" width={400} />
            <div className="desc">{desc}</div>
          </div>
        );
      })}
    
    </div>
  );
};

export default Card;
