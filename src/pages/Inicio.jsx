import logo from "../assets/logo.jpg"
const Login = () => {

    return (
        <div className="w-1/3 h-fit rounded-xl bg-black px-10 py-8 text-neutral-200    ">
            <form className="flex flex-col items-center justify-center  gap-4 mt-8">
                <img src={logo} alt="logo" className="w-40 rounded-2xl border border-neutral-800" />
                <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full px-2 py-1 bg-neutral-700 rounded-md outline-none" />
                <input
                    type="password"
                    required
                    placeholder="Senha"
                    className="w-full px-2 py-1 bg-neutral-700 rounded-md outline-none" />

                <button type="submit" className="w-full bg-yellow-300 rounded-md h-10
            text-neutral-800 font-semibold hover:bg-neutral-200 cursor-pointer outline-none hover:text-black duration-300 ">
                    Entrar
                </button>
            </form>

        </div>
    )
}

export default Login