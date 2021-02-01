import React from "react";

interface Props {
  icons: Array<JSX.Element>;
}

const SkillsCloud: React.FC<Props> = (props) => {
  const { icons } = props;
  return (
    <>
      {icons.map((icon, i) => (
        <div className="icon" key={i}>
          {icon}
        </div>
      ))}
    </>
  );
};

export default SkillsCloud;
