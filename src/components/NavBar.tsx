import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 w-full bg-background/90 backdrop-blur-sm border-b">
      <div className="container px-4 md:px-6 mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?q=80&w=60&auto=format&fit=crop" 
            alt="Корги лого" 
            className="w-10 h-10 rounded-full object-cover" 
          />
          <Link to="/" className="text-xl font-bold text-primary">КоргиДом</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
          <Link to="/puppies" className="text-foreground hover:text-primary transition-colors">Щенки</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">О породе</Link>
          <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</Link>
          <Link to="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button>
            Связаться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;