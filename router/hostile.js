const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
const data = require('../mockData/hostile.js')

router.use('/ShopGoodsInfo/getList', (req, res) => {
  res.send(Mock.mock(data.ShopGoodsInfo.getList))
})

router.use('/ShopGoodsCollection/getGoodsShop', (req, res) => {
  res.send(Mock.mock(data.ShopGoodsCollection.getGoodsShop))
})

module.exports = router