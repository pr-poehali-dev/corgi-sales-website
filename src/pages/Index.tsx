import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PuppyCard, { PuppyProps } from "@/components/PuppyCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const puppies: PuppyProps[] = [
  {
    id: "p1",
    name: "Печенька",
    age: "2 месяца",
    price: 85000,
    gender: "female",
    color: "Рыже-белый",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "p2",
    name: "Марти",
    age: "3 месяца",
    price: 90000,
    gender: "male",
    color: "Триколор",
    available: true,
    imageUrl: "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "p3",
    name: "Лаки",
    age: "2.5 месяца",
    price: 80000,
    gender: "male",
    color: "Рыжий",
    available: false,
    imageUrl: "https://images.unsplash.com/photo-1610910204326-5920dee3588e?q=80&w=600&auto=format&fit=crop"
  }
];

const testimonials = [
  {
    name: "Александра М.",
    location: "Москва",
    text: "Наш Рекс из КоргиДома — самый умный и веселый пес, которого я когда-либо встречала. Спасибо за такого замечательного друга!",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Дмитрий К.",
    location: "Санкт-Петербург",
    text: "Корги из этого питомника отличаются прекрасным здоровьем и характером. Наша Молли уже 2 года радует нас и не болеет!",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Елена В.",
    location: "Екатеринбург",
    text: "Очень благодарна заводчикам за поддержку после покупки щенка. Всегда на связи и готовы помочь советом!",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
    rating: 4
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/20 to-background py-20">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Найдите своего идеального друга корги
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Мы выращиваем здоровых, счастливых и породистых щенков вельш-корги пемброк.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-lg px-8 py-6">
                Посмотреть щенков
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Узнать о породе
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?q=80&w=800&auto=format&fit=crop" 
              alt="Счастливый корги" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Почему стоит выбрать корги?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Преданный компаньон</h3>
              <p className="text-muted-foreground">
                Корги невероятно преданны своим хозяевам и станут вашими лучшими друзьями на долгие годы.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Умные и обучаемые</h3>
              <p className="text-muted-foreground">
                Корги легко поддаются дрессировке, быстро учатся и отлично справляются с различными задачами.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Подходят для семьи</h3>
              <p className="text-muted-foreground">
                Они отлично ладят с детьми и другими животными, прекрасно адаптируются к жизни в квартире.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Puppies Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Наши щенки</h2>
            <Button variant="outline" asChild>
              <Link to="/puppies">Смотреть всех</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {puppies.map((puppy) => (
              <PuppyCard key={puppy.id} {...puppy} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Что говорят наши клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы завести корги?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, чтобы узнать о наличии щенков и забронировать встречу с ними.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;