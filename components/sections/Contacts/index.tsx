'use client'

import CTAButton from '@/components/animated/CTAButton'
import { useRef, useState } from 'react'

const SERVICES = ['Professional Website', 'App Development']
const CONTACT_METHODS = ['Email', 'WhatsApp', 'Phone Call']

export function Contacts() {
  const contactsRef = useRef<HTMLElement>(null)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [selectedContact, setSelectedContact] = useState('')

  return (
    <section
      ref={contactsRef}
      className="contacts-section relative flex min-h-screen overflow-hidden bg-neutral-600 px-6 py-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row">
        {/* Left column */}
        <div className="relative flex max-w-full flex-col gap-12 lg:max-w-1/2">
          <h1 className="font-antonio text-center text-[32px] leading-[0.9] font-black tracking-tighter text-white uppercase sm:text-[40px] md:text-[48px] lg:w-80 lg:text-left lg:text-[64px]">
            Book Your Appointment
          </h1>
          <p className="font-reenie text-center text-[20px] leading-tight text-white uppercase md:text-[28px] lg:text-left lg:text-[32px]">
            TO SCHEDULE YOUR APPOINTMENT, PLEASE PROVIDE THE FOLLOWING
            INFORMATION. WE&apos;LL SEND YOU A CONFIRMATION EMAIL AND A REMINDER
            BEFORE YOUR APPOINTMENT.
          </p>
          <p className="font-reenie text-center text-[20px] leading-tight text-white md:text-[28px] lg:text-left lg:text-[32px]">
            info@duaskala.com
            <br />
            +62 8818374113
          </p>
        </div>

        {/* Right column — form card */}
        <div className="relative flex w-full flex-col items-center gap-8 bg-white px-8 py-12 md:px-12">
          <h1 className="font-antonio mb-12 text-[32px] leading-[0.9] font-black tracking-tighter text-neutral-600 uppercase sm:text-[40px] md:text-[48px] lg:text-[64px]">
            Your Information
          </h1>

          <div className="flex w-full flex-col gap-12">
            {/* Service dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setServiceOpen((o) => !o)
                  setContactOpen(false)
                }}
                className="font-reenie flex w-full items-center justify-between border-b border-neutral-300 pb-3 text-left text-[18px] tracking-tight text-neutral-400 uppercase md:text-[22px]"
              >
                <span className={selectedService ? 'text-neutral-600' : ''}>
                  {selectedService || 'SELECT SERVICE YOU NEED'}
                </span>
                <span className="text-lg text-neutral-400">&#x2304;</span>
              </button>
              {serviceOpen && (
                <ul className="absolute z-20 mt-1 w-full border border-neutral-200 bg-white shadow-md">
                  {SERVICES.map((s) => (
                    <li key={s}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedService(s)
                          setServiceOpen(false)
                        }}
                        className="font-reenie w-full px-4 py-2 text-left text-[18px] tracking-tight text-neutral-600 uppercase hover:bg-neutral-100"
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="ENTER YOUR NAME"
                className="font-reenie w-full border-b border-neutral-300 pb-3 text-[18px] tracking-tight text-neutral-600 uppercase outline-none placeholder:text-neutral-400 focus:border-neutral-600 md:text-[22px]"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="font-reenie w-full border-b border-neutral-300 pb-3 text-[18px] tracking-tight text-neutral-600 uppercase outline-none placeholder:text-neutral-400 focus:border-neutral-600 md:text-[22px]"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="ENTER YOUR PHONE NUMBER"
                className="font-reenie w-full border-b border-neutral-300 pb-3 text-[18px] tracking-tight text-neutral-600 uppercase outline-none placeholder:text-neutral-400 focus:border-neutral-600 md:text-[22px]"
              />
            </div>

            {/* Brand */}
            <div>
              <input
                type="text"
                placeholder="COMPANY/BRAND NAME"
                className="font-reenie w-full border-b border-neutral-300 pb-3 text-[18px] tracking-tight text-neutral-600 uppercase outline-none placeholder:text-neutral-400 focus:border-neutral-600 md:text-[22px]"
              />
            </div>

            {/* Tell us more */}
            <div>
              <input
                type="text"
                placeholder="TELL US MORE ABOUT YOUR PROJECT"
                className="font-reenie w-full border-b border-neutral-300 pb-3 text-[18px] tracking-tight text-neutral-600 uppercase outline-none placeholder:text-neutral-400 focus:border-neutral-600 md:text-[22px]"
              />
            </div>

            {/* Contact method dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setContactOpen((o) => !o)
                  setServiceOpen(false)
                }}
                className="font-reenie flex w-full items-center justify-between border-b border-neutral-300 pb-3 text-left text-[18px] tracking-tight text-neutral-400 uppercase md:text-[22px]"
              >
                <span className={selectedContact ? 'text-neutral-600' : ''}>
                  {selectedContact || 'HOW SHOULD WE GET IN TOUCH WITH YOU?'}
                </span>
                <span className="text-lg text-neutral-400">&#x2304;</span>
              </button>
              {contactOpen && (
                <ul className="absolute z-20 mt-1 w-full border border-neutral-200 bg-white shadow-md">
                  {CONTACT_METHODS.map((m) => (
                    <li key={m}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedContact(m)
                          setContactOpen(false)
                        }}
                        className="font-reenie w-full px-4 py-2 text-left text-[18px] tracking-tight text-neutral-600 uppercase hover:bg-neutral-100"
                      >
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Submit button — oval sketch style */}
          <CTAButton label="Send Inquiry" />
        </div>
      </div>
    </section>
  )
}
