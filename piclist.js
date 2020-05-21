const index = {
  init() {
    this.number = $('.main-right-grid .editableCellCon')[0].classList[2].split('-')[1]
    this.time = 1000
    this.addProductPicture()

  },
  //添加附件   
  async addProductPicture() {
    const table = $('.main-right-grid')
    const row = table.find(`.row-${this.number}.col-1`)
    this.text = table.find(`.row-${this.number}.col-4 span`).text()
    this.has = false
    row.click()
    await this.openProduct()
    await this.openKnowledge()
    try {
      if (!this.has) {
        await this.folderSearch()
        await this.selectPicture()
        await this.enterPictrue()
        await this.savePicture()
      }
    } catch (e) {
      console.log("%c *****服务器异常重新开始***** ", 'color: red');
      this.addProductPicture()
    }
    await this.clickPicture()
    this.number++
    this.has = true
    row.length !== 0 && this.addProductPicture()
  },
  //打开产品   
  openProduct() {
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        console.log("%c *****打开产品***** ", 'color: red');
        $('.ming.Icon.icon-default.icon.icon-attachment.Font17').eq(0).click()
      })()), this.time * 5);
    });

  },
  //打开知识库
  openKnowledge() {
    this.has = $('.UploadFiles-filesWrapper').is(":visible")
    if (this.has) return
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        console.log("%c *****打开知识库***** ", 'color: red');
        $('.UploadFiles-entrys').find('.flexRow.valignWrapper').eq(1).click()
      })()), this.time);
    });
  },
  //搜索
  folderSearch() {
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        console.log("%c *****搜索图片***** ", 'color: red');
        $('.folderSearch input').val(this.text)
        $('.folderSearch .icon-search').click()
      })()), this.time);
    });
  },
  //选择图片
  selectPicture() {
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        console.log("%c *****选择图片***** ", 'color: red');
        $('.nodeList li').addClass('ThemeBGColor5').attr('nodetype', 2)
      })()), this.time * 5);
    });
  },
  //确定
  enterPictrue() {
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        console.log("%c *****确定选择***** ", 'color: red');
        $('#folderSelectDialog .yesText.boderRadAll_3.ThemeBGColor3')[0].click()
      })()), this.time);
    });
  },
  //保存
  savePicture() {
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        console.log("%c *****保存成功***** ", 'color: red');
        $('.updateRowButton .mRight24')[0].click()
      })()), this.time * 5);
    });
  },
  //关闭
  clickPicture() {
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        $('.mui-dialog-close-btn')[0].click()
      })()), this.time * 5);
    });
  }
}
index.init()
