const index = {
  init() {
    this.number = $('.main-right-grid .editableCellCon')[0].classList[2].split('-')[1]
    this.time = 100
    this.addProductPicture()
    // this.updateWorkSheetRow()
    // this.getProductAnnex()

  },
  //添加附件   
  addProductPicture() {
    this.number++
    const table = $('.main-right-grid')
    const row = table.find(`.row-${this.number}.col-20`)
    const picBut = row.find('i')
    picBut.click()
  },
  //获取附件
  getProductAnnex() {

  },
  //更新附件
  updateWorkSheetRow() {}
}
index.init()
