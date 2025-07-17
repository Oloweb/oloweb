"use client"

import { Send } from "lucide-react"
import { useActionState } from "react"
import { sendContactEmail } from "@/actions/send-email" // Import the server action

export default function ContactForm() {
  // useActionState hook to manage form state with a server action
  const [state, formAction, isPending] = useActionState(sendContactEmail, null)

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
      <form action={formAction} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2 uppercase">
              Meno
            </label>
            <input
              type="text"
              id="name"
              name="name" // Added name attribute
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              placeholder="Vaše meno"
              required // Added required attribute
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-2 uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Added name attribute
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              placeholder="vas@email.sk"
              required // Added required attribute
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-white font-semibold mb-2 uppercase">
            Predmet
          </label>
          <input
            type="text"
            id="subject"
            name="subject" // Added name attribute
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
            placeholder="O čom je váš projekt?"
            required // Added required attribute
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-white font-semibold mb-2 uppercase">
            Správa
          </label>
          <textarea
            id="message"
            name="message" // Added name attribute
            rows={6}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
            placeholder="Opíšte nám váš projekt..."
            required // Added required attribute
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isPending} // Disable button during submission
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-[15px] font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Odosielam...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Odoslať správu</span>
            </>
          )}
        </button>

        {state && (
          <p className={`mt-4 text-center text-sm ${state.success ? "text-green-400" : "text-red-400"}`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  )
}
