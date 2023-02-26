import React, { useEffect } from 'react';

import Social from '../components/Social';
import { useForm } from '@formspree/react';
import Loader from 'react-loader-spinner';
import { CONTACT_PAGE_ANIMATION_FRAMES } from '../util/animations/animations';
import type { IGLOBALSTATE } from '../util/interfaces';

export const Contact: React.FC<IGLOBALSTATE> = (props) => {
	const { setTheme, setShowNav, setShowSocial } = props;

	const [state, handleSubmit] = useForm('contactForm');

	useEffect(() => {
		setTheme('dark');
		setShowNav(true);
		setShowSocial(false);
	}, [setTheme, setShowNav, setShowSocial]);

	return (
		<main className="content__main">
			<div className="contact-page">
				<div className="contact-page__container">
					{/* LEFT COLUMN */}
					<div className="contact-page__content">
						<div className="contact-page__content-container">
							<h1
								className="contact-page__title"
								style={{ textAlign: 'center' }}
							>
								Contact <span className="million">M</span>e
							</h1>
							<div className="copy">
								<p style={{ textAlign: 'center' }}>
									Get in touch for freelance work, tutoring, career advice, mock
									tech tests, mock interviews and portfolio & CV reviews.
								</p>
							</div>
							<Social />
						</div>
						<div className="animation-frame__container contact">
							{CONTACT_PAGE_ANIMATION_FRAMES.map((frame, i) => (
								<div className="animation-frame" key={i}>
									{frame}
								</div>
							))}
						</div>
					</div>

					{/* RIGHT COLUMN */}
					<div className="contact-page__form">
						<div className="contact-page__form-container">
							<form onSubmit={handleSubmit} className="contact-form">
								<fieldset className="details">
									<div className="text-input">
										<input
											type="text"
											name="name"
											id="name"
											required
											placeholder="Name*"
										/>
									</div>
									<div className="text-input">
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Email*"
											required
										/>
									</div>
								</fieldset>
								<fieldset className="message-area">
									<textarea
										placeholder="Message*"
										name="message"
										id="message"
										cols={30}
										rows={5}
										required
									></textarea>
								</fieldset>
								<button
									type="submit"
									disabled={state.submitting || state.succeeded}
									className="submit-btn"
								>
									{state.submitting ? (
										<>Sending...</>
									) : state.succeeded ? (
										<>Sent</>
									) : (
										<>Send</>
									)}
								</button>
							</form>
							<div className="contact-page__user-messages">
								{state.submitting && (
									<Loader
										type="TailSpin"
										color="#08fdd8"
										height={50}
										width={50}
										className="spinner"
									/>
								)}{' '}
								{state.errors.length > 0 && (
									<p className="error">
										Something went wrong. Off I go debugging again...
									</p>
								)}{' '}
								{state.succeeded && (
									<p className="success">Thanks for getting in touch!</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
