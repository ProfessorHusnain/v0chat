'use client'
import { useContext, useRef, useEffect, Suspense } from 'react'
import { ChatContext } from '../app/chat-context'

export default function PromptMessage() {
    const { messages } = useContext(ChatContext)

    return (
        <div
            className="flex-1 rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
        >
            {messages.map((data, key) => {
                if (data.role === 'user') {
                    return (
                        <div key={key} className="flex flex-row px-2 py-4 sm:px-4">
                            <img
                                className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                                src="https://dummyimage.com/256x256/363536/ffffff&text=Y"
                            />

                            <div className="flex max-w-3xl items-center">
                                <p>{data.content}</p>
                            </div>
                        </div>
                    )
                }
                else if (data.role === 'assistant') {
                    return (
                        <span key={key}>
                            <div className="mb-2 flex w-full flex-row justify-end gap-x-2 text-slate-500">
                                <button className="hover:text-blue-600">
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
                                        <path
                                            d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"
                                        ></path>
                                    </svg>
                                </button>
                                <button className="hover:text-blue-600" type="button">
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
                                        <path
                                            d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"
                                        ></path>
                                    </svg>
                                </button>
                                <button className="hover:text-blue-600" type="button">
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
                                        <path
                                            d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
                                        ></path>
                                        <path
                                            d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                className="mb-4 flex rounded-xl bg-slate-100 px-2 py-6 dark:bg-slate-900 sm:px-4"
                            >
                                <img
                                    className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                                    src="https://dummyimage.com/256x256/354ea1/ffffff&text=v0"
                                />

                                <div className="flex max-w-3xl items-center rounded-xl">
                                    <p>{data.content}</p>
                                </div>
                            </div>
                        </span>
                    )
                }
            })}
        </div>
    )
}