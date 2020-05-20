const index = {
  init() {
    this.number = $('.main-right-grid .editableCellCon')[0].classList[2].split('-')[1]
    this.productList = []
    this.addProductPicture()
  },
  //获取产品列表
  addProductPicture() {
    const table = $('.main-right-grid')
    const row = table.find(`.row-${this.number}.col-4`)
    const text = row.find('span').text()
    if (row.length !== 0) {
      this.productList.push(text)
      this.number++
      this.addProductPicture()
    } else {
      console.log(JSON.stringify(this.productList))
    }
  }
}
index.init()
