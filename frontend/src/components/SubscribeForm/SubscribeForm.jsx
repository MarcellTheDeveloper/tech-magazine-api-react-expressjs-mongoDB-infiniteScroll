import React from 'react';
import "../../style/CSS/SubscribeForm/subscribeForm.css";

function SubscribeForm() {
	return (
		<form id="sub-form" className="subscribe-form">
			<p id="follow-news">Follow the newest news regard the Tech world.</p>

			<div className="inputs">
				<input type="text" placeholder="Name" />
				<input type="email" placeholder="Email" />
			</div>

			<div className="check check-top">
				<input type="checkbox" name="" id="receive" />
				<label htmlFor="receive">I would like to receive the JSP newsletter</label>
			</div>

			<div className="check">
				<input type="checkbox" name="" id="agree" />
				<label htmlFor="agree">I agree to JSP's <a href="#">Terms of Service</a></label>
			</div>

			<button>Subscribe</button>
		</form>
	)
}

export default SubscribeForm
