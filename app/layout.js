import "@/app/globals.css";
import { Providers } from "./providers";


export const metadata = {
  title: "Ocupación de salas",
  description: "Desafio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}