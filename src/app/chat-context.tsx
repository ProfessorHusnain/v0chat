"use client"
import { createContext } from "react";
import { useChat } from "ai/react";

interface DataItem {
    role: "function" | "user" | "assistant" | "data" | "system" | "tool";
    content: string;
    id: string;
    createdAt?: Date;
}

const initialData: DataItem[] = [        {
    "content": "where is pakistanPakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.",
    "role": "user",
    "createdAt": new Date("2024-03-01T10:55:11.594Z"),
    "id": "W9JwPv9"
},
{
    "id": "t9dXFxv",
    "createdAt": new Date("2024-03-01T10:45:17.296Z"),
    "content": "Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.Pakistan is located in South Asia, bordered by India to the east, Afghanistan and Iran to the west, China to the north, and the Arabian Sea to the south.",
    "role": "assistant"
},];

export const ChatContext = createContext({
    messages: initialData,
    input: "",
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => {},
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => {},
});


export default function ChatContextProvider({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const { messages, input, handleInputChange, handleSubmit } = useChat(
        { initialMessages: initialData }
    );
    return (
        <ChatContext.Provider value={{ messages, input, handleInputChange, handleSubmit }}>
            {children}
        </ChatContext.Provider> 
    );
}