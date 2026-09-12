import { useState } from "react";
export default function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return <div className="text-center mt-5">
        <h5>Rate this product</h5>
        <div>
            {[1, 2, 3, 4, 5].map(star => (
                <span
                    key={star}
                    className={star <= (hover || rating)
                        ? "text-warning"
                        : "text-secondary"}
                    style={{ fontSize: 38, cursor: "pointer" }}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                >
                    ★
                </span>
            ))}
        </div>
        <div className="text-muted mt-1">
            {rating ? `${rating} / 5` : "Click to rate"}
        </div>
    </div>
}