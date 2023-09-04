import { Book, AirplaneTilt, Handbag, ShootingStar, HandCoins } from "@phosphor-icons/react";
import Layout from "../../components/layout";
import { Canada, Grecia, Mexico } from "../../assets";

export default function Home() {
    return (
        <Layout>
            <article className="text-dark dark:text-white bg-white dark:bg-neutral-900">
                <section className="max-w-7xl mx-auto py-5 xl:py-16 px-5 xl:px-0" id="participar">
                    <h1 className="text-red text-4xl font-extrabold pb-5 text-center uppercase">Você pelo mundo</h1>
                    <p className="text-lg text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis voluptates architecto ab quisquam perspiciatis aperiam illum omnis at aspernatur excepturi nesciunt ipsum placeat, sint minima velit aut quia eaque hic?
                        Ducimus cumque quibusdam molestiae placeat expedita, repellat quisquam ea voluptas fugit aliquid perspiciatis perferendis sapiente vero possimus. Ratione laboriosam repellat cupiditate! Amet sint ex corporis, laboriosam quae quod qui laudantium!
                        Placeat facilis omnis quis quidem vel sequi rem velit? Quod ipsam ab reprehenderit earum eveniet soluta atque odio dolor maiores sequi, nobis voluptatum consectetur natus ipsum est totam!</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-10 text-center text-lg font-semibold italic">
                        <div>
                            <Handbag size={56} className="inline" />
                            <p>A cada <span className="text-red">R$1.000,00</span> em compras, ganhe um ponto.</p>
                        </div>

                        <div>
                            <HandCoins size={56} className='inline' />
                            <p>Você <span className="text-red">acumula compras</span> dentro do mês, e recebe <span className="text-red">pontos</span> para o ranking.</p>
                        </div>

                        <div>
                            <AirplaneTilt size={56} className="inline" />
                            <p>No total serão <span className="text-red">3 destinos</span>, para os <span className="text-red">3 primeiros</span> colocados.</p>
                        </div>

                        <div>
                            <ShootingStar size={56} className='inline' />
                            <p>Conquiste mais pontos e acompanhe seu <span className="text-red">desempenho</span> neste site.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-red flex flex-col justify-center items-center text-center py-5 xl:py-20 px-5 xl:px-0">
                    <h1 className="text-white text-4xl font-extrabold py-5 uppercase">Aceleradores: <br /> Ganhe o dobre de pontos!</h1>
                    <p className="text-white text-2xl">Você pode aumentar as chances de embarcar nessa viagem aproveitando os aceleradores. Veja como!</p>


                    <div className="w-full flex flex-wrap justify-around xl:justify-between max-w-7xl">
                        <div className="block max-w-sm p-6 bg-white dark:bg-neutral-900 rounded-lg shadow mt-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase">Fidelidade</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Os clientes que manteiverem a <span className="text-red">frêquencia de compras de R$5000,00</span> por toda a campanha ganharão <span className="text-red">30 pontos</span> a mais.</p>
                        </div>

                        <div className="block max-w-sm p-6 bg-white dark:bg-neutral-900 rounded-lg shadow mt-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase">Marca bônus da semana</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Toda semana uma das marcas pratocinadoras será a <span className="text-red">marca bônus da semana</span>, e você ganha <span className="text-red">2 pontos</span> extras.</p>
                        </div>

                        <div className="block max-w-sm p-6 bg-white dark:bg-neutral-900 rounded-lg shadow mt-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase">Marca bônus do mês</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Toda semana uma das marcas pratocinadoras será a <span className="text-red">marca bônus do mês</span>, e você ganha <span className="text-red">5 pontos</span> extras.</p>
                        </div>
                    </div>

                </section>

                <section className="max-w-7xl mx-auto py-10" id='destinos'>
                    <h1 className="text-red text-4xl font-extrabold pb-5 text-center uppercase">Destinos</h1>

                    <div className="flex flex-wrap-reverse xl:flex-nowrap justify-center xl:justify-between items-center">
                        <figure className="py-5 xl:pt-0 overflow-x-hidden md:overflow-visible">
                            <img src={Grecia} alt="" className="max-w-lg " />
                        </figure>
                        <div className="px-5 xl:pl-5 xl:pe-0 text-justify">
                            <h1 className="text-4xl font-extrabold pb-5">Grécia</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam, saepe provident veritatis rerum suscipit beatae numquam laboriosam error magnam, dolore quisquam recusandae dolorum sequi placeat eaque quaerat, sint ratione?
                                Fugiat dolorem dolorum quae vero voluptatum ad distinctio harum, libero nihil praesentium amet, dolore possimus. Rerum officiis quae eaque architecto quas atque accusantium laborum fuga maiores. Quidem incidunt quibusdam ab?
                                Nostrum, quas totam? Ad error beatae fugit nam quaerat perferendis sequi similique aperiam optio molestiae quod, libero magnam doloribus architecto! Voluptates magni vel autem quo, quidem excepturi placeat ipsa! Repudiandae.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between items-center">
                        <div className="px-5 xl:pr-5 xl:pl-0 text-justify">
                            <h1 className="text-4xl font-extrabold pb-5">México</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam, saepe provident veritatis rerum suscipit beatae numquam laboriosam error magnam, dolore quisquam recusandae dolorum sequi placeat eaque quaerat, sint ratione?
                                Fugiat dolorem dolorum quae vero voluptatum ad distinctio harum, libero nihil praesentium amet, dolore possimus. Rerum officiis quae eaque architecto quas atque accusantium laborum fuga maiores. Quidem incidunt quibusdam ab?
                                Nostrum, quas totam? Ad error beatae fugit nam quaerat perferendis sequi similique aperiam optio molestiae quod, libero magnam doloribus architecto! Voluptates magni vel autem quo, quidem excepturi placeat ipsa! Repudiandae.</p>
                        </div>
                        <figure className="py-5 xl:pt-0 overflow-x-hidden md:overflow-visible">
                            <img src={Mexico} alt="" className="max-w-lg" />
                        </figure>
                    </div>

                    <div className="flex flex-wrap-reverse xl:flex-nowrap justify-center xl:justify-between items-center">
                        <figure className="pt-5 xl:pt-0 overflow-x-hidden md:overflow-visible">
                            <img src={Canada} alt="" className="max-w-lg" />
                        </figure>
                        <div className="px-5 xl:pl-5 xl:pe-0 text-justify">
                            <h1 className="text-4xl font-extrabold pb-5">Canadá</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nam, saepe provident veritatis rerum suscipit beatae numquam laboriosam error magnam, dolore quisquam recusandae dolorum sequi placeat eaque quaerat, sint ratione?
                                Fugiat dolorem dolorum quae vero voluptatum ad distinctio harum, libero nihil praesentium amet, dolore possimus. Rerum officiis quae eaque architecto quas atque accusantium laborum fuga maiores. Quidem incidunt quibusdam ab?
                                Nostrum, quas totam? Ad error beatae fugit nam quaerat perferendis sequi similique aperiam optio molestiae quod, libero magnam doloribus architecto! Voluptates magni vel autem quo, quidem excepturi placeat ipsa! Repudiandae.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-red text-white flex flex-col justify-center items-center text-center py-12" id='regulamento'>
                    <Book size={56} className="inline" />
                    <h1 className="text-4xl font-extrabold py-5">Regulamento</h1>
                    <button className="bg-white text-red rounded py-3 px-10">Leia o regulamento completo</button>
                </section>
            </article>
        </Layout>
    )
}