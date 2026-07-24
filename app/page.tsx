import Link from "next/link";

export default function Home() {

  return (

    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-100
      "
    >

      <div
        className="
        bg-white
        p-12
        rounded-3xl
        shadow-xl
        text-center
        "
      >

        <h1
          className="
          text-5xl
          font-bold
          text-slate-900
          "
        >
          SmartLoan Platform
        </h1>


        <p
          className="
          mt-5
          text-gray-600
          text-lg
          "
        >
          Production Grade Digital Loan Application System
        </p>


        <Link
          href="/apply"
          className="
          inline-block
          mt-8
          bg-blue-600
          text-white
          px-10
          py-4
          rounded-xl
          "
        >
          Start Loan Application
        </Link>


      </div>


    </main>

  );
}