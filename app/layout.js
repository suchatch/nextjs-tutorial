export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>Header</div>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
