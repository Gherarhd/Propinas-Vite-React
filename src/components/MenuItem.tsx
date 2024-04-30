import { MenuItems } from "../types"


type MenuItemProps={
    item:MenuItems
}




export default function MenuItem({item}: MenuItemProps) {
  return (
<>
 <button className="border border-teal-400 hover:bg-teal-200 p-3 w-full flex justify-between rounded ">

<p>{item.name}</p>
<p className="font-black">${item.price}</p>
</button>
</>
  )
}
