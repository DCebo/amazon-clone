import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, image, price, rating }) {
	const [state, dispatch] = useStateValue();

	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<sup>
						<small>$</small>
					</sup>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon className="product__ratingStar" />
						))}
				</div>
			</div>

			<img src={image} alt="" />

			<button onClick={addToBasket}>Add to Cart</button>
		</div>
	);
}

export function Product__Sale({
	id,
	title,
	image,
	price,
	sale__price,
	rating,
}) {
	const [{ basket }, dispatch] = useStateValue();

	console.log("this is the basket >>> ", basket);

	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product__sale">
			<div className="product__infoSale">
				<p>{title}</p>
				<p className="product__priceSale">
					<sup>
						<small>$</small>
					</sup>
					<strong>{price} </strong>
					<small>
						<sup>
							<small>$</small>
						</sup>
						<del>{sale__price}</del>
					</small>
				</p>
				<div className="product__ratingSale">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon className="product__ratingStarSale" />
						))}
				</div>
			</div>

			<img src={image} alt="" />

			<button onClick={addToBasket}>Add to Cart</button>
		</div>
	);
}

export default Product;
