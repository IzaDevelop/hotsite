import { CardInterface } from "../interface/interfaces";

export function Card(props: CardInterface) {
    return (
        <div className="max-w-sm bg-white dark:bg-neutral-950 rounded-lg shadow-md relative h-auto flex flex-col">
            <figure>
                <img className="rounded-t-lg" src={props.image} alt="" />
            </figure>
            <div className="p-3 flex flex-col flex-1">
                <div className="flex-1">
                    <h5 className="text-2xl font-bold tracking-tight text-body pb-2" dangerouslySetInnerHTML={{ __html: props.title }}></h5>

                    <p className="font-normal text-alternate pb-2" dangerouslySetInnerHTML={{ __html: props.description }}></p>
                </div>

                <div>
                    <button className={`inline-flex items-center px-8 py-3 text-base font-semibold text-center bg-red text-white rounded-lg`} dangerouslySetInnerHTML={{ __html: props.button }}></button>
                </div>
            </div>
        </div>
    )
}