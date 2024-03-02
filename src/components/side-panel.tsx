export default function SidePanel() {
    return (
        <aside className="">
            <div
                className="flex h-svh w-60 flex-col bg-slate-50 pt-8 dark:border-slate-700 dark:bg-slate-900 sm:w-64"
            >
                <div className="flex px-4">
                    {/* Logo */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-blue-600"
                        fill="currentColor"
                        strokeWidth=""
                        viewBox="0 0 367.18 315.83"
                    >
                        <path
                        d="M153.3,274.26c-7.43,20.43-14,39-19.09,57.61a.91.91,0,0,1-.88.67h0a.91.91,0,0,1-.88-.69,588.85,588.85,0,0,0-18.16-57.59L71.7,152.33a8.8,8.8,0,0,0-8.31-5.9H38.22A8.8,8.8,0,0,0,30,158.36l78.42,206.27a14.4,14.4,0,0,0,13.45,9.27h19.75A14.38,14.38,0,0,0,155,364.77l37.32-95a.92.92,0,0,1,1.76.18c12.37,67.42,48,104,96.3,104,67.67,0,106.21-57.34,106.21-161.21,0-97.28-36.66-154.62-101-154.62-45.88,0-82,30.85-97.69,88.36m94.87,195.51c-37.6,0-62-45.12-62-124.55,0-23,2-43,5.68-59.88q1.24-5.77,2.76-11.08C249.67,109.33,269.28,90,293.2,90c42.76,0,62,49.35,62,124.54C355.23,292.59,335,341.94,292.73,341.94Z" 
                        transform="translate(-29.41 -58.07)"
                        ></path>
                    </svg>
                    <h2 className="px-5 text-lg font-medium text-slate-800 dark:text-slate-200">
                        Chats
                        <span
                            className="mx-2 rounded-full bg-blue-600 px-2 py-1 text-xs text-slate-200"
                        >6</span
                        >
                    </h2>
                </div>
                <div className="mx-2 mt-8">
                    <button
                        className="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                        New Chat
                    </button>
                </div>
                {/* Previous chats container */}
                <div
                    className="h-1/2 space-y-4 overflow-y-auto border-b border-slate-300 px-2 py-4 dark:border-slate-700"
                >
                    <button
                        className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
                    >
                        <h1
                            className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                        >
                            Tailwind Classes
                        </h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">12 Mar</p>
                    </button>
                    <button
                        className="flex w-full flex-col gap-y-2 rounded-lg bg-slate-200 px-3 py-2 text-left transition-colors duration-200 focus:outline-none dark:bg-slate-800"
                    >
                        <h1
                            className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                        >
                            explain quantum computing
                        </h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">10 Feb</p>
                    </button>
                    <button
                        className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
                    >
                        <h1
                            className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                        >
                            How to create ERP Diagram
                        </h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">22 Jan</p>
                    </button>
                    <button
                        className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
                    >
                        <h1
                            className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                        >
                            API Scaling Strategies
                        </h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">1 Jan</p>
                    </button>
                    <button
                        className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
                    >
                        <h1
                            className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                        >
                            What is GPT UI?
                        </h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">1 Jan</p>
                    </button>
                    <button
                        className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
                    >
                        <h1
                            className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                        >
                            How to use Tailwind components?
                        </h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">1 Jan</p>
                    </button>
                </div>
                <div className="mt-auto w-full space-y-4 px-2 py-4">
                    <button
                        className="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path
                                d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
                            ></path>
                        </svg>
                        User
                    </button>
                    <button
                        className="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                            ></path>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        </svg>
                        Settings
                    </button>
                </div>
            </div>
        </aside>
    )
}