const index = {
  init() {
    //请将产品列表替换到这里     
    this.values = []
    this.getProductList()
    this.data = []
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
  saveAs(blob, filename, n, index) {
    console.log(`%c ****正在下载第${n}条数据第${index}涨图片!****`, 'color: pink')

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
  download(url, filename, n, index) {
    const that = this
    that.getBlob(url, function (blob) {
      that.saveAs(blob, filename, n, index);
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
    console.log(`%c ****一共${dataList.length}条产品****`, 'color:red')
    dataList.forEach((item, n) => {
      const value = JSON.parse(item['5ea1af554f222e0001d9fd97'])
      value.forEach((itemList, index) => {
        const ext = itemList.ext
        value[index] = itemList.previewUrl.split("?")[0]
        this.download(value[index], `${item['5ea1af554f222e0001d9fd8e']}_${index}.${ext}`, n + 1, index + 1)
      })
      this.data.push({
        name: item['5ea1af554f222e0001d9fd8e'],
        value
      })
    })
  }
}
index.init()
