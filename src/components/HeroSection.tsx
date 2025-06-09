import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 text-yellow-400 opacity-20">
        <Icon name="Trophy" size={64} />
      </div>
      <div className="absolute bottom-10 right-10 text-yellow-400 opacity-20">
        <Icon name="Medal" size={48} />
      </div>
      <div className="absolute top-1/2 right-1/4 text-yellow-400 opacity-10">
        <Icon name="Crown" size={72} />
      </div>

      <div className="container mx-auto text-center max-w-4xl">
        {/* Медаль иконка */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl">
            <Icon name="Trophy" size={48} className="text-white" />
          </div>
        </div>

        {/* Главный заголовок */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in font-montserrat">
          <span className="block text-yellow-400 mb-2">ЧЕМПИОН</span>
          <span className="block text-3xl md:text-4xl font-normal">России</span>
        </h1>

        {/* Имя чемпиона */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-yellow-100">
            Саломатин Михаил Дмитриевич
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-blue-200">
            <Icon name="Dumbbell" size={20} />
            <span>Гиревой спорт</span>
            <Icon name="Dumbbell" size={20} />
          </div>
        </div>

        {/* Описание достижения */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in max-w-2xl mx-auto leading-relaxed">
          Поздравляем с завоеванием титула чемпиона России по гиревому спорту!
          Это выдающееся достижение и результат упорных тренировок.
        </p>

        {/* Дата достижения */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 animate-fade-in">
          <Icon name="Calendar" size={20} className="text-yellow-400" />
          <span className="text-lg font-medium">2024 год</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
