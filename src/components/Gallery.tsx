import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: string;
  year: string;
  location: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Храмовый витраж Святого Георгия",
    category: "Витражи",
    image: "/img/6686efae-9fff-414e-8f01-2c745f6e0f86.jpg",
    description: "Классический готический витраж для православного храма. Изготовлен в технике свинцовой пайки с использованием антикварного стекла.",
    price: "180 000 ₽",
    year: "2023",
    location: "Москва, храм Святого Георгия"
  },
  {
    id: 2,
    title: "Офисные перегородки Tech Hub",
    category: "Интерьерное",
    image: "/img/79c8219a-d503-4eb2-9266-3d36bf0d3b99.jpg",
    description: "Современные стеклянные перегородки с матовыми геометрическими узорами. Обеспечивают приватность и звукоизоляцию.",
    price: "75 000 ₽",
    year: "2024",
    location: "Москва-Сити"
  },
  {
    id: 3,
    title: "Хрустальная люстра Императорская",
    category: "Декор",
    image: "/img/09ad8f8a-fb39-4eff-9624-ec0d60ec0511.jpg",
    description: "Роскошная люстра ручной работы с элементами хрусталя и цветного стекла. 120 индивидуальных элементов.",
    price: "320 000 ₽",
    year: "2023",
    location: "Частный дом, Рублёвка"
  },
  {
    id: 4,
    title: "Декоративная композиция Морская волна",
    category: "Декор",
    image: "/img/8417e7e2-ea5c-4a5c-b5be-8e8f47f4284d.jpg",
    description: "Абстрактная композиция в сине-зелёных тонах, имитирующая движение морской волны. Техника фьюзинг.",
    price: "45 000 ₽",
    year: "2024",
    location: "Частный интерьер, Сочи"
  },
  {
    id: 5,
    title: "Витраж мастерской Времена года",
    category: "Витражи",
    image: "/img/fbe1b14d-7cbe-468c-9ec9-e893f3fba97f.jpg",
    description: "Авторский витраж с изображением четырёх времён года. Каждая секция выполнена в уникальной цветовой гамме.",
    price: "95 000 ₽",
    year: "2023",
    location: "Загородный дом, Подмосковье"
  },
  {
    id: 6,
    title: "Зеркало в кованой раме",
    category: "Металл",
    image: "/img/063b2888-4b3f-440b-b6b8-e7ad9fc7fcee.jpg",
    description: "Зеркало в авторской кованой раме с элементами художественного стекла. Ручная работа кузнечной мастерской.",
    price: "28 000 ₽",
    year: "2024",
    location: "Частный интерьер, Санкт-Петербург"
  }
];

const categories = ["Все", "Витражи", "Декор", "Интерьерное", "Металл"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  useEffect(() => {
    if (selectedCategory === "Все") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-glass-blue/10 text-glass-blue border-glass-blue/20">
            Портфолио
          </Badge>
          <h2 className="text-4xl font-heading font-bold text-glass-dark mb-4">
            Галерея наших работ
          </h2>
          <p className="text-xl text-slate-600 font-body max-w-2xl mx-auto">
            Более 500 выполненных проектов за 30 лет работы
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
                transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-glass-blue text-white hover:bg-glass-dark' 
                  : 'text-glass-dark border-glass-slate hover:bg-glass-blue/10'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-slate-200/50"
              onClick={() => setSelectedItem(item)}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <Badge className="mb-2 bg-glass-blue/80 text-white border-none">
                    {item.category}
                  </Badge>
                  <h3 className="font-heading text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-slate-200">
                    {item.year} • {item.price}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Icon name="Eye" size={20} className="text-glass-dark" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-glass-slate text-glass-dark hover:bg-glass-blue/10 px-8 py-3"
          >
            <Icon name="Plus" className="mr-2" size={20} />
            Загрузить ещё работы
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img 
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <Badge className="mb-3 bg-glass-blue/10 text-glass-blue border-glass-blue/20">
                    {selectedItem.category}
                  </Badge>
                  <h3 className="text-3xl font-heading font-bold text-glass-dark mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-slate-600 font-body leading-relaxed text-lg">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Calendar" className="text-glass-blue" size={20} />
                    <span className="font-body text-slate-700">Год: {selectedItem.year}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-glass-blue" size={20} />
                    <span className="font-body text-slate-700">{selectedItem.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="DollarSign" className="text-glass-blue" size={20} />
                    <span className="font-heading text-2xl font-bold text-glass-dark">
                      {selectedItem.price}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button className="flex-1 bg-glass-blue hover:bg-glass-dark text-white">
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Заказать похожую
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-glass-slate text-glass-dark"
                    onClick={() => setSelectedItem(null)}
                  >
                    <Icon name="X" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;