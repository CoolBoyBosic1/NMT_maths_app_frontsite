import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./styles/styles.css";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Kitacademy",
  description: "Онлайн-тести НМТ",
  icons: {
    icon: "/tab-icon.png",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        {/* Верхній блок із назвою і реєстрацією */}
        <header className="container d-flex justify-content-between align-items-center py-3 border-bottom">
          {/* Назва проекту */}
          <div>
            <a
              href="/"
              className="text-decoration-none text-primary fw-bold"
              style={{fontSize: "1.5rem"}}
            >
              <Image
                src="/kitacademy-logo-edited.png"
                alt="Kitacademy logo"
                width={200}
                height={50}
              />
            </a>
          </div>

          {/* Посилання для реєстрації/входу */}
          <div>
            <a className="text-primary me-3" href="/register">
              Реєстрація/Увійти
            </a>
            <a className="text-primary" href="/profile">
              <i className="bi bi-person"></i>
            </a>
          </div>
        </header>

        {/* Основний вміст сторінки */}
        <main className="flex-grow-1">{children}</main>

        {/* Футер */}
        <footer className="py-4 bg-light border-top">
          <div className="container text-center">
            <p className="m-0 text-muted">
              Контакти:
              <br />
              Email: helloworld_maths_NMT@gmail.com
              <br />
              Telegram: @helloworld_maths_NMT
              <br />© 2025 «Maths.ua».
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
