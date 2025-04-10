const express = require('express');
const { check } = require('express-validator');
const profileController = require('../controllers/profile.controller');
const { auth } = require('../middlewares/auth');

const router = express.Router();

// Validation middleware
const profileValidation = [
  check('name', 'Name is required').optional().notEmpty(),
  check('profile.dateOfBirth', 'Invalid date').optional().isISO8601(),
  check('profile.gender', 'Gender is required').optional().notEmpty(),
  check('profile.phone', 'Invalid phone number').optional().isMobilePhone(),
  check('profile.address', 'Address is required').optional().notEmpty()
];

const medicalHistoryValidation = [
  check('condition', 'Condition is required').notEmpty(),
  check('diagnosedDate', 'Invalid date').isISO8601(),
  check('medications', 'Medications must be an array').isArray()
];

// Routes
router.get('/', auth, profileController.getProfile);
router.put('/', auth, profileValidation, profileController.updateProfile);
router.post('/medical-history', auth, medicalHistoryValidation, profileController.addMedicalHistory);
router.delete('/medical-history/:historyId', auth, profileController.deleteMedicalHistory);

module.exports = router; 