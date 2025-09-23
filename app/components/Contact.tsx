'use client'
import { useState } from 'react'
import Link from "next/link";
import { Input } from '@mui/base/Input';
import { Button } from '@mui/base/Button';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in your name, email, and message.')
      return
    }
    setSubmitting(true)
    try {
      // Replace with your API route or service if you add one later:
      console.log('Form submitted:', { name, email, message })
      // Optional: simple mailto fallback
      const mailto = `mailto:karloshyadav18@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nReply to: ' + email)}`
      window.location.href = mailto
    } finally {
      setSubmitting(false)
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <div className="container mx-auto px-6 md:px-12 mt-20">
      <div className="inline-block text-center group">
        <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
          Contact me
        </h3>
      </div>

      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br relative overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden>
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#945dd6] opacity-30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-[#6978d1] opacity-20 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-[#13adc7] opacity-25 rounded-full animate-bounce"></div>
        </div>

        {/* Form Section */}
        <div className="relative w-full lg:w-1/2 bg-[#1a1033] p-8 lg:p-16 flex items-center justify-center z-10 rounded-lg shadow-2xl">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h6 className="text-xl text-white tracking-wider">GET IN TOUCH</h6>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="space-y-2">
                <label htmlFor="name" className="text-white">Your Name</label>
                <Input
                  id="name"
                  value={name}
                  onChange={(_, val) => setName(val ?? '')}
                  placeholder="What's your good name?"
                  className="w-full bg-[#2a1c4a] border border-gray-600 text-white placeholder:text-gray-400 p-4 rounded-lg focus:ring-2 focus:ring-[#945dd6] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-white">Your Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(_, val) => setEmail(val ?? '')}
                  placeholder="What's your email address?"
                  className="w-full bg-[#2a1c4a] border border-gray-600 text-white placeholder:text-gray-400 p-4 rounded-lg focus:ring-2 focus:ring-[#13adc7] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white">Your Message</label>
                <TextareaAutosize
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minRows={5}
                  placeholder="What do you want to say?"
                  className="w-full bg-[#2a1c4a] border border-gray-600 text-white placeholder:text-gray-400 p-4 rounded-lg focus:ring-2 focus:ring-[#6978d1] focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-[#945dd6] via-[#6978d1] to-[#13adc7] text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:scale-105 hover:opacity-90 transition-transform duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Contact + Socials */}
      <div className="md:flex md:justify-around md:items-center grid-cols-2 grid gap-y-4 md:px-0 px-5 mt-40 justify-center items-center mb-8">
        <div className="order-1 sm:order-1">
          <p className="text md:text-xl text-sm text-center md:text-start text-nowrap">
            Feel free to contact me
          </p>
        </div>

        <div className="md:px-0 px-3 md:text-lg text-nowrap text-sm font-medium md:col-span-1 order-3 sm:order-3">
          <a
            href="mailto:ykarlosh@gmail.com"
            className="text-white md:text-xl text-sm"
          >
            ykarlosh@gmail.com
          </a>
        </div>

        <div className="flex gap-8 md:items-center md:justify-center justify-center md:order-3 order-2 items-end">
          <Link href={"https://www.linkedin.com/in/karloshyadav/"} aria-label="Karlosh on LinkedIn">
            <FaLinkedin className="md:w-7 md:h-7 w-6 h-6 text-white" />
          </Link>
          <Link href={"https://github.com/karloshyadav"} aria-label="Karlosh on GitHub">
            <FaGithub className="md:w-7 md:h-7 w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}
