import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface PuppyProps {
  id: string;
  name: string;
  age: string;
  price: number;
  gender: "male" | "female";
  color: string;
  available: boolean;
  imageUrl: string;
}

const PuppyCard = ({ id, name, age, price, gender, color, available, imageUrl }: PuppyProps) => {
  return (
    <div className="group bg-card rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`Щенок корги ${name}`} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" 
        />
        {available ? (
          <Badge className="absolute top-2 right-2 bg-green-500">Доступен</Badge>
        ) : (
          <Badge className="absolute top-2 right-2 bg-red-500">Продан</Badge>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="font-medium text-primary">{price.toLocaleString()} ₽</span>
        </div>
        <div className="text-muted-foreground text-sm mb-4">
          <p>Возраст: {age}</p>
          <p>Пол: {gender === "male" ? "Мальчик" : "Девочка"}</p>
          <p>Окрас: {color}</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" className="w-full">
            <Link to={`/puppies/${id}`}>Подробнее</Link>
          </Button>
          <Button className="w-full" disabled={!available}>
            {available ? "Забронировать" : "Продан"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PuppyCard;