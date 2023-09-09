const MenuCategory = ({categoryData})=>{
    return(
        <div className="my-3 p-3 bottom-7 shadow-md flex justify-between">
            <span className="font-extrabold text-sm text-[#3e4152]">{categoryData.title}</span>
            <span>🔽</span>
        </div>
        
    )
}

export default MenuCategory