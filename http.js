const BASE_URL = ''

export const myRequest = (Options) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL + Options.url, 
			method : Options.method || "GET"
			data: Options.data || {}
			header: {
				'custom-header': 'hello' //自定义请求头信息
			},
			success: (res) => {
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		});
	})
}
