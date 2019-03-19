$(() => {
  AOS.init()

  console.log('Js loaded')
  const $codeSection = $('.coding')
  const $outsideSection = $('.outside')
  const $skillsSection = $('.icon')
  const $skillsTitle = $('.title')

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
