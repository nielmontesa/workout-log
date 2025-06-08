import { AiFillGoogleCircle } from "react-icons/ai";

export const Login = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="bg-neutral-800 w-fit p-24 rounded-lg border border-neutral-700">
        <form className="flex flex-col justify-center items-center gap-3">
          <h1 className="xl text-xl">Work-Out Logs App</h1>
          <button className="bg-neutral-700 px-4 py-2 rounded-sm flex gap-2 items-center">
            <AiFillGoogleCircle size={"22"} />
            Login With Google
          </button>
        </form>
      </div>
    </main>
  );
};
