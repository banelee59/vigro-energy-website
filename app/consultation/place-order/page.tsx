"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Fuel, Zap, Building, TrendingUp, Handshake } from "lucide-react"

export default function PlaceOrderPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    serviceType: "",
    productType: "",
    quantity: "",
    deliveryLocation: "",
    timeframe: "",
    specifications: "",
    additionalRequirements: "",
    agreedToTerms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreedToTerms: checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreedToTerms) {
      alert("Please agree to the terms and conditions to proceed.")
      return
    }
    console.log("Order submitted:", formData)
    alert("Thank you for your order request. Our team will contact you within 24 hours to discuss your requirements.")
    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      serviceType: "",
      productType: "",
      quantity: "",
      deliveryLocation: "",
      timeframe: "",
      specifications: "",
      additionalRequirements: "",
      agreedToTerms: false,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Place an Order</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Submit your energy requirements and our team will provide you with a customized solution and competitive
            pricing.
          </p>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                  <Fuel className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Liquid Fuels</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Crude oil, gasoline, diesel, jet fuel, and other refined petroleum products.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Natural Gas & LNG</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Natural gas supply, LNG import/export, and gas infrastructure solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Infrastructure Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Storage facilities, pipelines, terminals, and distribution networks.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Strategic Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Market analysis, risk management, regulatory compliance, and strategic planning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow lg:col-start-2">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Mergers & Acquisitions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transaction advisory, due diligence, valuation, and post-merger integration.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Submit Your Requirements</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below with your specific requirements and our team will get back to you with a
                customized solution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Service Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select onValueChange={(value) => handleSelectChange("serviceType", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="liquid-fuels">Liquid Fuels</SelectItem>
                        <SelectItem value="natural-gas-lng">Natural Gas & LNG</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure Development</SelectItem>
                        <SelectItem value="advisory">Strategic Advisory</SelectItem>
                        <SelectItem value="ma">Mergers & Acquisitions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="productType">Product/Service Details</Label>
                    <Input
                      id="productType"
                      name="productType"
                      type="text"
                      value={formData.productType}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="e.g., Diesel, Gasoline, LNG, etc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="quantity">Quantity/Volume</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="e.g., 1000 MT, 50,000 liters"
                    />
                  </div>
                  <div>
                    <Label htmlFor="deliveryLocation">Delivery Location</Label>
                    <Input
                      id="deliveryLocation"
                      name="deliveryLocation"
                      type="text"
                      value={formData.deliveryLocation}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="timeframe">Required Timeframe</Label>
                  <Select onValueChange={(value) => handleSelectChange("timeframe", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specifications">Technical Specifications</Label>
                  <Textarea
                    id="specifications"
                    name="specifications"
                    rows={4}
                    value={formData.specifications}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Please provide any specific technical requirements, quality standards, or certifications needed..."
                  />
                </div>

                <div>
                  <Label htmlFor="additionalRequirements">Additional Requirements</Label>
                  <Textarea
                    id="additionalRequirements"
                    name="additionalRequirements"
                    rows={4}
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Any additional information, special requirements, or questions you'd like to include..."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={handleCheckboxChange}
                    className="mt-1"
                  />
                  <div className="text-sm">
                    <Label htmlFor="terms" className="cursor-pointer">
                      I agree to the{" "}
                      <a href="#" className="text-green-700 hover:text-green-800 underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-green-700 hover:text-green-800 underline">
                        Privacy Policy
                      </a>
                      . I understand that this is a request for quotation and not a binding order. *
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800"
                  size="lg"
                  disabled={!formData.agreedToTerms}
                >
                  Submit Order Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Request</h3>
              <p className="text-gray-600">
                Fill out the order form with your specific requirements and submit your request.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review & Analysis</h3>
              <p className="text-gray-600">
                Our team reviews your requirements and conducts market analysis to provide the best solution.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quotation</h3>
              <p className="text-gray-600">
                Receive a detailed quotation with pricing, terms, and delivery schedule within 24-48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">
                Upon agreement, we execute the order with full project management and delivery support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help with Your Order?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Our team is here to assist you with any questions or special requirements you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              Contact Our Sales Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-700 bg-transparent"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
