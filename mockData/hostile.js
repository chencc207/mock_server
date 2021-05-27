const getList = {
	"obj": {
		"pageNum|1-10": 1,
		"pageSize": 10,
		"size": 10,
		"orderBy": null,
		"startRow": 1,
		"endRow": 10,
		"total": 248,
		"pages": 25,
		"list|0-3": [{
			"collectId": null,
			"statTime": "@date('yyyy-MM-dd HH:mm:ss')",
			"goodsId": "19955030571",
			"goodsName": "@cword(30, 50)",
			"goodsLink": "https://detail.tmall.com/item.htm?id=19955030571",
			"price|1-100": 11,
			"statDate": "@date('yyyy-MM-dd')",
			"fileTime": "2021052700",
			"picList|1-2": ["@image()"],
			"picNames|1-3": [{
				"picUrl": "@image()"
			}],
			"skuList": [{
				"skuId": "@integer()",
				"price|1-3": "@integer(1, 133)"
			}]
		}],
		"firstPage": 1,
		"prePage": 0,
		"nextPage": 2,
		"lastPage": 8,
		"isFirstPage": true,
		"isLastPage": false,
		"hasPreviousPage": false,
		"hasNextPage": true,
		"navigatePages": 8,
		"navigatepageNums": [1, 2, 3, 4, 5, 6, 7, 8]
	},
	"code": 200,
	"id": null,
	"message": null,
	"success": true,
	"errors": [],
	"failed": false
}

const getGoodsShop = {
	"obj|1-5": [{
		"tbShopId": "@integer(1000000000, 10000000000)",
		"shopName": "@cword(5,10)",
		"shopId": "@integer(100, 1000)"
	}],
	"code": 200,
	"id": null,
	"message": "查询成功",
	"success": true,
	"errors": [],
	"failed": false
}

module.exports = {
  ShopGoodsInfo: {
	getList
  },
  ShopGoodsCollection: {
	getGoodsShop
  }
}