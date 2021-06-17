const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

console.log(item)

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    console.log(placeholder)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
   
}

function dragend(event) {
    //event.target.classList.remove('hold', 'hide')
    // we can chose from above line or, another way to get the same result as by line above is via className which works for the line:
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
    console.log('drag over')
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag enter')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('drag leave')
}

function dragdrop(event) {
    event.target.append(item)
    console.log('drag drop')
}