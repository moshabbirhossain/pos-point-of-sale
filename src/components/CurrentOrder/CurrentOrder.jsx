const CurrentOrder = () => {
    return (
        <div>
            {/* header */}
            <div className="flex flex-row items-center justify-between px-5 mt-5">
                <div className="font-bold text-xl">Current Order</div>
                <div className="font-semibold flex gap-2">
                    <span className="px-3 py-2 rounded-lg bg-pink-500 text-white">
                        Clear All
                    </span>
                    <span className="px-3 py-2 rounded-lg bg-gray-100 text-gray-800">
                        Setting
                    </span>
                </div>
            </div>
            {/* end header */}
            {/* order list */}
            <div className="px-4 py-4 mt-8 overflow-y-auto h-60">
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="flex flex-row items-center w-2/5">
                        <img
                            src="https://source.unsplash.com/4u_nRgiLW3M/600x600"
                            className="w-10 h-10 object-cover rounded-md"
                            alt=""
                        />
                        <span className="ml-4 font-semibold text-sm">
                            Stuffed flank steak
                        </span>
                    </div>
                    <div className="w-32 flex justify-between">
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            -
                        </span>
                        <span className="font-semibold mx-4">2</span>
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            +
                        </span>
                    </div>
                    <div className="font-semibold text-sm w-16 text-center">
                        $13.50
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="flex flex-row items-center w-2/5">
                        <img
                            src="https://source.unsplash.com/sc5sTPMrVfk/600x600"
                            className="w-10 h-10 object-cover rounded-md"
                            alt=""
                        />
                        <span className="ml-4 font-semibold text-sm">
                            Grilled Corn
                        </span>
                    </div>
                    <div className="w-32 flex justify-between">
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            -
                        </span>
                        <span className="font-semibold mx-4">10</span>
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            +
                        </span>
                    </div>
                    <div className="font-semibold text-sm w-16 text-center">
                        $3.50
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="flex flex-row items-center w-2/5">
                        <img
                            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
                            className="w-10 h-10 object-cover rounded-md"
                            alt=""
                        />
                        <span className="ml-4 font-semibold text-sm">
                            Grilled Corn
                        </span>
                    </div>
                    <div className="w-32 flex justify-between">
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            -
                        </span>
                        <span className="font-semibold mx-4">10</span>
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            +
                        </span>
                    </div>
                    <div className="font-semibold text-sm w-16 text-center">
                        $3.50
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="flex flex-row items-center w-2/5">
                        <img
                            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
                            className="w-10 h-10 object-cover rounded-md"
                            alt=""
                        />
                        <span className="ml-4 font-semibold text-sm">
                            Grilled Corn
                        </span>
                    </div>
                    <div className="w-32 flex justify-between">
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            -
                        </span>
                        <span className="font-semibold mx-4">10</span>
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            +
                        </span>
                    </div>
                    <div className="font-semibold text-sm w-16 text-center">
                        $3.50
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="flex flex-row items-center w-2/5">
                        <img
                            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
                            className="w-10 h-10 object-cover rounded-md"
                            alt=""
                        />
                        <span className="ml-4 font-semibold text-sm">
                            Ranch Burger
                        </span>
                    </div>
                    <div className="w-32 flex justify-between">
                        <span className="px-3 py-1 rounded-md bg-pink-500 text-white">
                            x
                        </span>
                        <span className="font-semibold mx-4">1</span>
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            +
                        </span>
                    </div>
                    <div className="font-semibold text-sm w-16 text-center">
                        $2.50
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <div className="flex flex-row items-center w-2/5">
                        <img
                            src="https://source.unsplash.com/4u_nRgiLW3M/600x600"
                            className="w-10 h-10 object-cover rounded-md"
                            alt=""
                        />
                        <span className="ml-4 font-semibold text-sm">
                            Ranch Burger
                        </span>
                    </div>
                    <div className="w-32 flex justify-between">
                        <span className="px-3 py-1 rounded-md bg-pink-500 text-white">
                            x
                        </span>
                        <span className="font-semibold mx-4">1</span>
                        <span className="px-3 py-1 rounded-md bg-gray-300 ">
                            +
                        </span>
                    </div>
                    <div className="font-semibold text-sm w-16 text-center">
                        $2.50
                    </div>
                </div>
            </div>
            {/* end order list */}
            {/* totalItems */}
            <div className="px-5 mt-5">
                <div className="py-4 rounded-md shadow-sm">
                    <div className=" px-4 flex justify-between ">
                        <span className="font-semibold text-sm">Subtotal</span>
                        <span className="font-bold">$35.25</span>
                    </div>
                    <div className=" px-4 flex justify-between ">
                        <span className="font-semibold text-sm">Discount</span>
                        <span className="font-bold">- $5.00</span>
                    </div>
                    <div className=" px-4 flex justify-between ">
                        <span className="font-semibold text-sm">Sales Tax</span>
                        <span className="font-bold">$2.25</span>
                    </div>
                    <div className="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
                        <span className="font-semibold text-2xl">Total</span>
                        <span className="font-bold text-2xl">$37.50</span>
                    </div>
                </div>
            </div>
            {/* end total */}
            {/* cash */}
            <div className="px-5 mt-5">
                <div className="rounded-md shadow-sm px-4 py-4">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <span className="uppercase text-xs font-semibold">
                                cashless credit
                            </span>
                            <span className="text-xl font-bold text-yellow-500">
                                $32.50
                            </span>
                            <span className=" text-xs text-gray-400 ">
                                Available
                            </span>
                        </div>
                        <div className="px-4 py-3 bg-gray-300 text-gray-800 rounded-md font-bold">
                            {" "}
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
            {/* end cash */}
            {/* button pay*/}
            <div className="px-5 mt-5">
                <div className="px-4 py-4 rounded-md shadow-sm text-center bg-yellow-500 text-white font-semibold">
                    Pay With Cashless Credit
                </div>
            </div>
            {/* end button pay */}
        </div>
    );
};

export default CurrentOrder;
