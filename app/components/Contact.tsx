"use client"

import Image from "next/image"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { Input } from "@mui/base/Input"
import { Button } from "@mui/base/Button"
import { TextareaAutosize } from "@mui/base/TextareaAutosize"

const FORMSPREE_URL = "https://formspree.io/f/mdaanjvy"

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-6 md:px-12 mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold text-center">Contact</h3>

      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-[#0f1624] via-[#140f2c] to-[#1a1033] gap-14 lg:gap-20 px-4">
        <div className="relative w-full max-w-md lg:w-5/12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <Image src="/assets/bg_1.png" alt="Portfolio contact" width={720} height={900} className="object-cover w-full h-full" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1624]/90 via-transparent to-[#0f1624]/40" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#1a1033]/90 p-8 lg:p-16 rounded-lg shadow-2xl">
          <p className="text-white mb-2">Phone: <span className="text-[#13adc7]">+91 9151381254</span></p>
          <p className="text-white mb-2">Email: <span className="text-[#13adc7]">karloshyadav@iisc.ac.in</span></p>
          <p className="text-white mb-2">LinkedIn: <Link href="https://linkedin.com/in/karloshyadav" target="_blank" className="text-[#13adc7]">linkedin.com/in/karloshyadav</Link></p>
          <p className="text-white mb-8">Website: <Link href="https://karloshyadav.com.np" target="_blank" className="text-[#13adc7]">karloshyadav.com.np</Link></p>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <Input name="name" required slotProps={{ input: { placeholder: "Your Name", className: "w-full bg-[#2a1c4a] border border-gray-600 text-white p-4 rounded-lg focus:ring-2 focus:ring-[#945dd6] focus:outline-none" } }} />
            <Input type="email" name="email" required slotProps={{ input: { placeholder: "Your Email", className: "w-full bg-[#2a1c4a] border border-gray-600 text-white p-4 rounded-lg focus:ring-2 focus:ring-[#13adc7] focus:outline-none" } }} />
            <TextareaAutosize name="message" required minRows={5} placeholder="Your Message" className="w-full bg-[#2a1c4a] border border-gray-600 text-white p-4 rounded-lg focus:ring-2 focus:ring-[#6978d1] focus:outline-none" />
            <input type="text" name="_gotcha" className="hidden" />

            <Button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-[#945dd6] via-[#6978d1] to-[#13adc7] text-white py-4 text-lg font-semibold rounded-lg transition-transform hover:scale-105 disabled:opacity-60">
              {submitting ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && <p className="text-green-400 text-center">✅ Message sent successfully!</p>}
            {status === "error" && <p className="text-red-400 text-center">❌ Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
