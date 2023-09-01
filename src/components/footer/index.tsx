import { Logo } from "../../assets";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-neutral-950 text-dark dark:text-white">
            <article className="w-full max-w-screen-xl mx-auto p-2 md:py-4">
                <section className="flex flex-wrap-reverse items-center justify-center md:justify-between">
                    <div>
                        <p>Dúvidas? Escreva para: <a href="#" className="text-red font-semibold">atendimento@hotsite.com.br</a></p>
                        <p>Promoção válida de 00/00/2023 a 00/00/2023. Imagens meramente ilustrativas.</p>
                    </div>
                    <a href="#" className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="h-24 dark:invert" alt="Logo Hotsite" />
                    </a>
                </section>
            </article>
        </footer>
    )
}