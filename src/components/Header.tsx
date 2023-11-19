import stepList from "@/data/stepList";
import Step from "./Step";
import JoinButton from "./JoinButton";
export default function Header() {
  return (
    <div className="section">
      <div className=" section">
        <div className="intro">
          <h1>Colaborative Artistic Ventures Entertainment</h1>
          <h2>
            A community of artists working together to make art and tell
            stories.
          </h2>
          <JoinButton />
        </div>
        <div className="guide card">
          {stepList.map((stepItem) => (
            <Step
              key={stepItem.key}
              step={stepItem.step}
              imageURL={stepItem.imageURL}
              imageAlt={stepItem.imageAlt}
            />
          ))}
        </div>
        <p>*CAVE does not guarantee every project will make money</p>
      </div>
      <JoinButton />
    </div>
  );
}
