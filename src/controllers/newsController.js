const News = require('../models/newsModel');

// Create news
exports.createNews = async (req, res) => {
  try {
    const { title, body, author, published, img } = req.body;
    const news = await News.create({ title, body, author, published, img });
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.findAll();
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get news by ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ error: 'News not found' });
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update news
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ error: 'News not found' });

    const fieldsToUpdate = {};
    ['title', 'body', 'author', 'published', 'img'].forEach(field => {
      if (req.body[field] !== undefined) fieldsToUpdate[field] = req.body[field];
    });

    await news.update(fieldsToUpdate);
    res.status(200).json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete news
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ error: 'News not found' });
    await news.destroy();
    res.status(200).json({ message: 'News deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};