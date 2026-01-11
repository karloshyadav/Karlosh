'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, FormEvent } from "react"
import { Input } from "@mui/base/Input"
import { Button } from "@mui/base/Button"
import { TextareaAutosize } from "@mui/base/TextareaAutosize"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { GiCricketBat } from "react-icons/gi"

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
        headers: {
          Accept: "application/json",
        },
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
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold text-center">
        Contact me
      </h3>

      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-[#0f1624] via-[#140f2c] to-[#1a1033] gap-14 lg:gap-20 px-4">

        {/* Image Section */}
        <div className="relative w-full max-w-md lg:w-5/12">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/assets/bg_1.png"
              alt="Karlosh on the field"
              width={720}
              height={900}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1624]/90 via-transparent to-[#0f1624]/40" />
            <div className="absolute bottom-0 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-[#13adc7]/80">
                Always game-ready
              </p>
              <h4 className="mt-2 text-2xl font-semibold">
                Let&apos;s build the next winning product together.
              </h4>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-[#1a1033]/90 p-8 lg:p-16 rounded-lg shadow-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <h6 className="text-xl text-white tracking-wider">
              GET IN TOUCH
            </h6>

            <Input
              name="name"
              required
              slotProps={{
                input: {
                  placeholder: "Your Name",
                  className:
                    "w-full bg-[#2a1c4a] border border-gray-600 text-white p-4 rounded-lg focus:ring-2 focus:ring-[#945dd6] focus:outline-none",
                },
              }}
            />

            <Input
              type="email"
              name="email"
              required
              slotProps={{
                input: {
                  placeholder: "Your Email",
                  className:
                    "w-full bg-[#2a1c4a] border border-gray-600 text-white p-4 rounded-lg focus:ring-2 focus:ring-[#13adc7] focus:outline-none",
                },
              }}
            />

            <TextareaAutosize
              name="message"
              required
              minRows={5}
              placeholder="Your Message"
              className="w-full bg-[#2a1c4a] border border-gray-600 text-white p-4 rounded-lg focus:ring-2 focus:ring-[#6978d1] focus:outline-none"
            />

            {/* Honeypot (spam protection) */}
            <input type="text" name="_gotcha" className="hidden" />

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-[#945dd6] via-[#6978d1] to-[#13adc7] text-white py-4 text-lg font-semibold rounded-lg transition-transform hover:scale-105 disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>

          <p className="text-center text-sm text-white/80 mt-6">
            Prefer a quick overview?{" "}
            <Link
              href="/assets/cvfv.pdf"
              target="_blank"
              className="text-[#13adc7] hover:underline"
            >
              Download my CV
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-32 text-white">
        <p>Let’s collaborate on something meaningful</p>

        <div className="flex gap-6">
          <Link href="https://www.linkedin.com/in/karloshyadav/" target="_blank">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://github.com/karloshyadav" target="_blank">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.instagram.com/karloshyadav/" target="_blank">
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://cricheroes.com/player-profile/9928702/karlosh-yadav/matches"
            target="_blank"
          >
            <GiCricketBat size={24} />
          </Link>
        </div>
      </div>
    </div>
  )
}
