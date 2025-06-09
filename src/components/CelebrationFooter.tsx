import Icon from "@/components/ui/icon";

const CelebrationFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Поздравительная секция */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Icon name="Sparkles" size={24} className="text-yellow-400" />
            <h2 className="text-3xl font-bold font-montserrat">Поздравляем!</h2>
            <Icon name="Sparkles" size={24} className="text-yellow-400" />
          </div>

          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Желаем дальнейших спортивных побед и покорения новых вершин!
          </p>

          {/* Иконки достижений */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Icon name="Medal" size={20} className="text-yellow-400" />
              <span className="text-sm">Чемпион</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Icon name="Trophy" size={20} className="text-yellow-400" />
              <span className="text-sm">Россия</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Icon name="Dumbbell" size={20} className="text-yellow-400" />
              <span className="text-sm">2025</span>
            </div>
          </div>
        </div>

        {/* Декоративная линия */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-8"></div>

        {/* Информация */}
        <div className="text-center">
          <p className="text-blue-200 mb-4">
            Саломатин Михаил Дмитриевич - Чемпион России по гиревому спорту
          </p>

          <div className="flex items-center justify-center gap-4 text-yellow-400">
            <Icon name="Crown" size={20} />
            <span className="text-lg font-semibold">2025</span>
            <Icon name="Crown" size={20} />
          </div>
        </div>

        {/* Финальный акцент */}
        <div className="mt-8 pt-8 border-t border-blue-700">
          <div className="flex items-center justify-center text-yellow-400">
            <Icon name="Star" size={16} />
            <Icon name="Star" size={20} className="mx-2" />
            <Icon name="Trophy" size={24} className="mx-2" />
            <Icon name="Star" size={20} className="mx-2" />
            <Icon name="Star" size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CelebrationFooter;
