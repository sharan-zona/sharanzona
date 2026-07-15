import { SKILLS } from "../data/Data";

export default function Marquee({ reverse = false }) {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {items.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div className="marquee-item" key={index}>
              <Icon />
              <span>{skill.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}