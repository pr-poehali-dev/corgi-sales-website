interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  imageUrl: string;
  rating: number;
}

const TestimonialCard = ({ name, location, text, imageUrl, rating }: TestimonialProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover" 
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-muted-foreground text-sm">{location}</p>
        </div>
      </div>
      <div className="mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      <p className="text-foreground italic">{text}</p>
    </div>
  );
};

export default TestimonialCard;