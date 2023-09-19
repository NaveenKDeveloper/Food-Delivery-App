import ItemsList from "./ItemsList"

const MenuCategory = ({categoryData,showItem,setShowItem})=>{

    const isShow = ()=> {
        setShowItem()
    }
    
    return(
        <div className="my-3 p-3 bottom-7 shadow-md cursor-pointer" onClick={isShow}>
            <div className="flex justify-between">
                <span className="font-extrabold text-sm text-[#3e4152]">{categoryData.title} ({categoryData.itemCards.length})</span>
            <span>🔽</span>
            </div>
            {showItem && <ItemsList items={categoryData.itemCards} key={categoryData.title} isShow={true}/>}
        </div>
        
    )
}

export default MenuCategory