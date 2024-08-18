interface TelegramWebApp  {
    ready(): void,
    MainButton: {
        setText(text: string): void;
        setColor(color: string): void;
        show(): void;
        hide(): void;
        onClick(callback: () => void): void;
      };
}

interface Telegram {
    WebApp: TelegramWebApp
}

interface Window {
    Telegram: Telegram
}