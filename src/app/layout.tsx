import type { Metadata } from "next";
import StyledComponentsRegistry from "@/components/RegisterStyle";
import GlobalStyle from "@/components/GlobalStyle";
import {MobileProvider} from "@/app/MobileContext";
import MainContainer from "@/components/MainContainer";

export const metadata: Metadata = {
  title: "Web terminal",
  description: "Web terminal",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

            <StyledComponentsRegistry>
                <GlobalStyle/>
                <MainContainer>
                    <MobileProvider>    {children}    </MobileProvider>
                </MainContainer>
            </StyledComponentsRegistry>
      </body>
    </html>
  );
}


