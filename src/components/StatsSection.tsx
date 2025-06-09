import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Trophy",
      number: "1",
      label: "Место в России",
      description: "Чемпион страны",
    },
    {
      icon: "Target",
      number: "100%",
      label: "Целеустремленность",
      description: "Путь к победе",
    },
    {
      icon: "Dumbbell",
      number: "∞",
      label: "Часов тренировок",
      description: "Ежедневная работа",
    },
    {
      icon: "Star",
      number: "⭐",
      label: "Статус",
      description: "Звезда спорта",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Путь к успеху
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждое великое достижение начинается с решения попробовать
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover-scale"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={stat.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>

              <div className="text-3xl font-bold text-gray-800 mb-2 font-montserrat">
                {stat.number}
              </div>

              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </h3>

              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Дополнительная секция с мотивацией */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6">
              <Icon name="Flame" size={40} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">
              Сила воли и упорство
            </h3>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Гиревой спорт - это не просто физическая нагрузка, это испытание
              характера. Михаил Дмитриевич доказал, что с правильным подходом и
              неуклонным стремлением к цели можно достичь самых высоких
              результатов в спорте.
            </p>

            <div className="flex items-center justify-center gap-2 mt-6 text-yellow-600">
              <Icon name="Star" size={20} />
              <Icon name="Star" size={24} />
              <Icon name="Star" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
