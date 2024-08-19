interface TelegramWebApp  {
    ready(): void,
    MainButton: {
        setText(text: string): void;
        setColor(color: string): void;
        show(): void;
        hide(): void;
        onClick(callback: () => void): void;
    },
    initDataUnsafe: {
        auth_date: string,
        chat_instance: string,
        chat_type: string,
        hash: string,
        user: {
            allows_write_to_pm: boolean,
            first_name: string,
            id: number,
            language_code: string,
            last_name: string,
            username: string
        }
    }
}

interface Telegram {
    WebApp: TelegramWebApp
}

interface Window {
    Telegram: Telegram
}