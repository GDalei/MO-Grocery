const stats = [
    { id: 1, name: ["Ganesh", "sdsdsd"], value: 'Home' },
    { id: 2, name: ["Atta , rice", "Dal varaity pulses", "Milk products", "Suji, sugar","Mobile assesories", "Puja products", "Spices", "Beverages", "Cosmetics", "Icecream", "Biscuit and mixture"], value: 'Category ' },
    { id: 3, name: ["sdsds", "sdsdsd"], value: 'My Basket' },

]
import style from './style.module.css';
export default function FooterComponent() {
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className={`text-base leading-7 text-gray-600 ${style.footrContain}`}>{stat.name.map((value) => {
                                return <div>{value}</div>
                            })}</dt>
                            <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900 ">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
