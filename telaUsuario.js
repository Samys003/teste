//sp=racw&st=2025-12-07T03:58:14Z&se=2026-12-01T03:00:00Z&spr=https&sv=2024-11-04&sr=c&sig=QlO5VWh8evLpONFHydT5hI6%2FGhO758Apxujsa46odmY%3D

export async function GerarTela() {
    const main = document.getElementById('main')
    const divSmLg = document.createElement('div')
    const divSm = document.createElement('div')
    const divContain = document.createElement('div')
    const divUploadImage = document.createElement('div')
    const InputImage = document.createElement('input')
    const divUser = document.createElement('div')
    const nameUser = document.createElement('h1')
    const divInputEmail = document.createElement('div')
    const pEmail = document.createElement('p')
    const inputEmail = document.createElement('input')
    const divNamePass = document.createElement('div')
    const divNick = document.createElement('div')
    const pNick = document.createElement('p')
    const inputNick = document.createElement('input')
    const divPass = document.createElement('div')
    const pPass = document.createElement('p')
    const inputPass = document.createElement('input')
    const sectionRecipe = document.createElement('section')
    const pRecipe = document.createElement('p')
    const divContainer = document.createElement('div')
    const divCard = document.createElement('div')
    const imageCard = document.createElement('img')
    const pImageCard = document.createElement('p')
    const newCard = document.createElement('div')
    const buttonNewCard = document.createElement('button')
    const divBotoesSaveEdit = document.createElement('div')
    const buttonSave = document.createElement('button') 
    const buttonEdit = document.createElement('button')

    InputImage.type = 'file'
    InputImage.id = 'previewImage'
    inputEmail.type = 'email'
    inputPass.type = 'password'
    nameUser.textContent = "Julia Souza"
    pEmail.textContent = "E-mail"
    pNick.textContent = "Nickname"
    pPass.textContent = "Senha"
    pRecipe.textContent = "SUAS RECEITAS"
    buttonNewCard.textContent = "Nova Receita"
    buttonEdit.textContent = "Editar"
    buttonSave.textContent = "Salvar"


    main.className = ('flex w-full flex-col pt-3.5 items-center')

    divSmLg.className = ('lg:w-[70%] sm:w-full')

    divSm.className = ('sm:flex sm:w-full  sm:items-center sm:justify-center')

    divContain.className = ('flex flex-col items-center w-full sm:w-[30%]')

    divUploadImage.className = ('flex w-[200px] h-[200px] sm:w-[210px] sm:h-[210px] lg:w-[300px] lg:h-[300px] rounded-full border-2 items-center justify-center border-[#DF5600]')
    
    InputImage.className = ('flex w-full rounded-full h-[190px] items-center object-contain lg:w-[300px] lg:h-[300px] text-[20px]')

    divUser.className = ('w-full flex flex-col items-center justify-center lg:w-[80%] sm:w-[60%] sm:p-8')
    

    nameUser.className = ("font-['Inter'] font-bold p-0.5 sm:text-[25px] lg:text-[30px] text-[#742D00]")

    divInputEmail.className = ("p-1")

    pEmail.className = ("font-['Inter'] font-bold p-0.5 text-[#742D00] sm:text-[20px]")

    inputEmail.className = ('w-[320px] sm:w-[480px] lg:w-[700px] lg:h-[50px] border border-[#DF5600] rounded-[5px]')

    divNamePass.className = ('flex items-center justify-center gap-2 lg:gap-10')

    pNick.classList = ("font-['Inter'] font-bold p-0.5 text-[#742D00] sm:text-[20px]")

    inputNick.classList = ('w-40 sm:w-60 border border-[#DF5600] rounded-[5px] lg:w-[350px] lg:h-[50px]')

    pPass.classList = ("font-['Inter'] font-bold p-0.5 text-[#742D00] sm:text-[20px]")

    inputPass.classList = ("w-40 sm:w-60 border border-[#DF5600] rounded-[5px] lg:w-[300px] lg:h-[50px]")

    divBotoesSaveEdit.className = ("w-[70%] items-center gap-5 flex text-['Inter'] text-[white] sm:text-[17px]  justify-end p-5 lg:pt-7 lg:pr-15")

    buttonEdit.className = ('bg-[#DF5600] w-[70px] h-[30px] rounded-[10px] sm:w-[100px] lg:w-[150px] lg:h-[50px]')

    buttonSave.className = ('bg-[#DF5600] w-[70px] h-[30px] rounded-[10px] sm:w-[100px] lg:w-[150px] lg:h-[50px]')

    sectionRecipe.classList = ('w-full flex flex-col items-center sm:items-start pl-2 pt-5 pb-5 justify-center gap-3 sm:pl-12')
    
    pRecipe.classList = ("w-28 flex items-center justify-center font-['Inter'] bg-[#DF5600] p-1 text-[12px] sm:text-[20px] sm:w-44 text-white rounded-xl")
    
    divContainer.classList = ("flex lg:gap-10 items-center flex-col sm:flex-row w-[80%] sm:w-full gap-3 lg:h-[350px]")
    
    divCard.classList = ('flex flex-col items-center text-center')
    
    imageCard.classList = ("w-[200px] lg:w-[350px] lg:h-[270px]  sm:w-[250px] h-[150px] border-1 border-[#DF5600] text-['Inter'] text-[#DF5600] rounded-[10px] p-2")
    
    pImageCard.classList = ("font-['Inter'] font-semibold text-[#139DA7] w-60 sm:w-72")
    
    newCard.classList = ('flex flex-col items-center text-center')
    
    buttonNewCard.classList = ("w-[200px] sm:w-[250px] h-[150px] lg:w-[350px] lg:h-[270px] border-1 border-[#DF5600] text-['Inter'] text-[#DF5600] rounded-[10px] p-2")

    divNick.appendChild(pNick)
    divNick.appendChild(inputNick)

    divPass.appendChild(pPass)
    divPass.appendChild(inputPass)

    divInputEmail.appendChild(pEmail)
    divInputEmail.appendChild(inputEmail)

    divNamePass.appendChild(divNick)
    divNamePass.appendChild(divPass)
    
    divBotoesSaveEdit.appendChild(buttonEdit)
    divBotoesSaveEdit.appendChild(buttonSave)

    divUser.appendChild(nameUser)
    divUser.appendChild(divInputEmail)
    divUser.appendChild(divNamePass)
    divUser.appendChild(divBotoesSaveEdit)

    divSm.appendChild(divContain)
    divSm.appendChild(divUser)

    divContainer.appendChild(newCard)
    divContainer.appendChild(divCard)
    
    
    newCard.appendChild(buttonNewCard)

    divCard.appendChild(imageCard)
    divCard.appendChild(pImageCard)

    sectionRecipe.appendChild(pRecipe)
    sectionRecipe.appendChild(divContainer)

    divUploadImage.appendChild(InputImage)

    divContain.appendChild(divUploadImage)

    divSmLg.appendChild(divSm)
    divSmLg.appendChild(sectionRecipe)

    main.appendChild(divSmLg)
    
    
}

