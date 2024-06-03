export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div>루트레이아웃</div>
                {children}
            </body>
        </html>
    );
}
