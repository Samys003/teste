import { GerarTela } from "./telaUsuario.js" ;

"use Strict"

// async function saveImage() {

//     const previewImage = document.getElementById('previewImage').scr = URL.createObjectURL(target.files[0])



    
// }

async function telaUsuario() {
  const userMobile = document.getElementById('userMobile')
  const userSmLg = document.getElementById('userSmLg')
  const main = document.getElementById('main')

    userMobile.addEventListener( 'click' , () => { 

    main.replaceChildren()

    const novaTela =  GerarTela()

    main.appendChild(novaTela)
    
    })

    userSmLg.addEventListener( 'click' , () => { 

    main.replaceChildren()

    const novaTela = GerarTela()

    main.appendChild(novaTela)
    
    })


    

}

telaUsuario()


