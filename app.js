$(() => {
  AOS.init()

  console.log('Js loaded')
  const $codeSection = $('.coding')
  const $outsideSection = $('.outside')
  const $skillsSection = $('.icon')
  const $skillsTitle = $('.title')
  const $heroHeading = $('.hero').find('h1')
  const $heroSubHeading = $('.hero').find('h2')

  function splitHeading(element) {
    const arrayHeading = element.text().split('')
    const span = arrayHeading.map(letter => {
      return `<span class = "hero">${letter}</span>`
    }).join('')
    element.html(span)
    // spans = Array.from(document.querySelectorAll('span'))
    // console.dir(spans)
    // spans.forEach(function(span, index) {
    //   setTimeout(function(){
    //     spans[index].classList.add('hero-active')
    //     spans[index].classList.remove('hero')
    //   }, 1000 * (index + 1))
    // })
  }

  splitHeading($heroHeading)
  splitHeading($heroSubHeading)


  function showClick(e){
    $(e.currentTarget).find('.text').slideToggle()
  }

  function iconHoverIn(e){
    $(e.currentTarget).find('i').hide()
    $(e.currentTarget).find('span').show()
  }
  function iconHoverOut(e){
    $(e.currentTarget).find('i').show()
    $(e.currentTarget).find('span').hide()
  }

  $codeSection.on('click', showClick)
  $outsideSection.on('click', showClick)
  $skillsSection.on('mouseenter', iconHoverIn)
  $skillsSection.on('mouseleave', iconHoverOut)
  $skillsTitle.on('mouseenter', iconHoverIn)
  $skillsTitle.on('mouseleave', iconHoverOut)
})
