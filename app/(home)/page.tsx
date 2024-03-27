import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center border shadow-md p-5 bg-gradient-to-r from-blue-200 to-pink-200 text-red-700 rounded-2xl">
          App | Description
        </div>
        <h1 className="text-3xl md:text-4xl items-center text-center text-zinc-700 m-5 font-extrabold font-sans">
          App | Header-1
        </h1>
        <div className="text-md md:text-lg items-center text-center text-zinc-500">
          <p className="pt-1 pl-2 pr-2 text-blue-950 rounded-t-md">
            Description line-1
          </p>
          <p className="pb-1 pl-2 pr-2 text-blue-950 rounded-b-md">
            Description line-2
          </p>
        </div>
      </div>
      <div className="text-sm md:text-md text-zinc-800 mt-5 max-w-sm md:max-w-xl text-center mx-auto">
        Description para-3
      </div>
      <Button size="lg" className="mt-5 text-md" asChild>
        <Link href="/login">Start for Free</Link>
      </Button>
    </div>
  );
};

export default Home;
