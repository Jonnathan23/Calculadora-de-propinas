import { MenuItemType } from "../types"

type MenuProps = {
    item: MenuItemType
    addOrder: (item:MenuItemType) => void

}


export default function MenuItems({ item, addOrder }: MenuProps) {
    return (
        <>
            <button
            className="border-2 border-teal-400 hover:bg-teal-200  w-full p-3 flex justify-between"
            onClick={() => addOrder(item)}
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>

        </>
    )
}
