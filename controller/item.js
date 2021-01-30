const Item = require("../model/item");

function createItem(items) {
  const itemList = [];
  for (let i of items) {
    itemList.push({
      id: i.id,
      title: i.title,
      price: i.price,
      inStock: i.inStock,
      photo: i.photo,
      description: i.description,
      menu: i.menu,
      type: i.type,
    });
  }
  return itemList;
}

exports.getItems = (req, res) => {
  Item.find().exec((error, item) => {
    if (error) return res.status(400).json({ error });
    if (item) {
      const items = createItem(item);
      res.status(200).json({ items });
    }
  });
};

exports.createItem = (req, res) => {
  const { id, title, price, inStock, description, type } = req.body;
  const photo = req.file.filename;

  const item = new Item({
    id: id,
    title,
    price,
    inStock,
    photo: photo,
    description,
  });

  item.save((error, item) => {
    if (error) return res.status(400).json({ error });
    if (item) {
      res.status(201).json({ item });
    }
  });
};
