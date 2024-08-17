import CurrentOrder from "./components/CurrentOrder/CurrentOrder";

const App = () => {
    return (
        <>
            <div className="container mx-auto px-4 bg-white">
                <div className="flex sm:flex-row flex-col-reverse shadow-sm">
                    {/* left section */}
                    <div className="w-full sm:w-3/5 min-h-screen shadow-sm">
                        {/* header */}
                        <div className="flex flex-row justify-between items-center px-4 mt-6">
                            <div className="text-gray-800">
                                <div className="font-bold text-xl">
                                    Hossain's Grocery
                                </div>
                                <span className="text-xs">
                                    Tetulia, Panchagarh
                                </span>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm text-center mr-4">
                                    <div className="font-light text-gray-500">
                                        Last synced
                                    </div>
                                    <span className="font-semibold">
                                        5 mins ago
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded">
                                        Help
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* end header */}
                        {/* categories */}
                        <div className="mt-8 flex flex-row px-5">
                            <span className="px-4 py-1 bg-orange-500 rounded-xl text-white text-sm mr-4">
                                All items
                            </span>
                            <span className="px-4 py-1 rounded-2xl text-sm font-semibold mr-4">
                                Food
                            </span>
                            <span className="px-4 py-1 rounded-2xl text-sm font-semibold mr-4">
                                Soft Drinks
                            </span>
                            <span className="px-4 py-1 rounded-2xl text-sm font-semibold mr-4">
                                Hot Drinks
                            </span>
                        </div>
                        {/* end categories */}
                        {/* products */}
                        <div className="grid grid-cols-3 gap-4 px-4 mt-8 overflow-y-auto h-3/4">
                            <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-lg h-32 justify-between">
                                <div className="flex flex-row justify-between">
                                    <img
                                        src="https://i.ibb.co/1qNX6pr/pizza.png"
                                        className=" h-14 w-14 object-cover rounded-lg"
                                        alt=""
                                    />
                                    <span className="font-light text-sm text-gray-400 self-start">
                                        150g
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="font-bold text-gray-800 self-end">
                                        Griled corn
                                    </div>
                                    <span className="self-end font-bold text-sm text-orange-400">
                                        $1.75
                                    </span>
                                </div>
                            </div>
                            <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-lg h-32 justify-between">
                                <div className="flex flex-row justify-between">
                                    <img
                                        src="https://i.ibb.co/1qNX6pr/pizza.png"
                                        className=" h-14 w-14 object-cover rounded-lg"
                                        alt=""
                                    />
                                    <span className="font-light text-sm text-gray-400 self-start">
                                        150g
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="font-bold text-gray-800 self-end">
                                        Griled corn
                                    </div>
                                    <span className="self-end font-bold text-sm text-orange-400">
                                        $1.75
                                    </span>
                                </div>
                            </div>
                            <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-lg h-32 justify-between">
                                <div className="flex flex-row justify-between">
                                    <img
                                        src="https://i.ibb.co/1qNX6pr/pizza.png"
                                        className=" h-14 w-14 object-cover rounded-lg"
                                        alt=""
                                    />
                                    <span className="font-light text-sm text-gray-400 self-start">
                                        150g
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="font-bold text-gray-800 self-end">
                                        Griled corn
                                    </div>
                                    <span className="self-end font-bold text-sm text-orange-400">
                                        $1.75
                                    </span>
                                </div>
                            </div>
                            <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-lg h-32 justify-between">
                                <div className="flex flex-row justify-between">
                                    <img
                                        src="https://i.ibb.co/1qNX6pr/pizza.png"
                                        className=" h-14 w-14 object-cover rounded-lg"
                                        alt=""
                                    />
                                    <span className="font-light text-sm text-gray-400 self-start">
                                        150g
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="font-bold text-gray-800 self-end">
                                        Griled corn
                                    </div>
                                    <span className="self-end font-bold text-sm text-orange-400">
                                        $1.75
                                    </span>
                                </div>
                            </div>
                            <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-lg h-32 justify-between">
                                <div className="flex flex-row justify-between">
                                    <img
                                        src="https://i.ibb.co/1qNX6pr/pizza.png"
                                        className=" h-14 w-14 object-cover rounded-lg"
                                        alt=""
                                    />
                                    <span className="font-light text-sm text-gray-400 self-start">
                                        150g
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="font-bold text-gray-800 self-end">
                                        Griled corn
                                    </div>
                                    <span className="self-end font-bold text-sm text-orange-400">
                                        $1.75
                                    </span>
                                </div>
                            </div>
                            <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-lg h-32 justify-between">
                                <div className="flex flex-row justify-between">
                                    <img
                                        src="https://i.ibb.co/1qNX6pr/pizza.png"
                                        className=" h-14 w-14 object-cover rounded-lg"
                                        alt=""
                                    />
                                    <span className="font-light text-sm text-gray-400 self-start">
                                        150g
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="font-bold text-gray-800 self-end">
                                        Griled corn
                                    </div>
                                    <span className="self-end font-bold text-sm text-orange-400">
                                        $1.75
                                    </span>
                                </div>
                            </div>
                            <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-lg h-32 justify-between">
                                <div className="flex flex-row justify-between">
                                    <img
                                        src="https://i.ibb.co/1qNX6pr/pizza.png"
                                        className=" h-14 w-14 object-cover rounded-lg"
                                        alt=""
                                    />
                                    <span className="font-light text-sm text-gray-400 self-start">
                                        150g
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="font-bold text-gray-800 self-end">
                                        Griled corn
                                    </div>
                                    <span className="self-end font-bold text-sm text-orange-400">
                                        $1.75
                                    </span>
                                </div>
                            </div>
                            <div className="px-3 py-3 flex flex-col border border-gray-200 rounded-lg h-32 justify-between">
                                <div className="flex flex-row justify-between">
                                    <img
                                        src="https://i.ibb.co/1qNX6pr/pizza.png"
                                        className=" h-14 w-14 object-cover rounded-lg"
                                        alt=""
                                    />
                                    <span className="font-light text-sm text-gray-400 self-start">
                                        150g
                                    </span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="font-bold text-gray-800 self-end">
                                        Griled corn
                                    </div>
                                    <span className="self-end font-bold text-sm text-orange-400">
                                        $1.75
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* end products */}
                    </div>
                    {/* end left section */}
                    {/* right section */}
                    <div className="w-full sm:w-2/5">
                        <CurrentOrder />
                    </div>
                    {/* { /* end right section  */}
                </div>
            </div>
        </>
    );
};

export default App;
