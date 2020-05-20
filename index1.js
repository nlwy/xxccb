const index = {
  init() {
    this.number = 0
    this.time = 100
    // this.addProductPicture()
    // this.updateWorkSheetRow()
    this.getProductAnnex()

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
    //      	const data = JSON.stringify({"appId":"a58e759f-8e1d-4dc9-b70a-4f86c98a27d5","viewId":"5ea19a772fc9510001e27cc5","worksheetId":"5ea19a772fc9510001e27cc4","status":1,"pageIndex":1,"sortControls":[],"pageSize":50,"keyWords":"","searchType":1,"filterControls":[{"controlId":"5ea1a7aa543e27000103574f","dataType":2,"spliceType":1,"filterType":1,"values":["雪花9号系列啤酒"]}],"isUnRead":false})
    // //       $.post('https://www.mingdao.com/api/Worksheet/GetFilterRows',data,function( data ) {
    // //   console.log( data.name ); // John
    // //   console.log( data.time ); // 2pm
    // // },'json').then(data=>{
    // //     	console.log(data)
    // //     })
    const data = JSON.stringify({
      "appId": "3020555a-7b22-4275-a872-4a4db084e3e0",
      "viewId": "5ebe3f1749907f02e5804b2c",
      "worksheetId": "5ebcfd8249907f02e5804690",
      "rowId": "3c33bf9a-5f01-4d5d-9c06-8adcb3aa8d93",
      "newOldControl": [{
        "controlId": "5ebd0ae4a6313b02e7fae0ff",
        "controlName": "产品图",
        "type": 14,
        "editType": 1,
        "value": [{
          "fileId": "3fc32e93-71e8-43e9-a6c7-d9bb5b78aeac",
          "originalFilename": "O1CN01RF0zWt1nCmIjX1OtD_!!6000000005054-2-at",
          "ext": ".png",
          "refId": "",
          "previewUrl": "https://filepub.mingdao.com/pic/202004/24/cJEfiZbxDDQdgnD_63592448.png?imageMogr2/auto-orient|imageView2/1/w/21/h/24&e=1589967073&token=PGtAPYyCYxCQ1zckbL-ecATOk42z8P3jdPahEnzt:TNjx17mCKwyvA-4mqFHNupA_0P4=",
          "createTime": "2020-04-24T20:32:22.383+08:00"
        }, {
          "fileId": "0bf686d8-71f8-4fef-b681-fa00bb283e84",
          "originalFilename": "O1CN01UM5ZF11fBqYUC9sIF_!!6000000003969-2-at",
          "ext": ".png",
          "refId": "",
          "previewUrl": "https://filepub.mingdao.com/pic/202004/24/fIypjqHtipSfVhK_2078549610.png?imageMogr2/auto-orient|imageView2/1/w/21/h/24&e=1589967073&token=PGtAPYyCYxCQ1zckbL-ecATOk42z8P3jdPahEnzt:m0Rag04o0bFpVhDmqtXtBCfGqwk=",
          "createTime": "2020-04-24T20:32:22.383+08:00"
        }]
      }]
    })
    $.ajax({
      type: "POST",
      url: 'http://123.56.172.140/wwwapi/Worksheet/UpdateWorksheetRow',
      data: data,
      success: function (datas) {
        console.log(datas)
      },
      dataType: 'json'
    });
  },
  //更新附件
  updateWorkSheetRow() {
    $('body').append('<iframe style="width:500px;height:500px;position:absolute;left:0;top:0;z-index:9999" src="https://www.mingdao.com/app/my">')
  }
}
index.init()
