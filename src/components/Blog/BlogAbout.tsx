import React from "react";

export const BlogAbout: React.FC = () => {
  return (
    <div className="blog-second-panel panel">
      <p className="blog-second-panel__title">ABOUT</p>
      <div className="blog-second-panel__body">
        <p className="subheading">I am a</p>
        <p className="text">Developer</p>
        <p className="subheading">I live in</p>
        <p className="text">London, England</p>
        <p className="subheading">My favourite things are</p>
        <p className="text">
          Learning. Making things. Listening to music. Making music. Watching
          films. Design. Problem solving. Skating. Eating good food. Exercising.
        </p>
        <p className="subheading">Disclaimer</p>
        <p className="text">I am not a writer.</p>
      </div>
    </div>
  );
};
