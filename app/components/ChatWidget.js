'use client';
import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    const loadWidget = async () => {
      try {
        // Add config first
        const configScript = document.createElement('script');
        configScript.type = 'text/javascript';
        configScript.innerHTML = `
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
        `;
        document.body.appendChild(configScript);

        // Add widget script
        const widgetScript = document.createElement('script');
        widgetScript.type = 'text/javascript';
        widgetScript.async = true;
        widgetScript.src = "https://abacus.ai/app-embed/chat-widget.js";
        document.body.appendChild(widgetScript);

        return () => {
          document.body.removeChild(configScript);
          if (widgetScript.parentNode) {
            document.body.removeChild(widgetScript);
          }
        };
      } catch (error) {
        console.error('Error loading chat widget:', error);
      }
    };

    loadWidget();
  }, []);

  return null;
}