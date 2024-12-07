import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <title>Academy- Balcones</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/aca logo.png" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
