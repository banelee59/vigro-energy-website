"use client"

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Calendar, MapPin, Phone, Mail, Building, User } from 'lucide-react';

const VilgroEnergyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    position: '',
    email: '',
    contactNumber: '',
    physicalAddress: '',
    services: [],
    otherService: '',
    volumeRequirements: '',
    frequency: '',
    customFrequency: '',
    deliveryMethod: '',
    deliveryLocation: '',
    startDate: '',
    needsQuotation: '',
    hasExistingSupplier: '',
    budgetEstimate: '',
    additionalNotes: '',
    consent: false,
    termsAgreed: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'Liquid Fuels (e.g. Diesel, Petrol, Kerosene)',
    'Natural Gas (Pipeline Supply)',
    'LNG (Liquefied Natural Gas – bulk or cylinder supply)',
    'Energy Consulting / Technical Support',
    'Other'
  ];

  const frequencyOptions = [
    'One-off',
    'Weekly',
    'Monthly',
    'Custom'
  ];

  const deliveryMethods = [
    'Bulk delivery',
    'Cylinder delivery (for LNG)',
    'Client collection'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    if (!formData.physicalAddress.trim()) newErrors.physicalAddress = 'Physical address is required';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    if (formData.services.includes('Other') && !formData.otherService.trim()) {
      newErrors.otherService = 'Please specify the other service';
    }
    if (!formData.consent) newErrors.consent = 'Consent is required';
    if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to terms and conditions';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Vilgro's energy services. Our team will contact you shortly to confirm your requirements, share pricing, and outline next steps.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Vilgro – Energy Services</h1>
        <p className="text-lg text-gray-600">Order / Inquiry Form</p>
      </div>

      <div className="space-y-8">
        {/* Client Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Client Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name / Entity <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.companyName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter company name"
              />
              {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position / Title <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your position or title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Physical Address / Location of Operation <span className="text-red-500">*</span>
              </label>
              <textarea
                name="physicalAddress"
                value={formData.physicalAddress}
                onChange={handleInputChange}
                rows={3}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.physicalAddress ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter complete address for logistics or service delivery"
              />
              {errors.physicalAddress && <p className="text-red-500 text-sm mt-1">{errors.physicalAddress}</p>}
            </div>
          </div>
        </section>

        {/* Service Selection */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Building className="w-5 h-5 mr-2" />
            Service Selection
          </h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-3">Please select the service(s) you're interested in:</p>
            {serviceOptions.map((service) => (
              <label key={service} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{service}</span>
              </label>
            ))}
            {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
            
            {formData.services.includes('Other') && (
              <div className="ml-7 mt-2">
                <input
                  type="text"
                  name="otherService"
                  value={formData.otherService}
                  onChange={handleInputChange}
                  placeholder="Please specify the other service"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.otherService ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.otherService && <p className="text-red-500 text-sm mt-1">{errors.otherService}</p>}
              </div>
            )}
          </div>
        </section>

        {/* Order/Service Details */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Order / Service Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estimated Volume / Consumption Requirements
              </label>
              <textarea
                name="volumeRequirements"
                value={formData.volumeRequirements}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. litres per month for diesel, cubic meters for gas, or tonnes for LNG"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency of Supply Needed
              </label>
              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select frequency</option>
                {frequencyOptions.map((freq) => (
                  <option key={freq} value={freq}>{freq}</option>
                ))}
              </select>
              {formData.frequency === 'Custom' && (
                <input
                  type="text"
                  name="customFrequency"
                  value={formData.customFrequency}
                  onChange={handleInputChange}
                  placeholder="Please specify custom frequency"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Method Required
              </label>
              <select
                name="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select delivery method</option>
                {deliveryMethods.map((method) => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Location (if different from business address)
              </label>
              <input
                type="text"
                name="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Alternative delivery address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Start Date / Urgency of Need
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Commercial Info */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Commercial Info <span className="text-gray-400 text-sm">(Optional, but Recommended)</span>
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you require a quotation before placing the order?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="needsQuotation"
                    value="Yes"
                    checked={formData.needsQuotation === 'Yes'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="needsQuotation"
                    value="No"
                    checked={formData.needsQuotation === 'No'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you have an existing supplier contract in place?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasExistingSupplier"
                    value="Yes"
                    checked={formData.hasExistingSupplier === 'Yes'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes (and seeking alternative/backup)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="hasExistingSupplier"
                    value="No"
                    checked={formData.hasExistingSupplier === 'No'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">No (this will be our first supply)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget Estimate <span className="text-gray-400">(Optional)</span>
              </label>
              <input
                type="text"
                name="budgetEstimate"
                value={formData.budgetEstimate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your estimated budget range"
              />
            </div>
          </div>
        </section>

        {/* Additional Notes */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Notes</h2>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Any special requirements, tank sizes, safety considerations, or technical questions"
          />
        </section>

        {/* Consent */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Consent</h2>
          <div className="space-y-3">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
              />
              <span className="text-sm text-gray-700">
                I consent to being contacted by the Vilgro team regarding this request.
              </span>
            </label>
            {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
              />
              <span className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                  terms of service and data policy
                </a>
                .
              </span>
            </label>
            {errors.termsAgreed && <p className="text-red-500 text-sm">{errors.termsAgreed}</p>}
          </div>
        </section>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default VilgroEnergyForm;