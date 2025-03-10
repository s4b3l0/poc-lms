
import "./globals.css";
import {PrimeReactProvider} from "primereact/api";
import React from "react";
import 'primereact/resources/themes/saga-blue/theme.css';  // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import NavBar from "lms-/app/components/nav-bar";
import {Logo} from "lms-/app/components/logo";
import SidePanel from "lms-/app/components/right-panel";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

          <PrimeReactProvider >
              <NavBar/>
              <SidePanel/>
              <Logo/>
              {children}
          </PrimeReactProvider>
      </body>
    </html>
  );
}
