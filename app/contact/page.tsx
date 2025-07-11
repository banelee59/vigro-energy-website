"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      message: "",
    })
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            {/* Drop us a message section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Drop us a message</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
              At the heart of everything we do is service. Contact us, and we’ll be ready to assist with your energy needs
              </p>
            </div>

            {/* Logo and Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* <div className="flex items-center space-x-4 mb-6">
                <Image
                  src="/images/log.png"
                  alt="ePact Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div> */}

              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Location</h3>
                  <p>Block B Cullinan Office Park, Cullinan Close, Morningside, Sandton, 2057</p>
                  <p>Serving Southern Africa and beyond</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Phone</h3>
                  <p>+27 (71) 683 8744 | +27 72 612 3618</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Email</h3>
                  <p>info@vilgro.com | sales@vilgro.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Aligned Form Box */}
          <div className="flex items-end h-full">
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block uppercase tracking-wide">
                    NAME
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 bg-white text-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-2 block uppercase tracking-wide">
                      PHONE NUMBER
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 bg-white text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block uppercase tracking-wide">
                      EMAIL ADDRESS
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 bg-white text-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block uppercase tracking-wide">
                    MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 bg-white text-lg resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
