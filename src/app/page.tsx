'use client'
import Image from "next/image";
import { useContext, useRef, useEffect } from 'react'
import { ChatContext } from '../app/chat-context'
import PromptMessage from "../components/prompt-message";

export default function Home() {
  const { state } = useContext(ChatContext)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end'})
  }, [state])
  return (
    <main  className="overflow-y-scroll" >
      <div ref={ref} className=" md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto">
        <PromptMessage />
      </div>
    </main>
  );
}