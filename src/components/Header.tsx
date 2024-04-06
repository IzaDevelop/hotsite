import { List, Moon, Sun } from "@phosphor-icons/react";
import { Logo, LogoDark } from "../assets";
import { useAppContext } from "../context/AppContext";

export function Header() {
    const {
        menu,
        setMenu,
        theme,
        handleToggleTheme
    } = useAppContext();

    return (
        <header>
            <nav className="bg-slate-100 dark:bg-neutral-950 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center">
                        <img src={Logo} className="h-20 dark:hidden" alt="Logo Proxima jornada" />
                        <img src={LogoDark} className="h-20 hidden dark:flex" alt="Logo Proxima jornada" />
                    </a>
                    <button onClick={() => setMenu(!menu)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <List size={40} weight="bold" className="dark:text-white" />
                    </button>

                    <div onClick={() => setMenu(false)}
                        className={`md:block md:w-auto w-full bg-slate-100 dark:bg-neutral-950 ${menu ? "visible absolute top-[100px] right-0" : "hidden"}`}
                    >
                        <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-100 md:dark:bg-neutral-950 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#destinos" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-red md:p-0 dark:text-white dark:hover:text-red">Destinos</a>
                            </li>
                            <li>
                                <a href="#participar" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-red md:p-0 dark:text-white dark:hover:text-red">Como participar</a>
                            </li>
                            <li>
                                <a href="#regulamento" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-red md:p-0 dark:text-white dark:hover:text-red">Regulamento</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-red md:p-0 dark:text-white dark:hover:text-red">Contato</a>
                            </li>
                            <li>
                                {theme ? (
                                    <button
                                        type="button"
                                        onClick={handleToggleTheme}
                                        className="ps-2 lg:ps-0 pt-1 rounded focus:border-0 dark:text-white dark:hover:text-red w-full"
                                    >
                                        <Sun size={23} />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleToggleTheme}
                                        className="ps-2 lg:ps-0 pt-1 rounded focus:border-0 hover:text-red w-full"
                                    >
                                        <Moon size={23} />
                                    </button>
                                )}

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}