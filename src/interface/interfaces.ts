export interface AppInterface {
    theme: boolean;
    handleToggleTheme: () => void;

    menu: boolean;
    setMenu: (value: boolean) => void;
}