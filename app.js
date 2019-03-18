$(() => {
  AOS.init()


  console.log('Js loaded')
  const $codeButton = $('.coding').find('.title')
  const $codeSection = $('.coding').find('.text')
  const $outsideButton = $('.outside').find('.title')
  const $outsideSection = $('.outside').find('.text')

  function codingClick(e){
    console.log(e.currentTarget)
    $codeSection.slideToggle()


  }

  $codeButton.on('click', codingClick)
  $outsideButton.on('click', codingClick)
})
