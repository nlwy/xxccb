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
    this.addButtonDiv = $('.addActionBtn.mTop25')
    this.addButton = this.addButtonDiv.find('.ThemeBorderColor3')
    this.addButton.click()
    await this.selectAction(this.addButtonDiv.prev()) //选择字段
    await this.selectMenu() //确定字段
    await this.setTo(this.addButtonDiv.prev()) //设为  
    await this.selectPeople(this.addButtonDiv.prev()) //选择人员
    this.number++
    console.log(`%c ***** 正在添加第${this.number}个字段,一共${this.length}个字段! *****`, 'color: red')
    this.number < this.length ? this.addItem() : console.log(`%c ***** 自动化结束,一共用时${(this.number * this.time / 60).toFixed(2)}秒 *****`, 'color: green')
  },
  //选择字段
  selectAction(dom) {
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        dom.find('.Dropdown--input.Dropdown--border').click();
      })()), this.time);
    });
  },
  //确定字段
  selectMenu() {
    const that = this
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        this.length = $('.ming.Menu.ming.List li').length
        const dom = $('.ming.Menu.ming.List li').eq(that.number)
        that.value = dom.text()
        dom.click()
      })()), this.time);
    });
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
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        dom.find('.conditionFieldBox li').each((index, item) => {
          if ($(item).text() === this.value) {
            $(item).click()
          }
        })
      })()), this.time);
    });
  }
}
index.init()
