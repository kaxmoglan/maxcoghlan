import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';
import Loader from 'react-loader-spinner';
import Social from '../components/Social';
import { CONTACT_PAGE_ANIMATION_FRAMES } from '../util/animations/animations';
import type { IGLOBALSTATE } from '../util/interfaces';

export const Contact: React.FC<IGLOBALSTATE> = ({ setShowNav }) => {
	const [state, handleSubmit] = useForm('contactForm');

	useEffect(() => {
		setShowNav(true);
	}, [setShowNav]);

	return (
		<main className="content__main">
			<section className="page-hero">
				<div className="wrap">
					<h1 className="page-hero__title">Get in touch</h1>
					<p className="page-hero__lede">
						I'm currently open to conversations about Engineering
						Manager and Head of Engineering roles. Also happy to talk
						freelance work, mentoring, mock interviews, or CV and
						portfolio reviews.
					</p>
				</div>
			</section>

			<section className="contact-page">
				<div className="wrap contact-page__grid">
					<div>
						<div className="contact-page__illustration">
							<div className="animation-frame__container" aria-hidden="true">
								{CONTACT_PAGE_ANIMATION_FRAMES.map((frame, i) => (
									<div className="animation-frame" key={i}>
										{frame}
									</div>
								))}
							</div>
						</div>
						<div className="contact-page__social">
							<Social />
						</div>
					</div>

					<form onSubmit={handleSubmit} className="contact-form">
						<div className="contact-form__row">
							<div className="contact-form__field">
								<label htmlFor="name">Name</label>
								<input type="text" name="name" id="name" required />
							</div>
							<div className="contact-form__field">
								<label htmlFor="email">Email</label>
								<input type="email" name="email" id="email" required />
							</div>
						</div>

						<div className="contact-form__field">
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows={5} required />
						</div>

						<button
							type="submit"
							disabled={state.submitting || state.succeeded}
							className="btn btn--filled contact-form__submit"
						>
							{state.submitting ? (
								<>Sending…</>
							) : state.succeeded ? (
								<>Sent</>
							) : (
								<>Send message</>
							)}
						</button>

						<div className="contact-form__messages">
							{state.submitting && (
								<Loader
									type="TailSpin"
									color="#2A6DC8"
									height={28}
									width={28}
									className="spinner"
								/>
							)}
							{state.errors.length > 0 && (
								<p className="error">
									Something went wrong. Try again, or reach me directly
									via LinkedIn.
								</p>
							)}
							{state.succeeded && (
								<p className="success">Thanks for getting in touch!</p>
							)}
						</div>
					</form>
				</div>
			</section>
		</main>
	);
};
