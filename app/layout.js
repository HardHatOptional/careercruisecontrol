export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Career Cruise Control</title>
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.abacusConfig = {
                applicationId: "39f0a1e80",
                deploymentId: "118f37e56"
              };
            `
          }}
        />
        <script 
          src="https://abacus.ai/widget.js"
          async
        />
      </body>
    </html>
  );
}