export function Horarios() {
  return (
    <div id="Horarios" className="relative flex flex-row">
      <img src="azul.jpg" alt="" />
      <div className="rounded-full hour-center bg-primary-200">
        <i className="p-12 text-6xl text-white fas fa-plus"></i>
      </div>
      <p className="text-4xl font-bold text-white hour-left">EMERGÊNCIA 24H</p>
      <p className="font-semibold text-white hour-left2">Dr. Misakiti</p>
      <p className="text-white hour-left3">21 999999999</p>
      <p className="font-semibold text-white hour-left4">Endereço</p>
      <p className="text-white hour-left5">
        Rua Henrique Cardoso, ap 18, Rio de Janeiro 21210-250
      </p>
      <p className="text-4xl font-bold text-white hour-right">
        HORÁRIO DA CLÍNICA
      </p>
      <p className="font-semibold text-white hour-right2">Segunda a Sexta</p>
      <p className="text-white hour-right3">08h - 16h</p>
      <p className="font-semibold text-white hour-right4">Sábado e Domingo</p>
      <p className="text-white hour-right5">08h - 12:30h</p>
    </div>
  )
}
