import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react"

export function Widget() {

  const [isWidgetOpen, setWidgetOpen] = useState(false)

  function toggleVisibilidadeWidget() {
    setWidgetOpen(!isWidgetOpen)
  } //pega o valor atual e seta o valor contrário a ele


  return (
    <div className="absolute bottom-5 right-5">

{/* condicional ternário pra exibir o elemento somente se a coondição testada for verdadeira */}

      {isWidgetOpen ? <p>Hello World</p> : null}    

      {/* como a condicional só tem o primeiro valor, não tem um "else"  dai vc poderia colocar a condicional da seguinte forma: isWidgetOpen && <p> Hello World</p> */}

      <button onClick={toggleVisibilidadeWidget} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group ">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback</span>
      </button>
    </div>
  );
}
