import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Gallery from '@/components/Gallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gem" className="text-glass-blue" size={32} />
              <span className="text-2xl font-heading font-bold text-glass-dark">Мануфактура Стекла</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#decor" className="text-slate-600 hover:text-glass-blue transition-colors">Декор</a>
              <a href="#custom" className="text-slate-600 hover:text-glass-blue transition-colors">На заказ</a>
              <a href="#gallery" className="text-slate-600 hover:text-glass-blue transition-colors">Галерея</a>
              <a href="#interior" className="text-slate-600 hover:text-glass-blue transition-colors">Интерьерное</a>
              <a href="#metal" className="text-slate-600 hover:text-glass-blue transition-colors">Металл</a>
              <Button className="bg-glass-blue hover:bg-glass-dark text-white">Связаться</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-glass-blue/10 text-glass-blue border-glass-blue/20">
                Художественное стекло с 1992 года
              </Badge>
              <h1 className="text-6xl font-heading font-bold text-glass-dark leading-tight mb-6">
                Создаём витражи и стеклянные композиции
              </h1>
              <p className="text-xl text-slate-600 font-body leading-relaxed mb-8">
                Превращаем обычное стекло в произведения искусства. Каждое изделие — 
                это симфония света, цвета и мастерства наших художников.
              </p>
              <div className="flex items-center space-x-4">
                <Button size="lg" className="bg-glass-blue hover:bg-glass-dark text-white px-8 py-3">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Заказать витраж
                </Button>
                <Button variant="outline" size="lg" className="border-glass-slate text-glass-dark px-8 py-3">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть процесс
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-glass-blue/20 to-glass-dark/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="/img/8417e7e2-ea5c-4a5c-b5be-8e8f47f4284d.jpg" 
                alt="Витражи мануфактуры"
                className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-glass-dark mb-4">Наши специализации</h2>
            <p className="text-xl text-slate-600 font-body max-w-2xl mx-auto">
              От классических витражей до современных интерьерных решений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200/50 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-glass-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Palette" className="text-glass-blue" size={32} />
                </div>
                <CardTitle className="text-2xl font-heading text-glass-dark">Витражное искусство</CardTitle>
                <CardDescription className="text-slate-600 font-body">
                  Классические и современные витражи для храмов, домов и общественных зданий
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200/50 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-glass-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Lightbulb" className="text-glass-blue" size={32} />
                </div>
                <CardTitle className="text-2xl font-heading text-glass-dark">Художественное стекло</CardTitle>
                <CardDescription className="text-slate-600 font-body">
                  Уникальные композиции, панно и декоративные элементы из цветного стекла
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200/50 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-glass-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Flame" className="text-glass-blue" size={32} />
                </div>
                <CardTitle className="text-2xl font-heading text-glass-dark">Ремесленное мастерство</CardTitle>
                <CardDescription className="text-slate-600 font-body">
                  Традиционные техники обработки стекла, передаваемые из поколения в поколение
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="decor" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-glass-dark text-center mb-16">Каталог изделий</h2>
          
          {/* Элементы декора */}
          <div className="mb-16">
            <h3 className="text-3xl font-heading font-semibold text-glass-dark mb-8">Элементы декора</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/img/fbe1b14d-7cbe-468c-9ec9-e893f3fba97f.jpg"
                    alt="Декоративное стекло"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-glass-dark">Декоративные панели</CardTitle>
                  <CardDescription className="font-body">Авторские композиции для интерьера</CardDescription>
                  <div className="flex items-center justify-between pt-4">
                    <Badge variant="secondary">От 15 000 ₽</Badge>
                    <Button size="sm" variant="outline">
                      <Icon name="Eye" size={16} className="mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-glass-blue/20 to-glass-dark/20 flex items-center justify-center">
                    <Icon name="Sparkles" size={64} className="text-glass-blue" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-glass-dark">Люстры и светильники</CardTitle>
                  <CardDescription className="font-body">Уникальные светильники из художественного стекла</CardDescription>
                  <div className="flex items-center justify-between pt-4">
                    <Badge variant="secondary">От 25 000 ₽</Badge>
                    <Button size="sm" variant="outline">
                      <Icon name="Eye" size={16} className="mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <Icon name="Crown" size={64} className="text-amber-600" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-glass-dark">Зеркала в раме</CardTitle>
                  <CardDescription className="font-body">Зеркала в витражных и металлических рамах</CardDescription>
                  <div className="flex items-center justify-between pt-4">
                    <Badge variant="secondary">От 8 000 ₽</Badge>
                    <Button size="sm" variant="outline">
                      <Icon name="Eye" size={16} className="mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Товары под заказ */}
          <div id="custom" className="mb-16">
            <h3 className="text-3xl font-heading font-semibold text-glass-dark mb-8">Товары под заказ</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-glass-blue/5 to-glass-dark/5 border-glass-blue/20">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Hammer" className="text-glass-blue" size={32} />
                    <CardTitle className="text-2xl font-heading text-glass-dark">Витражи на заказ</CardTitle>
                  </div>
                  <CardDescription className="font-body text-slate-600">
                    Создаём витражи любой сложности по вашим эскизам или готовым проектам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-body text-slate-600">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Индивидуальный дизайн</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Любые размеры</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Гарантия качества</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-glass-blue hover:bg-glass-dark text-white">
                    Заказать витраж
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 border-emerald-200/50">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Home" className="text-emerald-600" size={32} />
                    <CardTitle className="text-2xl font-heading text-glass-dark">Интерьерные решения</CardTitle>
                  </div>
                  <CardDescription className="font-body text-slate-600">
                    Комплексное остекление интерьеров: двери, перегородки, фасады
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-body text-slate-600">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>3D визуализация</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Установка под ключ</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Сервисное обслуживание</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Получить консультацию
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Остальные разделы */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Сувениры */}
            <div id="souvenirs">
              <h3 className="text-3xl font-heading font-semibold text-glass-dark mb-8">Сувениры</h3>
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <Icon name="Gift" className="text-rose-500" size={32} />
                    <div>
                      <h4 className="font-heading text-lg text-glass-dark">Стеклянные сувениры</h4>
                      <p className="font-body text-slate-600">От 500 ₽</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <Icon name="Heart" className="text-pink-500" size={32} />
                    <div>
                      <h4 className="font-heading text-lg text-glass-dark">Подарочные наборы</h4>
                      <p className="font-body text-slate-600">От 1 500 ₽</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Товары из металла */}
            <div id="metal">
              <h3 className="text-3xl font-heading font-semibold text-glass-dark mb-8">Изделия из металла</h3>
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <Icon name="Shield" className="text-slate-600" size={32} />
                    <div>
                      <h4 className="font-heading text-lg text-glass-dark">Кованые рамы</h4>
                      <p className="font-body text-slate-600">От 3 000 ₽</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <Icon name="Settings" className="text-slate-600" size={32} />
                    <div>
                      <h4 className="font-heading text-lg text-glass-dark">Металлические конструкции</h4>
                      <p className="font-body text-slate-600">От 5 000 ₽</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-glass-blue/20 text-glass-crystal border-glass-blue/30">
                Наш процесс
              </Badge>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Как мы создаём шедевры
              </h2>
              <p className="text-xl text-slate-300 font-body mb-8 leading-relaxed">
                Каждое изделие проходит полный цикл от эскиза до установки. 
                Мы используем только проверенные временем техники и современные технологии.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-glass-blue rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="font-body">Консультация и создание эскиза</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-glass-blue rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="font-body">Подбор материалов и цветов</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-glass-blue rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="font-body">Создание в мастерской</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-glass-blue rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="font-body">Установка и сдача работы</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/063b2888-4b3f-440b-b6b8-e7ad9fc7fcee.jpg" 
                alt="Процесс создания стекла"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <Icon name="Gem" className="mx-auto text-glass-blue mb-4" size={48} />
          <h3 className="text-3xl font-heading font-bold text-glass-dark mb-4">
            Готовы создать что-то прекрасное?
          </h3>
          <p className="text-xl text-slate-600 font-body mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации по вашему проекту. 
            Первая консультация и выезд мастера — бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-glass-blue hover:bg-glass-dark text-white px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (495) 123-45-67
            </Button>
            <Button variant="outline" size="lg" className="border-glass-slate text-glass-dark px-8 py-3">
              <Icon name="Mail" className="mr-2" size={20} />
              info@glassmanufactory.ru
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;