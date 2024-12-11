export default function Page() {
  return (
    <>
      {/* Верхній блок з Реєстрацією та іконкою користувача */}
      <div className="container mt-3 d-flex justify-content-end align-items-center gap-3">
        <a className="text-primary" href="/register">Реєстрація/Увійти</a>
        <a className="text-primary" href="/profile">
          <i className="bi bi-person"></i>
        </a>
      </div>

      {/* Хедер */}
      <header className="bg-white py-5 border-bottom">
        <div className="container px-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="fw-bold display-4 text-primary mb-2">Maths</h1>
              <p className="lead text-dark mb-4">онлайн-тести НМТ з математики</p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a className="btn btn-outline-primary btn-lg" href="#!">Швидкий тест у форматі НМТ</a>
                <a className="btn btn-outline-primary btn-lg" href="#!">Створити індивідуальну програму</a>
                <a className="btn btn-outline-primary btn-lg" href="#!">Розв’язування задач</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Секція "Чому обрати нас?" */}
      <section className="py-5">
        <div className="container px-5">
          <h2 className="fw-bolder mb-4 text-center text-primary">Чому обрати нас?</h2>
          <div className="row gx-5 gy-4 justify-content-center">
            <div className="col-md-4">
              <h3 className="h5 fw-bold">Інтерактивні тести</h3>
              <p className="mb-0">Велика кількість тестових завдань, що охоплюють всі теми НМТ</p>
            </div>
            <div className="col-md-4">
              <h3 className="h5 fw-bold">Миттєвий зворотний зв’язок</h3>
              <p className="mb-0">Автоматичне оцінювання результатів та пояснення правильних відповідей</p>
            </div>
            <div className="col-md-4">
              <h3 className="h5 fw-bold">Аналіз прогресу</h3>
              <p className="mb-0">Відстеження ваших досягнень та визначення слабких місць</p>
            </div>
            <div className="col-md-4 mt-4">
              <h3 className="h5 fw-bold">Персоналізовані рекомендації</h3>
              <p className="mb-0">Пропозиції щодо додаткових тестів на основі ваших результатів</p>
            </div>
            <div className="col-md-4 mt-4">
              <h3 className="h5 fw-bold">Доступність 24/7</h3>
              <p className="mb-0">Навчайтеся у зручний для вас час та з будь-якого місця</p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-4 bg-light border-top">
        <div className="container px-5 text-center">
          <p className="m-0 text-muted">
            Контакти:<br />
            Email: helloworld_maths_NMT@gmail.com<br />
            Telegram: @helloworld_maths_NMT<br />
            © 2025 «Maths.ua».
          </p>
        </div>
      </footer>
    </>
  );
}
