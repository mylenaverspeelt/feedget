
// interface ButtonProps{
//     text?: string;
// } aqui é o typescript, vc ta determinando que o tipo de props que o botao recebe é do tipo string. a interrogação permite que se crie elementos sem props definidas, porem ela vai ter um valor default se nao for passado nenhuma props. caso nao tenha uma ? nao da pra criar esse componente sem props. 

import { Widget } from "./components/Widget";

// function Button(props: ButtonProps){
// return <button>{props.text ?? "Default"}</button>

// }

// function App() {
// return (
//     <>
//     <Button text="Enviar"/>
//     <Button text="Ok"/>
//     <Button />
//     </>
// )
// }

// export default App
  

export function App(){
    return <Widget />
}

