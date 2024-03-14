"use client";
import Image from "next/image";
import { useContext, useRef, useEffect } from "react";
import { ChatContext } from "../../context/chat-context";
import PromptMessage from "../../components/prompt-message";

export default function Home() {
  const { messages } = useContext(ChatContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    console.log("scrolling");
  }, [messages]);

  return (
    <main className="overflow-y-scroll">
      <div
        ref={ref}
        className=" md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto"
      >
        <PromptMessage />
      </div>
    </main>
  );
}
