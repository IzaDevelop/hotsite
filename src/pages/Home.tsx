import { Book, AirplaneTilt, Handbag, ShootingStar, HandCoins } from "@phosphor-icons/react";
import { Layout } from "../components/Layout";
import { Canada, Destaque, Grecia, Mexico } from "../assets";
import { Card } from "../components/Card";

export default function Home() {
    return (
        <Layout>
            <article className="text-dark dark:text-white bg-white dark:bg-neutral-900">
                <section className="py-5 xl:py-10 px-5 xl:px-0" id="destinos">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-red text-2xl md:text-3xl font-extrabold pb-5 text-center uppercase">Você pelo mundo</h1>
                        <p className="md:text-xl text-center">Qual será sua próxima jornada? <br /> Nós podemos levar você para visitar as paisagens encantadoras do Canadá, mergulhar nas águas cristalinas do Mar Egeu na Grécia ou conhecer as praias paradisíacas a sítios arqueológicos fascinantes no México.
                        <br /> Escolha seu itinerário, confira os produtos participantes, capriche nas compras e embarque nesta grande viagem!</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-5 max-w-7xl mx-auto mt-10">
                        <Card
                            image={Canada}
                            title={'Canadá'}
                            description={'Um país para todos os gostos, seja explorando as Montanhas Rochosas, admirando as Cataratas do Niágara ou se perdendo na energia cosmopolita de Toronto.'}
                            button={'Saiba mais'}
                        />

                        <Card
                            image={Grecia}
                            title={'Grécia'}
                            description={'Imagine-se maravilhando-se com as vistas de tirar o fôlego dos famosos penhascos de Santorini, a história e a beleza se fundem para criar uma experiência inesquecível.'}
                            button={'Saiba mais'}
                        />

                        <Card
                            image={Mexico}
                            title={'México'}
                            description={'Praias paradisíacas a sítios arqueológicos fascinantes, cultura rica e a culinária deliciosa aguardam por você. cada momento é uma aventura que desperta os sentidos.'}
                            button={'Saiba mais'}
                        />
                    </div>
                </section>

                <section className="py-5 xl:py-0 px-5 xl:px-0" id="participar">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-red text-2xl md:text-3xl font-extrabold py-5 uppercase text-center">Confira como participar</h1>
                        <p className="md:text-xl text-center">Cada compra é uma oportunidade de transformar seus sonhos em realidade. Não perca a chance de ganhar uma viagem inesquecível. Prepare-se para embarcar na aventura da sua vida, sua próxima jornada está a caminho!</p>
                    </div>
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 py-10 text-center text-sm lg:text-lg font-semibold italic">
                        <div>
                            <Handbag size={56} className="inline" />
                            <p>A cada <span className="text-red">R$1.000,00</span> em compras, ganhe um ponto e suba no ranking.</p>
                        </div>

                        <div>
                            <HandCoins size={56} className='inline' />
                            <p>Você <span className="text-red">acumula compras</span> dentro do mês, e recebe <span className="text-red">pontos</span> para o ranking.</p>
                        </div>

                        <div>
                            <AirplaneTilt size={56} className="inline" />
                            <p>No total serão <span className="text-red">3 destinos</span>, para os <span className="text-red">3 primeiros</span> colocados de cada ranking.</p>
                        </div>

                        <div>
                            <ShootingStar size={56} className='inline' />
                            <p>Conquiste mais pontos e acompanhe seu <span className="text-red">desempenho</span> neste site.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-red flex flex-col justify-center items-center text-center py-5 xl:py-16 px-5 xl:px-0">
                    <h1 className="text-white text-2xl md:text-3xl font-extrabold pb-5 uppercase">Aceleradores: <br /> Ganhe o dobre de pontos!</h1>
                    <p className="text-white md:text-xl">Você pode aumentar as chances de embarcar nessa viagem aproveitando os aceleradores. Veja como!</p>


                    <div className="w-full flex flex-wrap justify-around xl:justify-between max-w-7xl">
                        <div className="block max-w-sm p-6 bg-white dark:bg-neutral-900 rounded-lg shadow mt-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase">Fidelidade</h5>
                            <p className="font-normal md:text-lg text-gray-700 dark:text-gray-400">Os clientes que manteiverem a <span className="text-red">frêquencia de compras de R$5.000,00</span> por três meses da campanha ganharão <span className="text-red">50 pontos</span> a mais.</p>
                        </div>

                        <div className="block max-w-sm p-6 bg-white dark:bg-neutral-900 rounded-lg shadow mt-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase">Marca bônus da semana</h5>
                            <p className="font-normal md:text-lg text-gray-700 dark:text-gray-400">Toda semana teremos uma marca pratocinadora que será a <span className="text-red">marca bônus da semana</span>, e você ganha <span className="text-red">5 pontos</span> extras.</p>
                        </div>

                        <div className="block max-w-sm p-6 bg-white dark:bg-neutral-900 rounded-lg shadow mt-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase">Marca bônus do mês</h5>
                            <p className="font-normal md:text-lg text-gray-700 dark:text-gray-400">Durante o mês uma marca pratocinadora será a <span className="text-red">marca bônus do mês</span>, e você ganha <span className="text-red">10 pontos</span> extras.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-neutral-900 dark:text-white text-black flex flex-col justify-center items-center text-center py-12" id='regulamento'>
                    <Book size={56} className="inline" />
                    <h1 className="text-4xl font-extrabold py-5">Regulamento</h1>
                    <button className="bg-red text-white rounded py-3 px-10">Confira o regulamento completo</button>
                </section>

                <section className="flex justify-center text-center relative overflow-hidden">
                    <img src={Destaque} alt="" className="object-cover w-full max-h-80"/>
                </section>
            </article>
        </Layout>
    )
}