
import './globals.css';

export const metadata = {
  title: 'E-Commerce Catalog',
  description: 'Production-ready e-commerce catalog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
