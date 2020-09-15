export function Services() {
  return (
    <div id="Serviços" className="flex flex-col items-center">
      <div>
        <p className="mt-12 mb-8 text-6xl text-primary-400">NOSSOS SERVIÇOS</p>
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

      <div className="flex flex-row justify-center space-x-40">
        <div className="container flex flex-col mb-20">
          <p className="px-16 py-8 mb-12 text-6xl text-white bg-opacity-50 rounded-full bg-primary-400">
            1
          </p>
          <p className="pl-8 mb-4 font-semibold">VACINAÇÃO</p>
          <p className="pl-4 text-sm leading-snug">
            Clique aqui e comece
            <br /> a escrever. Tempora
            <br /> incidunt ut labore <br />
            et dolore magnam.
          </p>
        </div>
        <div>
          <p className="px-16 py-8 mb-12 text-6xl text-white bg-opacity-50 rounded-full bg-primary-400">
            2
          </p>
          <p className="pl-10 mb-4 font-semibold">CIRURGIA</p>
          <p className="pl-4 text-sm leading-snug ">
            Clique aqui e comece
            <br /> a escrever. Tempora
            <br /> incidunt ut labore <br />
            et dolore magnam.
          </p>
        </div>
        <div>
          <p className="px-16 py-8 mb-12 text-6xl text-white bg-opacity-50 rounded-full bg-primary-400">
            3
          </p>
          <p className="pl-4 mb-4 font-semibold">DERMATOLOGIA</p>
          <p className="pl-4 text-sm leading-snug">
            Clique aqui e comece
            <br /> a escrever. Tempora
            <br /> incidunt ut labore <br />
            et dolore magnam.
          </p>
        </div>
      </div>
    </div>
  )
}
