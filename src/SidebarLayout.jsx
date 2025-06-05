import logo from "./assets/logo.jpg"
import { House,TimerReset , User,ScrollText , CircleArrowUp,CircleArrowDown , ShoppingBasket, FileText, Wrench, Scroll, Archive, ChartColumnBig, BanknoteArrowUp, Package } from 'lucide-react';

export default function SidebarLayout() {

  const itens = [
    { icone: House, nome: "Home" },
    { icone: User, nome: "Clientes" },
    { icone: ShoppingBasket, nome: "Produtos" },
    { icone: Wrench, nome: "Serviços" },
    { icone: FileText, nome: "O.S" },
    { icone: Scroll, nome: "Garantia" },
    { icone: Archive, nome: "Arquivos" },
    { icone: ChartColumnBig, nome: "Lançamentos" },
    { icone: BanknoteArrowUp, nome: "Cobrança" },
  ];

  const estatisticas = [
    { icone: User, nome: "Clientes", valor: "4793",cor:"text-blue-600" },
    { icone: Package, nome: "Produtos", valor: "820",cor:"text-yellow-600" },
    { icone: TimerReset, nome: "Serviços", valor: "4",cor:"text-green-600" },
    { icone: FileText, nome: "Ordens", valor: "475",cor:"text-pink-600" },
    { icone: ScrollText, nome: "Garantias", valor: "45",cor:"text-purple-600" },
    { icone: CircleArrowUp, nome: "Receita - Dia", valor: "R$ 451",cor:"text-green-600" },
    { icone: CircleArrowDown, nome: "Despesa - Dia", valor: "R$ 352",cor:"text-red-600" },
  ]

  const Icone = itens[1].icone;

  return (
    <div className="flex  min-h-screen  ">
      <aside className="w-60 bg-black " id="navbar">
        <div className="flex w-full items-center justify-center">
          <img src={logo} alt="logo" className="bg-cover bg-center" />
        </div>

        <div className="w-full px-4">
          {itens.map(item => (
            <div key={item.nome} className="flex items-center justify-start rounded w-full gap-2 p-2 text-white
           hover:border hover:bg-neutral-500 hover:cursor-pointer hover:text-black hover:font-semibold transition duration">
              <item.icone className="text-sm whitespace-nowrap" />
              <span className="text-sm">{item.nome}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-4 ">

        <div className="flex-1 mb-2  " id="top-menu">

          <div className="w-full flex flex-row gap-4">

            {itens.map((data, index) => {
              if (index > 0 && index < 6) {
                const Icone = data.icone;
                return (
                  <div key={index} className="w-50 h-25 bg-black rounded-xl flex hover:cursor-pointer hover:bg-neutral-900">
                    <div className="flex flex-col flex-1 px-8 ">
                      <h2 className=" text-sm whitespace-nowrap text-white pt-4">{data.nome}</h2>
                      <p className="text-white  pt-1">F1</p>
                    </div>
                    <Icone className="text-white mt-8 mr-4 flex-1 " />
                  </div>
                );
              }
              return null;
            })}

          </div>

        </div>

        <div id="center" className="flex gap-4 mt-4">

          <div className="w-[800px] h-200 bg-gray-300 rounded-md">
            <h2 className="text-left pl-4 pt-4 text-[#0d0252] font-semibold">Agenda</h2>
          </div>
          <div className="flex-1 bg-neutral-300 rounded-md">
            <h2 className="text-left pl-4 pt-4 text-[#0d0252] font-semibold">Estatísticas do Sistema</h2>
            <div className=" px-2 py-6 w-full">

              {estatisticas.map((data, index) => {
                const Icone = data.icone;
                return (
                  <div key={index} className="flex items-center pl-4 gap-4 mb-4 cursor-pointer rounded-md hover:bg-neutral-200">
                    <Icone className={`w-6 h-6 font-medium ${data.cor} font-bold`}/>
                    <div>
                    <h2 className={`text-black text-sm font-semibold `}>{data.nome}</h2>
                      <p className={`text-black text-xs font-semibold `}>{data.valor}</p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>




        </div>
      </main >
    </div >
  );
}
