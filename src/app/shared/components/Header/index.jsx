const Header = () => {
    return (
        <header className={`top-0 left-0 z-50 bg-headerBg w-full`}>
            <div className={`bg-primary text-white px-2 py-1`}>Ana Sayfa</div>
            <div className={`border`}>
                <div className={`py-3  items-center px-3 grid grid-cols-3 container mx-auto`}>
                    <div></div>
                    <div className={`m-3 relative`}>
                        <input placeholder={`Aradığınız ürün veya markayı yazınız...`}
                               className={` w-full h-11 px-3 min-w-96 border rounded-full`} />
                        <button className={`absolute right-2 top-2 w-7 h-7 bg-primary text-white flex justify-center align-center rounded-full`}>o</button>
                    </div>
                    <div className={`text-right`}>
                        <button className={`border-primary border-2 text-primary font-bold px-6 py-2 rounded-full`}>İlan Giriş</button>
                        <button className={`bg-primary text-white px-6 py-2 border-2 border-primary  font-bold  rounded-full ml-2`}>Üye Giriş</button>
                    </div>
                </div>
            </div>
            <div className={`bg-white border-b`}>
                <div className={`container mx-auto`}>
                    <button className={`text-gray-500 font-bold border-l border-r py-4 px-6`}>Kategoriler</button>
                </div>
            </div>
        </header>
    );
}
export default Header;