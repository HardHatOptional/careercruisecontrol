export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Career Cruise Control</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.abacusConfig = {
                applicationId: "39f0a1e80",
                deploymentId: "118f37e56",
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
      </head>
      <body>
        {children}
        <script 
          src="https://static.abacus.ai/chat-widget/chat-widget.js"
          async
        />
      </body>
    </html>
  );
}