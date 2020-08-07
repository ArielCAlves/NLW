//clicar
document.querySelector("#add-time")

//consequência ao clicar
.addEventListener('click', cloneField) 

//execução da ação
function cloneField(){
    //duplicar
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //'const' antes da variável é p/ ñ permitir alterações posteriores

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        field.value = ""
    })

    //colocar em algum lugar da pág
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}