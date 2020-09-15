export function About() {
  return (
    <div
      id="Sobre"
      className="flex flex-col items-center w-full mx-auto bg-gray-300"
    >
      <div>
        <p className="mt-12 mb-8 text-6xl text-primary-400">NOSSA CLÍNICA</p>
      </div>
      <div>
        <p className="mb-16">
          Aqui é onde o seu texto começa. Basta clicar e começar a escrever. Aut
          odit aut fugit sed quia
          <br />
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
          neque porro quisquam.
        </p>
      </div>
      <div>
        <div className="container flex flex-row justify-center object-cover mb-16 space-x-8">
          <button
            className="object-cover duration-500 ease-out transform border-4 border-solid rounded-md hover:scale-105 hover:border-primary-500 hover:border-opacity-50"
            style={{ maxWidth: '242px', maxHeight: '242px' }}
          >
            <img src="cara.jpg" alt="" />
          </button>
          <button className="object-cover duration-500 ease-out transform border-4 border-solid rounded-md hover:scale-105 hover:border-primary-500 hover:border-opacity-50">
            <img src="cara.jpg" alt="" />
          </button>
          <button className="object-cover duration-500 ease-out transform border-4 border-solid rounded-md hover:scale-105 hover:border-primary-500 hover:border-opacity-50">
            <img src="cara.jpg" alt="" />
          </button>
          <button className="object-cover duration-500 ease-out transform border-4 border-solid rounded-md hover:scale-105 hover:border-primary-500 hover:border-opacity-50">
            <img src="cara.jpg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
