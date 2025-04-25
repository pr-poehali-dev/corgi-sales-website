import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  imageUrl: string;
  rating: number;
}

const TestimonialCard = ({ name, location, text, imageUrl, rating }: TestimonialProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover" 
          />
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-muted-foreground text-sm">{location}</p>
          </div>
        </div>
        
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-500">
              {i < rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        
        <p className="text-muted-foreground">"{text}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;