const index = {
  init() {
    this.number = $('.main-right-grid .editableCellCon')[0].classList[2].split('-')[1]
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
    //         $.ajax({
    //   type: "POST",
    //           contentType: "application/json;charset=UTF-8",
    //   url: 'https://www.mingdao.com/api/Worksheet/GetFilterRows',
    //   data: data,
    //           headers:{
    //             'Access-Control-Allow-Origin': '*',
    //           	cookies:{
    //               mdAutoLogin:'accountId%3D26afd876-edb1-4853-8fc3-9b1af2032c58%26password%3D06708c0560870830bd0f30bf06d0de0540f70aa01f0640b6',
    //               md_pss_id:'0b102205f0ae0250f50830840cb0210ca0130cb0930a1092',
    //               LoginName:'13717535884',
    //           	}
    //           },
    //   success: function(datas){console.log(datas)},
    //   dataType: 'json'
    // });
  },
  //更新附件
  updateWorkSheetRow() {
    $('body').append('<iframe style="width:500px;height:500px;position:absolute;left:0;top:0;z-index:9999" src="https://www.mingdao.com/app/my">')
  }
}
index.init()
