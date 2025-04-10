const { validationResult } = require('express-validator');
const User = require('../models/user');

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      profile: {
        dateOfBirth,
        gender,
        phone,
        address,
        medicalHistory
      }
    } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    if (name) user.name = name;
    if (dateOfBirth) user.profile.dateOfBirth = dateOfBirth;
    if (gender) user.profile.gender = gender;
    if (phone) user.profile.phone = phone;
    if (address) user.profile.address = address;
    if (medicalHistory) user.profile.medicalHistory = medicalHistory;

    await user.save();
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add medical history
exports.addMedicalHistory = async (req, res) => {
  try {
    const { condition, diagnosedDate, medications } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.profile.medicalHistory.push({
      condition,
      diagnosedDate,
      medications
    });

    await user.save();
    res.json({ message: 'Medical history added successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete medical history entry
exports.deleteMedicalHistory = async (req, res) => {
  try {
    const { historyId } = req.params;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.profile.medicalHistory = user.profile.medicalHistory.filter(
      history => history._id.toString() !== historyId
    );

    await user.save();
    res.json({ message: 'Medical history entry deleted successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}; 