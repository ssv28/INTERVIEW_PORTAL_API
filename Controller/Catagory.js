var CATAGORY = require('../Models/catagories')

exports.catagoryCreate = async function (req, res, next) {
  try {
    let catagoryData = await CATAGORY.create(req.body)
    res.status(201).json({
      status: "success",
      message: "catagory Create success",
      data: catagoryData
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}

exports.catagoryFind = async function (req, res, next) {
  try {
    if (req.query.search) {
      let catagoryDataSearch = await CATAGORY.find({catagoryName : {$regex : req.query.search , $options : 'i'}})
      res.status(200).json({
        status: "success",
        message: "catagory Search success",
        data: catagoryDataSearch
      }) 
    } else {
      let catagoryData = await CATAGORY.find()
      res.status(200).json({
        status: "success",
        message: "catagory Found success",
        data: catagoryData
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}

exports.catagoryDelete = async function (req, res, next) {
  try {
    let findcatagory = await CATAGORY.findById(req.params.id)
    if (!findcatagory) {
      throw new Error("Catagory is Already Delete")
    }
    await CATAGORY.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: "success",
      message: "catagory Delete success",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}

exports.catagoryUpdate = async function (req, res, next) {
  try {
    let CatagoryData = await CATAGORY.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json({
      status: "success",
      message: "catagory Update success",
      data: CatagoryData
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
}





