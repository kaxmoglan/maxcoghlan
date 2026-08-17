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
			<article className="wrap letter">
				<div className="letter__head">
					<h1 className="letter__salutation">Get in touch</h1>

					<div className="page-illustration" aria-hidden="true">
						<div className="animation-frame__container">
							{CONTACT_PAGE_ANIMATION_FRAMES.map((frame, i) => (
								<div className="animation-frame" key={i}>
									{frame}
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="letter__body copy">
					<p>
						I'm currently open to conversations about Engineering
						Manager and Head of Engineering roles. I'm also happy to
						talk freelance work, tutoring, mock interviews and CV or
						portfolio reviews.
					</p>
				</div>

				<Social />

				<form onSubmit={handleSubmit} className="contact-form">
					<div className="contact-form__field">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" required />
					</div>
					<div className="contact-form__field">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" required />
					</div>
					<div className="contact-form__field">
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" rows={4} required />
					</div>

					<button
						type="submit"
						disabled={state.submitting || state.succeeded}
						className="text-link contact-form__submit"
					>
						{state.submitting ? (
							<>Sending…</>
						) : state.succeeded ? (
							<>Sent</>
						) : (
							<>Send →</>
						)}
					</button>

					<div className="contact-form__messages">
						{state.submitting && (
							<Loader
								type="TailSpin"
								color="#2C3E66"
								height={24}
								width={24}
								className="spinner"
							/>
						)}
						{state.errors.length > 0 && (
							<p className="error">
								Something went wrong. Try again, or reach me
								directly via LinkedIn.
							</p>
						)}
						{state.succeeded && (
							<p className="success">Thanks for getting in touch!</p>
						)}
					</div>
				</form>
			</article>
		</main>
	);
};
