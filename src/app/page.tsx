import Image from "next/image";
import PromptMessage from "../components/prompt-message";

export default function Home() {
  return (
    <main className="basis-full overflow-y-scroll" >
      <div className=" md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto">
        <PromptMessage />
      </div>
    </main>
  );
}
