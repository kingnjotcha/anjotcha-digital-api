const Promotion = require('../models/promotionsModel');

// Create a new promotion
exports.createPromotion = async (req, res) => {
  try {
    const { title, offer, desc, valid, img } = req.body;
    const promo = await Promotion.create({ title, offer, desc, valid, img });
    res.status(200).json(promo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all promotions
exports.getAllPromotions = async (req, res) => {
  try {
    const promos = await Promotion.findAll();
    res.status(200).json(promos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single promotion by ID
exports.getPromotionById = async (req, res) => {
  try {
    const promo = await Promotion.findByPk(req.params.id);
    if (!promo) return res.status(404).json({ error: 'Promotion not found' });
    res.status(200).json(promo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Update a promotion
// exports.updatePromotion = async (req, res) => {
//   try {
//     const { title, offer, desc, valid, img } = req.body;
//     const promo = await Promotion.findByPk(req.params.id);
//     if (!promo) return res.status(404).json({ error: 'Promotion not found' });
//     await promo.update({ title, offer, desc, valid, img });
//     res.status(200).json(promo);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };
exports.updatePromotion = async (req, res) => {
  try {
    const promo = await Promotion.findByPk(req.params.id);
    if (!promo) return res.status(404).json({ error: 'Promotion not found' });

    // Only update fields that are present in the request body
    const fieldsToUpdate = {};
    ['title', 'offer', 'desc', 'valid', 'img'].forEach(field => {
      if (req.body[field] !== undefined) fieldsToUpdate[field] = req.body[field];
    });

    await promo.update(fieldsToUpdate);
    res.status(200).json(promo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a promotion
exports.deletePromotion = async (req, res) => {
  try {
    const promo = await Promotion.findByPk(req.params.id);
    if (!promo) return res.status(404).json({ error: 'Promotion not found' });
    await promo.destroy();
    res.status(200).json({ message: 'Promotion deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};