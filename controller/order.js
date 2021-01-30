const Order = require("../model/order");
const Item = require("../model/item");
const item = require("../model/item");
const { response } = require("express");

exports.create = function (req, res) {
  Order.findOne({ user: req.user._id }).exec((error, order) => {
    if (error) return res.status(400).json({ error });
    if (order) {
      // if same user order 2nd time in current session

      const isItem = order.orderItems.find(
        (o) => o.item == req.body.orderItems.item
      );

      if (isItem) {
        Order.findOneAndUpdate(
          {
            user: req.user._id,
            "orderItems.item": req.body.orderItems.item,
          },
          {
            $set: {
              "orderItems.$": {
                ...req.body.orderItems,
                quantity: isItem.quantity + req.body.orderItems.quantity,
                price: isItem.price + req.body.orderItems.price,
              },
            },
          }
        ).exec((error, _order) => {
          if (error) return res.status(400).json({ error });
          if (_order) {
            return res.status(200).json({ order: _order });
          }
        });
      } else {
        Order.findOneAndUpdate(
          { user: req.user._id },
          {
            $push: {
              orderItems: req.body.orderItems,
            },
          }
        ).exec((error, _order) => {
          if (error) return res.status(400).json({ error });
          if (_order) {
            return res.status(200).json({ order: _order });
          }
        });
      }
    } else {
      const order = new Order({
        user: req.user._id,
        orderItems: [req.body.orderItems],
        total_Price: req.body.orderItems.price,
      });

      order.save((error, order) => {
        if (error) return res.status(400).json({ error });
        if (order) {
          return res.status(201).json({ order });
        }
      });
    }
  });
};

exports.getOrderItems = (req, res) => {
  //const { user } = req.body.payload;
  //if(user){
  Order.findOne({ user: req.user._id })
    //.populate("orderItems.item", "_id name price productPictures")
    .exec((error, order) => {
      if (error) return res.status(400).json({ error });
      if (order) {
        let orderItems = {};
        order.orderItems.forEach((i, index) => {
          orderItems[i.item._id.toString()] = {
            _id: i.item._id.toString(),
            qty: i.quantity,
          };
        });
        res.status(200).json({ orderItems });
      }
    });
  //}
};
