// A good practice in components is to call the props type as "Props"
type Props = {
    imageURL: string
    imageAlt: string
    step: string
}

// This is the way you "spread" props over the component properties
export default function Step({ imageURL, imageAlt, step }: Props) {
    return (
        <div className="card steps">
            <img className="img" src={imageURL} alt={imageAlt} />
            <h3 className="blend">{step}</h3>
        </div>
    );
}
