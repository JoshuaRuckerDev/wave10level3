type FeaturedCardType = {
    title: string;
    description: string;
    image: string;
    badge?: string;
};

export const FeaturedCard = (props: FeaturedCardType) => {
    return (
        <div className="featured-card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            {props.badge && <span>{props.badge}</span>}
            <p>{props.description}</p>
            
        </div>
    )
}