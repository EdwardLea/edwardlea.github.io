$(() => {
  AOS.init()

  console.log('Js loaded')
  const $navToggle = $('.nav-toggle')
  const $navBody = $('.nav-body')
  const $navContact = $('.contact-header')
  const $codeSection = $('.coding')
  const $outsideSection = $('.outside')
  const $skillsSection = $('.icon')
  const $skillsTitle = $('.title')
  const $contactLink = $('.contact-details').find('a')
  const $heroHeading = $('.hero').find('h1')
  const $heroSubHeading = $('.hero').find('h2')

  function splitHeading(element) {
    const arrayHeading = element.text().split('')
    const span = arrayHeading.map(letter => {
      return `<span class = "hero">${letter}</span>`
    }).join('')
    element.html(span)
  }

  splitHeading($heroHeading)
  splitHeading($heroSubHeading)

  function navClick(){
    if($navBody.hasClass('show')){
      $navBody.removeClass('show')
    } else{
      $navBody.addClass('show')
    }
  }

  function showClick(e){
    $(e.currentTarget).find('.text').slideToggle()
  }

  function iconHoverIn(e){
    $(e.currentTarget).find('i').removeClass('show')
    $(e.currentTarget).find('span').addClass('show')
  }
  function iconHoverOut(e){
    $(e.currentTarget).find('i').addClass('show')
    $(e.currentTarget).find('span').removeClass('show')
  }

  function checkScroll(){
    if($(window).width() <= 769) return
    if ($(window).height() + $(window).scrollTop() >= $(document).height()){
      $navContact.hide()
    } else{
      $navContact.show()
    }
  }

  $navToggle.on('click', navClick)
  $codeSection.on('click', showClick)
  $outsideSection.on('click', showClick)
  $skillsSection.on('mouseenter', iconHoverIn)
  $skillsSection.on('mouseleave', iconHoverOut)
  $skillsTitle.on('mouseenter', iconHoverIn)
  $skillsTitle.on('mouseleave', iconHoverOut)
  $contactLink.on('mouseenter', iconHoverIn)
  $contactLink.on('mouseleave', iconHoverOut)
  $(window).on('scroll', checkScroll)
})
