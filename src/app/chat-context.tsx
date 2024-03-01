"use client"
import { createContext, useReducer } from "react";

interface DataItem {
    role: string;
    content: string;
}

const initialData:DataItem[] = [];

interface ContextValue {
    state: DataItem[];
    dispatch: React.Dispatch<any>;
}

export const ChatContext = createContext<ContextValue>({ state: initialData, dispatch: () => {} });


export default function ChatContextProvider({children}: Readonly<{
    children: React.ReactNode;
  }>) {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <ChatContext.Provider value={{state, dispatch}}>
            {children}
        </ChatContext.Provider>
    );
}

function reducer(state: DataItem[], action: {type: string, payload: any}) {
    switch (action.type) {
        case "UPDATE_MESSAGES":
            return action.payload;
        default:
            return state;
    }
}