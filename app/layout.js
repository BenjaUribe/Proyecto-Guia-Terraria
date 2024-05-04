import "@/app/globals.css";
import { Providers } from "./providers";


export const metadata = {
  title: "Guia Terraria",
  description: "Pagina con el fin de proporcionar una guia sobre los bosses y eventos de Terraria",
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