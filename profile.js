console.log(`hello world`)

const favColor = (evt) => {
    evt.preventDefault()

    alert(`Aquamarine!`)
}

const favPlace = (evt) => {
    evt.preventDefault()

    alert(`My Bed!`)
}

const favRitual = (evt) => {
    evt.preventDefault()

    alert(`Going to sleep!`)
}


document.getElementById('color').addEventListener('click',favColor)
document.getElementById('place').addEventListener('click',favPlace)
document.getElementById('ritual').addEventListener('click',favRitual)