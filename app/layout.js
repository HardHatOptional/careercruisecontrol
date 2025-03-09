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
                position: "bottom-right",
                initialMessage: "👋 Welcome! I'm here to personalize your career guidance experience. How can I assist you today?",
                theme: {
                  botIcon: null,
                  bubbleIcon: "💼",
                  fontFamily: "Inter, system-ui, sans-serif",
                  headerText: "Career Assistant",
                  borderRadius: "12px",
                  primaryColor: "#2563eb",
                  backgroundColor: "#ffffff",
                  chatBubbleStyle: "modern"
                },
                bubbleButton: {
                  text: "Need career guidance?",
                  showIcon: true
                },
                autoOpen: false,
                allowAttachments: true
              };
            `
          }}
        />
        <script 
          async 
          src="https://cdn.abacus.ai/app-embed/chat-widget.js"
        />
      </body>
    </html>
  );
}