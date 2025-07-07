"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Linkedin, Sparkles, Leaf, Zap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      companyName: "",
      message: "",
    })
    alert("Thank you for your inquiry. We'll get back to you soon!")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 mb-6 bg-emerald-100 rounded-full border-2 border-emerald-200">
              <Sparkles className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-8 relative">
              Contact Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get in touch with our team to discuss your energy needs and discover how we can help power your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  General Inquiries
                </CardTitle>
                <CardDescription className="text-slate-600">
                  For questions, feedback, or other inquiries, please complete the form below.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-slate-700 mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-slate-700 mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactNumber" className="text-sm font-medium text-slate-700 mb-2 block">
                      Contact Number
                    </Label>
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyName" className="text-sm font-medium text-slate-700 mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white"
                      placeholder="Please describe your inquiry or how we can help you..."
                    />
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 border-0" 
                    size="lg"
                  >
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    Get in Touch
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    We're here to help with all your energy needs. Reach out to us through any of the following
                    channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Location</h3>
                      <p className="text-slate-600">
                        Johannesburg, South Africa
                        <br />
                        Serving Southern Africa and beyond
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">+27 (0) 11 XXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">info@vilgroenergy.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </div>
                    Social Media
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Connect with us on LinkedIn for the latest updates and industry insights.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <a
                    href="#"
                    className="inline-flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors p-3 rounded-lg hover:bg-blue-50 border border-blue-200 hover:border-blue-300"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="font-medium">Follow us on LinkedIn</span>
                  </a>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="bg-slate-100 h-64 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                    <div className="text-center text-slate-500">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <MapPin className="h-6 w-6 text-teal-600" />
                      </div>
                      <p className="font-medium text-slate-700">Interactive Map</p>
                      <p className="text-sm text-slate-500">Johannesburg, South Africa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-white to-teal-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-emerald-100 rounded-full border-2 border-emerald-200">
            <Leaf className="h-8 w-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 relative">
            Stay Connected
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
          </h2>
          <p className="text-slate-600 mb-8">
            Subscribe to our newsletter for the latest energy market insights and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
            />
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}