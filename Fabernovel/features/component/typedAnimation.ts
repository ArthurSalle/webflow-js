import Typed, { TypedOptions } from 'typed.js'

export const createTyped = (
  el: Element,
  delay = 0,
  options: TypedOptions = {}
): Typed => {
  return new Typed(el.nextElementSibling as HTMLElement, {
    stringsElement: el,
    typeSpeed: 20,
    loop: false,
    startDelay: delay,
    showCursor: false,
    ...options,
  })
}

const typedAnimation = (): void => {
  const choicesItems = document.querySelector<HTMLDivElement>('.choices_items')
  if (!choicesItems) return
  choicesItems.style.display = 'none'

  const stringsArray = [
    ...document.querySelectorAll<HTMLDivElement>('#typed-strings'),
  ]

  createTyped(stringsArray[0])
  createTyped(stringsArray[1], 1000, {
    onComplete: () => {
      choicesItems.style.display = 'block'
    },
  })
}

export default typedAnimation
