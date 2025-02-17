// This controller handles fetching and updating betting predictions.
const predictionModel = require('../models/predictionModel');

exports.getPredictions = async (req, res) => {
  try {
    const predictions = await predictionModel.getAll();
    res.json({ predictions });
  } catch (error) {
    console.error('Error fetching predictions:', error);
    res.status(500).json({ error: 'Unable to load predictions' });
  }
};

exports.updatePrediction = async (req, res) => {
  const { predictionId, prediction, odds } = req.body;
  try {
    const result = await predictionModel.update(predictionId, { prediction, odds });
    res.json({ message: 'Prediction updated successfully', result });
  } catch (error) {
    console.error('Error updating prediction:', error);
    res.status(500).json({ error: 'Failed to update prediction' });
  }
};
