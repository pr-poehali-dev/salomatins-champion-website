import Icon from "@/components/ui/icon";

const AchievementCard = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Декоративный элемент */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full -translate-y-16 translate-x-16 opacity-10"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2 font-montserrat">
                Достижение года
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Левая колонка - информация */}
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="User" size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Спортсмен
                    </h3>
                    <p className="text-gray-600">Саломатин Михаил Дмитриевич</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Trophy" size={16} className="text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Титул</h3>
                    <p className="text-gray-600">Чемпион России</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon
                      name="Dumbbell"
                      size={16}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Дисциплина
                    </h3>
                    <p className="text-gray-600">Гиревой спорт</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon
                      name="Calendar"
                      size={16}
                      className="text-purple-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Год</h3>
                    <p className="text-gray-600">2024</p>
                  </div>
                </div>
              </div>

              {/* Правая колонка - визуальный акцент */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full w-48 h-48 mx-auto flex items-center justify-center shadow-2xl mb-6">
                  <div className="text-center text-white">
                    <Icon name="Crown" size={64} className="mx-auto mb-2" />
                    <div className="text-2xl font-bold">1-е</div>
                    <div className="text-sm opacity-90">место</div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg italic">
                  "Победа - это результат подготовки, упорного труда и отказа от
                  поражения"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementCard;
