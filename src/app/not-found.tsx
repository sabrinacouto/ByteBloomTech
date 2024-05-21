import Link from "next/link";

export default function NotFound(){
    return(
        <main className="h-screen w-full flex flex-col justify-center items-center">
        <h4 className="text-9xl font-extrabold text-[#0077B6] tracking-widest">404</h4>
        <div className="bg-white px-2 text-sm rounded rotate-12 absolute text-[#0077B6]">
            Page Not Found
        </div>
        <button className="mt-5">
            <Link
                className="relative inline-block text-sm font-medium text-white group active:text-blue-500 focus:outline-none focus:ring"
                href="/"
            >
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#0077B6] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                   Voltar para a página inicial
                </span>
            </Link>
        </button>
    </main>
);
};

    