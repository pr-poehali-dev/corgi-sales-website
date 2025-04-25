import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?q=80&w=60&auto=format&fit=crop" 
                alt="Корги лого" 
                className="w-10 h-10 rounded-full object-cover" 
              />
              <span className="text-xl font-bold text-primary">КоргиДом</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Профессиональный питомник вельш-корги пемброк с 2015 года. Выращиваем здоровых, породистых щенков с отличным характером.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/puppies" className="text-muted-foreground hover:text-primary transition-colors">Щенки</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О породе</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Галерея</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>📱 +7 (999) 123-45-67</li>
              <li>✉️ info@corgidom.ru</li>
              <li>📍 Москва, ул. Корги, 123</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                📸 Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                📱 VK
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                📺 YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} КоргиДом. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;