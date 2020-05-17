const index = {
  init() {
    this.number = 0
    this.length = 100
    this.time = 100 //触发时间
    this.addItem()
    console.log(`%c ***** 自动化开始！触发时间${this.time}毫秒。 ***** `, 'color: green')
  },
  //添加字段   
  async addItem() {
    this.itemsListBox = $('.workflowDetailBox')
    this.length = $('.workflowDetailBox > .relative').length
    this.itemListbox = $('.workflowDetailBox > .relative').eq(this.number)
    await this.setTo(this.itemListbox) //设为  
    await this.selectPeople(this.itemListbox) //选择人员
    this.number++
    console.log(`%c ***** 正在添加第${this.number}个字段,一共${this.length}个字段! *****`, 'color: red')
    this.number < this.length ? this.addItem() : console.log(`%c ***** 自动化结束,一共用时${(this.number * this.time / 60).toFixed(2)}秒 *****`, 'color: green')

  },
  //设为  
  setTo(dom) {
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        dom.find('.actionControlMore.ThemeColor3.tip-bottom-left').click()
      })()), this.time);
    });
  },
  //选择人员
  selectPeople(dom) {
    const that = this
    this.value = dom.find('.mTop15.ellipsis.Font13').text()
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        let isFind = false
        dom.find('.conditionFieldBox li').each((index, item) => {
          if ($(item).text().indexOf(this.value) !== -1) {
            $(item).click()
            isFind = true
            return true
          }
        })
        if (!isFind) console.log(`%c ***** 未找到[${this.value}]选项,请手动选择。*****`, 'color: yellow')
      })()), this.time);
    });
  }
}
index.init()
