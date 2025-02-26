let primerNoClickeado = false
    let botonNo

    document.addEventListener('click', function(evento) {
      const objetivo = evento.target
      if (objetivo.tagName === 'BUTTON') {
        if (objetivo.id === 'noInicial' && !primerNoClickeado && objetivo.textContent === 'No') {
          primerNoClickeado = true
          objetivo.textContent = 'Yes'
          objetivo.classList.remove('boton-no')
          objetivo.classList.add('boton-si')
          objetivo.style.position = 'absolute'
          objetivo.style.left = (window.innerWidth / 2 - objetivo.offsetWidth / 2) + 'px'
          objetivo.style.top = '100px'
          botonNo = document.createElement('button')
          botonNo.textContent = 'No'
          botonNo.classList.add('boton-no')
          posicionAleatoria(botonNo)
          document.body.appendChild(botonNo)
        } else if (objetivo.classList.contains('boton-no') && objetivo.id !== 'noInicial') {
          posicionAleatoria(objetivo)
        } else if (objetivo.textContent === 'Yes') {
          document.body.innerHTML = '<h1>TE AMO MIBIDA</h1>'
        }
      }
    })

    function posicionAleatoria(boton) {
      const x = Math.random() * (window.innerWidth - boton.offsetWidth)
      const y = Math.random() * (window.innerHeight - boton.offsetHeight)
      boton.style.left = x + 'px'
      boton.style.top = y + 'px'
    }