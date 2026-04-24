import { Hero } from "@/components/Hero";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const subjects = [
  { icon: "Calculator", title: "Математика", desc: "Алгебра, геометрия, тригонометрия — от базы до олимпиадного уровня" },
  { icon: "Atom", title: "Физика", desc: "Механика, электродинамика, оптика — с разбором задач и формул" },
  { icon: "BookOpen", title: "Подготовка к ЕГЭ", desc: "Стратегия, разбор вариантов, работа с ошибками — от 80 баллов" },
  { icon: "GraduationCap", title: "Подготовка к ОГЭ", desc: "Системная подготовка: теория + практика + пробные экзамены" },
];

const pricing = [
  { title: "Пробный урок", price: "Бесплатно", desc: "60 минут", features: ["Знакомство и диагностика", "Определение уровня знаний", "Составление плана обучения"] },
  { title: "Разовое занятие", price: "1 500 ₽", desc: "60 минут", features: ["Индивидуальная программа", "Домашнее задание", "Обратная связь после урока"] },
  { title: "Пакет 8 занятий", price: "10 000 ₽", desc: "экономия 2 000 ₽", features: ["Все включено из разового", "Отслеживание прогресса", "Дополнительные материалы", "Поддержка в мессенджере"] },
];

const reviews = [
  { name: "Мария К.", text: "Сын готовился к ЕГЭ по математике — сдал на 87 баллов. Очень структурированный подход, всё объясняется понятно.", score: "87 баллов ЕГЭ" },
  { name: "Алексей Р.", text: "Занимаемся физикой уже 3 месяца. Оценка в школе выросла с 3 до 5, и главное — ребёнок понял предмет.", score: "3 → 5 по физике" },
  { name: "Ольга Д.", text: "Готовились к ОГЭ за 2 месяца. Сдали на 4 с хорошим запасом. Спасибо за терпение и индивидуальный подход!", score: "ОГЭ сдан на «4»" },
];

export default function Index() {
  return (
    <>
      <Hero />

      {/* About */}
      <section id="about" className="container py-32 mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div>
            <Pill className="mb-6">ОБО МНЕ</Pill>
            <h2 className="text-4xl md:text-5xl font-sentient mb-6">
              Репетитор с опытом <i className="font-light">7+ лет</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed mb-4">
              Преподаю математику и физику школьникам с 5 по 11 класс. Помогаю готовиться к ОГЭ и ЕГЭ — мои ученики стабильно сдают выше 80 баллов.
            </p>
            <p className="font-mono text-sm text-foreground/60 leading-relaxed mb-8">
              Работаю онлайн, занятия проходят в удобное время через Zoom или Google Meet. Объясняю сложное просто — без зубрёжки, с пониманием.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "200+", label: "учеников" },
                { num: "87", label: "средний балл ЕГЭ" },
                { num: "7 лет", label: "опыта" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-sentient text-foreground">{stat.num}</div>
                  <div className="font-mono text-xs text-foreground/40 uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-foreground/10 rounded-2xl p-8 bg-foreground/5">
            <div className="font-mono text-xs text-foreground/40 uppercase mb-4">Образование и опыт</div>
            {[
              "МГУ, факультет математики и механики",
              "Опыт преподавания с 2017 года",
              "Автор авторской методики подготовки к ЕГЭ",
              "Регулярное повышение квалификации",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 mb-4">
                <Icon name="CheckCircle" size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-mono text-sm text-foreground/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="container py-32 mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">ПРЕДМЕТЫ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Что я <i className="font-light">преподаю</i>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {subjects.map((s) => (
            <div key={s.title} className="border border-foreground/10 rounded-2xl p-6 bg-foreground/5 hover:bg-foreground/10 transition-colors">
              <Icon name={s.icon as "Calculator"} size={28} className="text-primary mb-4" />
              <h3 className="font-sentient text-xl mb-2">{s.title}</h3>
              <p className="font-mono text-xs text-foreground/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container py-32 mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">ЦЕНЫ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Прозрачная <i className="font-light">стоимость</i>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((plan, i) => (
            <div
              key={plan.title}
              className={`border rounded-2xl p-8 flex flex-col ${i === 2 ? "border-primary bg-primary/5" : "border-foreground/10 bg-foreground/5"}`}
            >
              <div className="font-mono text-xs text-foreground/40 uppercase mb-2">{plan.title}</div>
              <div className="text-3xl font-sentient mb-1">{plan.price}</div>
              <div className="font-mono text-xs text-foreground/40 mb-6">{plan.desc}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Icon name="Check" size={14} className="text-primary mt-0.5 shrink-0" />
                    <span className="font-mono text-xs text-foreground/60">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <Button variant={i === 2 ? "default" : "outline"} className="w-full" size="sm">
                  {i === 0 ? "[Записаться бесплатно]" : "[Выбрать]"}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container py-32 mx-auto">
        <div className="text-center mb-16">
          <Pill className="mb-6">ОТЗЫВЫ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Что говорят <i className="font-light">родители</i>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="border border-foreground/10 rounded-2xl p-6 bg-foreground/5">
              <div className="font-mono text-xs text-primary uppercase mb-4">{r.score}</div>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed mb-6">"{r.text}"</p>
              <div className="font-mono text-xs text-foreground/40 uppercase">{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-32 mx-auto">
        <div className="border border-foreground/10 rounded-2xl p-12 md:p-20 text-center max-w-2xl mx-auto bg-foreground/5">
          <Pill className="mb-6">ЗАПИСАТЬСЯ</Pill>
          <h2 className="text-4xl md:text-5xl font-sentient mb-6">
            Первый урок — <i className="font-light">бесплатно</i>
          </h2>
          <p className="font-mono text-sm text-foreground/60 mb-10 max-w-md mx-auto">
            Напишите мне — обсудим цели, составим план и проведём пробное занятие без обязательств
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/" target="_blank" rel="noreferrer">
              <Button className="w-full sm:w-auto">[Написать в Telegram]</Button>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">[Написать в WhatsApp]</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container pb-12 mx-auto text-center">
        <div className="font-mono text-xs text-foreground/30 uppercase">
          © 2026 · Онлайн-репетитор · Все права защищены
        </div>
      </footer>
    </>
  );
}
