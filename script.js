const linesContainer = document.querySelector('.lines-js')
  let whiteHeight = 0
  let blackHeight = 20

  function createZebra(wh, bh) {
    console.log('here', wh, bh);
    const markup = `
      <div class="zebra">
        <p class="white" style="height: ${wh}px"></p>
        <p class="black" style="height: ${bh}px"></p>
      </div>
    `
    linesContainer.insertAdjacentHTML('beforeend', markup)
  }
  
  for(let i = 0; i < 20; i++) {
    whiteHeight++
    blackHeight--
    createZebra(whiteHeight, blackHeight)
  }