export function Header() {
  return (
    <div
      id="header"
      className="flex flex-row justify-around w-full py-8 pl-6 border-2 border-solid"
    >
      <div className="flex flex-row">
        <div className="mr-1 rounded-full bg-primary-400">
          <i className="p-2 text-2xl text-white fas fa-plus"></i>
        </div>
        <p className="ml-2 mr-40 text-2xl font-bold text-primary-400">
          Veterinária Clinica RJ
        </p>
      </div>
      <div className="pt-2">
        <button className="mr-6 font-semibold hover:underline">HOME</button>
        <button className="mr-6 font-semibold hover:underline">
          SOBRE NÓS
        </button>
        <button className="mr-6 font-semibold hover:underline">SERVIÇOS</button>
        <button className="mr-6 font-semibold hover:underline">CONTATO</button>
      </div>
    </div>
  )
}
