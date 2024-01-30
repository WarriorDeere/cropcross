import { Toolbox, Content } from "../shared/components/main_app";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                <Toolbox />
                <Content />
                {children}
            </body>
        </html>
    );
}