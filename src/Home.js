import React from "react";
import "./Home.css";
import Product from "./Product";
import { Product__Sale } from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2019/AUCC/0_EchoPlusMilkYellowV2_gateway-tagline-desktop_2x._CB437914291_.jpg"
				/>

				<div className="home__row">
					<Product__Sale
						id="435762345"
						title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel
					Core i7) - Space Gray"
						price={2099.99}
						sale__price={2399.99}
						image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY218_.jpg"
						rating={4}
					/>
					<Product__Sale
						ID="9745724356"
						title=" KitchenAid KSM180QHSD 100 Year Limited Edition Queen of Hearts Stand Mixer, Passion Red "
						price={358.57}
						sale__price={399.99}
						image="https://m.media-amazon.com/images/I/81LBhCVGIPL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product__Sale
						ID="1897345982"
						title=" Fire TV Stick streaming media player with Alexa built in, includes Alexa Voice Remote"
						price={29.99}
						sale__price={39.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL480_SR480,480_.jpg"
						rating={4}
					/>
					<Product
						ID="7592760749"
						title=" Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal "
						price={49.99}
						image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL480_SR480,480_.jpg"
						rating={5}
					/>
					<Product
						ID="1860387046"
						title="C Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminum Case "
						price={429.99}
						image="https://m.media-amazon.com/images/I/71wu+HMAKBL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product__Sale
						ID="6480989352"
						title=" Samsung 32-Inch UR590C UHD 4K Curved Gaming Monitor (LU32R590CWNXZA) – 60Hz Refresh, Widescreen Computer Monitor, 3840 x 2160p Resolution, 4ms Response, Game Mode, HDMI, Dark Blue Gray )"
						price={449.99}
						sale__price={499.99}
						image="https://m.media-amazon.com/images/I/91BlpmYWl-L._AC_UY218_.jpg"
						rating={4}
					/>{" "}
				</div>
			</div>
		</div>
	);
}

export default Home;
