const displayModal = (): void => {
  const bgImg = [...document.querySelectorAll<HTMLDivElement>('.bg__img-item')]

  const modalBgImg = [
    ...document.querySelectorAll<HTMLDivElement>('.bg__infos-item'),
  ]

  if (bgImg?.length === 0 || modalBgImg?.length === 0) return

  const combinedArray = bgImg.map((img, index) => ({
    img,
    modal: modalBgImg[index],
  }))

  combinedArray.forEach((item) => {
    item.img.style.display = 'none'
    item.modal.style.display = 'none'
  })

  const randomItem =
    combinedArray[Math.floor(Math.random() * combinedArray.length)]

  randomItem.img.style.display = 'block'
  randomItem.modal.style.display = 'block'
}

export default displayModal
