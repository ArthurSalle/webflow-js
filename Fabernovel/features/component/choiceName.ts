import { createTyped } from './typedAnimation'

export const choiceName = (): void => {
  const clientResponse = document.querySelector<HTMLDivElement>('.response_1')
  if (!clientResponse) return
  clientResponse.style.display = 'none'

  const displayResponse = document.querySelector<HTMLDivElement>('.question3')
  if (!displayResponse) return
  displayResponse.style.display = 'none'

  const responsesItems =
    document.querySelector<HTMLDivElement>('.reponses_home')
  if (!responsesItems) return
  responsesItems.style.display = 'none'

  const btnName = (el: HTMLButtonElement) => {
    const name = (el?.parentElement as HTMLDivElement).previousElementSibling
      ?.innerHTML
    firstResponse(`I am ${name}`, 'response_1')

    setTimeout(() => {
      thirdQuestion(`Choose item`, 'question3')
    }, 500)
  }

  const targetName = [
    ...document.querySelectorAll<HTMLButtonElement>('.btn_names'),
  ]
  targetName.forEach((el) =>
    el.addEventListener('click', function () {
      btnName(el)

      setTimeout(function () {
        clientResponse.style.display = 'block'
      }, 500)
      setTimeout(function () {
        displayResponse.style.display = 'block'
      }, 2000)
      setTimeout(function () {
        responsesItems.style.display = 'block'
      }, 4000)
    })
  )
}

export const firstResponse = (
  text: string | undefined,
  className: string
): void => {
  const response = document.querySelector<HTMLDivElement>(
    `.${className} #typed-strings`
  )
  if (!response) return
  response.innerHTML = `<div>
      <div id="typed-strings">
        <span>${text}</span>
      </div>
      <span id="typed" style="white-space:pre;"></span>
    </div>`

  createTyped(response.querySelector('#typed-strings') as HTMLDivElement, 1000)
}

export const thirdQuestion = (
  text: string | undefined,
  className: string
): void => {
  const response = document.querySelector<HTMLDivElement>(
    `.${className} #typestrings div`
  )
  if (!response) return
  response.innerHTML = `<div>
      <div id="typed-strings">
        <span>${text}</span>
      </div>
      <span id="typed" style="white-space:pre;"></span>
    </div>`

  createTyped(
    response.querySelector('#typed-strings') as HTMLDivElement,
    2000,
    {
      onComplete: () => {
        const thirdResponse =
          document.querySelector<HTMLDivElement>('.reponses_home')
        if (!thirdResponse) return
        thirdResponse.style.display = 'block'
      },
    }
  )
}
