const droppableZoneSign = document.getElementById('areaupload')

document.addEventListener('dragenter', event => {
    droppableZoneSign.classList.add('droppable')
})

document.addEventListener('dragleave', event => {
    droppableZoneSign.classList.remove('droppable')
})

document.addEventListener('dragover', event => {
    event.stopPropagation();
    event.preventDefault();
    droppableZoneSign.classList.add('droppable')
    // isso adiciona o sinal de mais (+) ao lado do cursor para indicar ao usuário
    // que uma ação diferente será tomada
    event.dataTransfer.dropEffect = 'copy';
})

document.addEventListener('drop', event => {
    outputEl.classList.remove('droppable')
    event.stopPropagation();
    event.preventDefault();

    // trata o filesList
    appendFiles(event.dataTransfer.files)
})