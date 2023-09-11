import ItemsList from "./ItemsList"

const MenuCategory = ({categoryData})=>{
    return(
        <div className="my-3 p-3 bottom-7 shadow-md ">
            <div className="flex justify-between">
                <span className="font-extrabold text-sm text-[#3e4152]">{categoryData.title} ({categoryData.itemCards.length})</span>
            <span>🔽</span>
            </div>
            <ItemsList items={categoryData.itemCards}/>
        </div>
        
    )
}

export default MenuCategory