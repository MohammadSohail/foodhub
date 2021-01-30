const Menu = require("../model/menu");
const slugify = require("slugify");

const createCategories = (categories, parentId = null) => {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let x of category) {
    categoryList.push({
      _id: x._id,
      name: x.name,
      slug: x.slug,
      children: createCategories(categories, x._id),
    });
  }

  return categoryList;
};

exports.addMenu = (req, res) => {
  const menuObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    menuObj.parentId = req.body.parentId;
  }

  const cat = new Menu(menuObj);
  cat.save((error, menu) => {
    if (error) return res.status(400).json({ error });
    if (menu) {
      return res.status(200).json({ menu });
    }
  });
};

exports.getMenu = (req, res) => {
  Menu.find({}).exec((error, menu) => {
    if (error) return res.status(400).json({ error });
    const menuList = createCategories(menu);
    if (menu) res.status(200).json({ menuList });
  });
};
