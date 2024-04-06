export interface AppInterface {
    theme: boolean;
    handleToggleTheme: () => void;

    menu: boolean;
    setMenu: (value: boolean) => void;
}

export interface CardInterface {
    image: string;
    title: string;
    description: string;
    button: string;
}