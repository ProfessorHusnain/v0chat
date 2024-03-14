"use client";
import { useState, useContext, useRef, useEffect } from "react";
import Textarea from "react-textarea-autosize";
import { ChatContext } from "../context/chat-context";
import { useChat } from "ai/react";

export default function PromptInput() {
  const { input, handleInputChange, handleSubmit } = useContext(ChatContext);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.key === "Enter" &&
        event.shiftKey === false &&
        window.screen.width > 640
      ) {
        event.preventDefault();
        formRef.current?.requestSubmit();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <form
      className="flex max-w-full rounded-xl bg-slate-300 p-2  dark:bg-slate-900"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <label htmlFor="prompt" className="sr-only">
        Enter your prompt
      </label>
      <div>
        <button
          className="hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2 hidden"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            aria-hidden="true"
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
          <span className="sr-only">Attach file</span>
        </button>
      </div>
      <Textarea
        id="prompt"
        name="prompt"
        rows={1}
        className="resize-none max-h-[90svh] overflow-y-hidden m-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-200 p-2 text-base text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-300/20 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 dark:focus:ring-blue-600"
        placeholder="Enter your prompt"
        onChange={handleInputChange}
        value={input}
      ></Textarea>
      <div className="self-end pb-2">
        <button
          className="inline-flex hover:text-blue-600 text-slate-800 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            aria-hidden="true"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 14l11 -11"></path>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
}
