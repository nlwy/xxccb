const index = {
  init() {
    //请将产品列表替换到这里     
    this.values = ["雪花9号啤酒", "雪花啤酒瓶听喜力啤酒瓶听金威啤酒瓶听", "365全麦精酿啤酒", "痹痛冷敷贴"]
    this.getProductList()
    this.data = []
    this.number = 0
    this.time = 1000
  },
  // 获取 blob
  getBlob(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (xhr.status === 200) {
        cb(xhr.response);
      }
    };
    xhr.send();
  },
  // 保存文件
  saveAs(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      var link = document.createElement('a');
      var body = document.querySelector('body');

      link.href = window.URL.createObjectURL(blob);
      link.download = filename;

      // fix Firefox
      link.style.display = 'none';
      body.appendChild(link);

      link.click();
      body.removeChild(link);

      window.URL.revokeObjectURL(link.href);
    };
    console.log(`%c ****${filename}下载成功!****`, 'color:red')
  },
  // 下载文件
  download(url, filename) {
    const that = this
    return that.getBlob(url, function (blob) {
      that.saveAs(blob, filename);
    });
  },
  //获取产品信息
  async getProductList() {
    const data = JSON.stringify({
      appId: 'a58e759f-8e1d-4dc9-b70a-4f86c98a27d5',
      viewId: '5ea19a772fc9510001e27cc5',
      worksheetId: '5ea19a772fc9510001e27cc4',
      status: 1,
      pageIndex: 1,
      sortControls: [],
      pageSize: 50,
      keyWords: '',
      searchType: 1,
      filterControls: [{
        controlId: '5ea1af554f222e0001d9fd8e',
        dataType: 2,
        spliceType: 1,
        filterType: 1,
        values: this.values
      }],
      isUnRead: false
    })
    console.log('%c ****获取图片信息开始****', 'color: green')
    const dataList = await $.ajax({
      type: "POST",
      contentType: "application/json;charset=UTF-8",
      url: 'https://www.mingdao.com/api/Worksheet/GetFilterRows',
      data: data,
      dataType: 'json'
    }).then(data => {
      return data.data.data
    });
    console.log('%c ****开始下载图片****', 'color:red')
    console.log(`%c ****一共${dataList.length}条数据****`, 'color:red')
    dataList.forEach(item => {
      const value = JSON.parse(item['5ea1af554f222e0001d9fd97'])
      value.forEach((itemList, index) => {
        itemList.previewUrl = itemList.previewUrl.split("?")[0]
      })
      this.data.push({
        name: item['5ea1af554f222e0001d9fd8e'],
        value,
      })
    })
    this.downloadFile()
  },
  //下载文件   
  async downloadFile() {
    await this.saveFile(this.data[this.number])
    this.number < this.data.length ? this.downloadFile() : console.log('%c ****下载最后一个商品附件****', 'color: green')
  },
  saveFile(list) {
    this.number++
    return new Promise(resolve => {
      setTimeout(() => resolve((() => {
        list.value.forEach((item, index) => {
          this.download(item.previewUrl, `${list.name}_${index}${item.ext}`)
        })
      })()), this.time);
    })
  }
}
index.init()
