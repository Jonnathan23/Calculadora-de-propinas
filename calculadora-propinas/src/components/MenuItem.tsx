import { MenuItemType } from "../types"

type MenuProps = {
    item: MenuItemType
<<<<<<< HEAD
    addOrder: (item:MenuItemType) => void

}


export default function MenuItems({ item, addOrder }: MenuProps) {
=======
}


export default function MenuItems({ item }: MenuProps) {
>>>>>>> c6721cde3bd23bfc5409434b3246d34f4b9734a5
    return (
        <>
            <button
            className="border-2 border-teal-400 hover:bg-teal-200  w-full p-3 flex justify-between"
<<<<<<< HEAD
            onClick={() => addOrder(item)}
=======
>>>>>>> c6721cde3bd23bfc5409434b3246d34f4b9734a5
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>

        </>
    )
}
