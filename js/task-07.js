const sliderTextSize = document.querySelector('#font-size-control')
const textValue = document.querySelector('#text')

sliderTextSize.addEventListener('input', onMoveSlider)
function onMoveSlider(event){
    console.log(event.currentTarget.value)
    textValue.style.fontSize=`${event.currentTarget.value}px`}
