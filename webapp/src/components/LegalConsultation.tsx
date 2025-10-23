'use client'

import React, { useState } from 'react'

export default function LegalConsultation() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setIsLoading(true)
    
    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      setResponse(`Thank you for your legal question: "${question}". This is a simulated response. In a real implementation, this would connect to an AI legal assistant that could help with:

- Contract analysis
- Legal research
- Regulatory compliance
- Case law references
- Legal document drafting assistance

Please note: This is for informational purposes only and does not constitute legal advice.`)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Consultation</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
              What legal question can I help you with?
            </label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Describe your legal question or concern..."
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition duration-200"
          >
            {isLoading ? 'Analyzing...' : 'Get Legal Assistance'}
          </button>
        </form>

        {response && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <h3 className="font-semibold text-blue-900 mb-2">AI Legal Assistant Response:</h3>
            <p className="text-blue-800 whitespace-pre-line">{response}</p>
          </div>
        )}

        <div className="mt-6 text-xs text-gray-500">
          <p><strong>Disclaimer:</strong> This AI assistant is for informational purposes only and does not constitute legal advice. For specific legal matters, please consult with a qualified attorney.</p>
        </div>
      </div>
    </div>
  )
} 