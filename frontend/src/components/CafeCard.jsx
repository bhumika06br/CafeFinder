import "./CafeCard.css";
function CafeCard({ name, location, rating, description, image }) {
  return (
    <div className="cafe-card">
      <img
        className="cafe-card-image"
        src={image}
        alt={name}
      />

      <div className="cafe-card-content">
        <h2>{name}</h2>

        <p className="cafe-card-location">
          📍 {location}
        </p>

        <p className="cafe-card-rating">
          ⭐ {rating} / 5
        </p>

        <p className="cafe-card-description">
          {description}
        </p>

        <button className="cafe-card-button">
          View Details
        </button>
      </div>
    </div>
  );
}

export default CafeCard;
