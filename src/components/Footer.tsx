import { Logo, LogoDark } from "../assets";

export function Footer() {
    return (
        <footer className="bg-slate-100 dark:bg-neutral-950 text-dark dark:text-white">
            <article className="w-full max-w-screen-xl mx-auto p-2 md:py-4">
                <section className="flex flex-wrap-reverse items-center justify-center md:justify-between text-center md:text-start">
                    <div>
                        <p>Dúvidas? Escreva para: <a href="#" className="text-red font-semibold">atendimento@proximajornada.com.br</a></p>
                        <p>Promoção válida de 00/00/2023 a 00/00/2023. Imagens meramente ilustrativas.</p>
                    </div>
                    <a href="#" className="flex items-center mb-4 sm:mb-0">
                    <img src={Logo} className="h-20 dark:hidden" alt="Logo Proxima jornada" />
                        <img src={LogoDark} className="h-20 hidden dark:flex" alt="Logo Proxima jornada"/>
                    </a>
                </section>
            </article>
        </footer>
    )
}