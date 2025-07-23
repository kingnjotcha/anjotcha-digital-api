const Service = require('../models/servicesModel');
const Plan = require('../models/plansModel');
const Feature = require('../models/featuresModel');

// Get all services with plans and features
// exports.getAllServicesPricing = async (req, res) => {
//   try {
//     const services = await Service.findAll({
//       include: {
//         model: Plan,
//         include: Feature
//       }
//     });
//     const result = services.map(service => ({
//       id: service.id,
//       title: service.title,
//       icon_name: service.icon_name,
//       plans: service.Plans.map(plan => ({
//         id: plan.id,
//         name: plan.name,
//         price: plan.price,
//         features: plan.Features.map(f => f.feature)
//       }))
//     }));
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// Get pricing for a specific service

exports.getAllServicesPricing = async (req, res) => {
  try {
    const services = await Service.findAll({
      include: {
        model: Plan,
        include: Feature
      }
    });
    const result = services.map(service => ({
      id: service.id,
      name: service.name, // or service.title if you use 'title'
      icon: service.icon, // or service.icon_name if you use 'icon_name'
      description: service.description,
      plans: service.Plans.map(plan => ({
        id: plan.id,
        name: plan.name,
        price: plan.price,
        features: plan.Features.map(f => f.feature)
      }))
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getPricingByService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id, {
      include: {
        model: Plan,
        include: Feature
      }
    });
    if (!service) return res.status(404).json({ error: 'Service not found' });

    const result = {
      id: service.id,
      title: service.name,
      icon_name: service.icon,
      description: service.description,
      plans: service.Plans.map(plan => ({
        id: plan.id,
        name: plan.name,
        price: plan.price,
        features: plan.Features.map(f => f.feature)
      }))
    };
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Create a new service
// exports.createService = async (req, res) => {
//   try {
//     const { title, icon_name } = req.body;
//     const service = await Service.create({ title, icon_name });
//     res.status(201).json(service);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Update a service
// exports.updateService = async (req, res) => {
//   try {
//     const service = await Service.findByPk(req.params.id);
//     if (!service) return res.status(404).json({ error: 'Service not found' });
//     await service.update(req.body);
//     res.json(service);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// Delete a service
// exports.deleteService = async (req, res) => {
//   try {
//     const service = await Service.findByPk(req.params.id);
//     if (!service) return res.status(404).json({ error: 'Service not found' });
//     await service.destroy();
//     res.json({ message: 'Service deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// Create a plan for a service
exports.createPlan = async (req, res) => {
  try {
    const { service_id, name, price } = req.body;
    const plan = await Plan.create({ service_id, name, price });
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a plan
exports.updatePlan = async (req, res) => {
  try {
    const plan = await Plan.findByPk(req.params.planId);
    if (!plan) return res.status(404).json({ error: 'Plan not found' });
    await plan.update(req.body);
    res.json(plan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a plan
exports.deletePlan = async (req, res) => {
  try {
    const plan = await Plan.findByPk(req.params.planId);
    if (!plan) return res.status(404).json({ error: 'Plan not found' });
    await plan.destroy();
    res.json({ message: 'Plan deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add features to a plan (bulk)
exports.addFeatures = async (req, res) => {
  try {
    const { features } = req.body; // array of strings
    const planId = req.params.planId;
    const created = await Feature.bulkCreate(features.map(f => ({ plan_id: planId, feature: f })));
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update all features for a plan (replace)
exports.updateFeatures = async (req, res) => {
  try {
    const planId = req.params.planId;
    await Feature.destroy({ where: { plan_id: planId } });
    const { features } = req.body;
    const created = await Feature.bulkCreate(features.map(f => ({ plan_id: planId, feature: f })));
    res.json(created);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a feature
exports.deleteFeature = async (req, res) => {
  try {
    const feature = await Feature.findByPk(req.params.featureId);
    if (!feature) return res.status(404).json({ error: 'Feature not found' });
    await feature.destroy();
    res.json({ message: 'Feature deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createServiceWithPlansAndFeatures = async (req, res) => {
  try {
    const { name, description, icon, plans } = req.body;
    const service = await Service.create(
      {
        name,
        description,
        icon,
        Plans: plans.map(plan => ({
          name: plan.name,
          price: plan.price,
          Features: plan.features
        }))
      },
      {
        include: [
          {
            model: Plan,
            as: 'Plans',
            include: [{ model: Feature, as: 'Features' }]
          }
        ]
      }
    );
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};