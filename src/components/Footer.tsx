import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">КоргиДом</h3>
            <p className="text-muted-foreground">
              Питомник вельш-корги с опытом более 10 лет. 
              Мы выращиваем счастливых и здоровых щенков.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/puppies" className="hover:text-primary transition-colors">Щенки</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">О породе</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Галерея</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>📱 +7 (900) 123-45-67</li>
              <li>✉️ info@corgi-dom.ru</li>
              <li>📍 г. Москва, ул. Пушистая, 42</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Подписаться</h3>
            <p className="text-muted-foreground mb-4">
              Получайте новости о появлении щенков и акциях
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 bg-background text-foreground border border-border rounded-l-md focus:outline-none"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-muted-foreground">
          <p>© 2025 КоргиДом. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;