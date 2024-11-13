'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import { Container } from '@/components/Container'

interface Message {
  content: string
  isUser: boolean
}

const presetQuestions = [
  'What is NokGroup?',
  'What is NokPay?',
  'What is NokAcademy?',
  'What is NokMedia?',
]

async function query(data: { question: string }) {
  const response = await fetch(
    'https://xen-flow.up.railway.app/api/v1/prediction/6266fa99-a2a0-49bd-b536-b31e9c68e4f6',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
  const result = await response.json()
  return result
}

export default function Component() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async (question: string) => {
    if (question.trim() === '') return

    const userMessage: Message = { content: question, isUser: true }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await query({ question })
      const aiMessage: Message = { content: response.text, isUser: false }
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        content: 'Sorry, an error occurred.',
        isUser: false,
      }
      setMessages((prev) => [...prev, errorMessage])
    }

    setIsLoading(false)
  }

  return (
    <Container className="mt-6">
      <div className="flex h-[700px] flex-col bg-transparent p-4 md:h-[600px]">
        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {presetQuestions.map((question, index) => (
            <Button
              key={index}
              // variant="outline"
              className="w-full truncate bg-teal-50 text-left"
              onClick={() => handleSend(question)}
            >
              {question}
            </Button>
          ))}
        </div>
        <div className="flex flex-grow flex-col overflow-hidden rounded-lg bg-gray-50 shadow-lg">
          <ScrollArea className="flex-grow p-4 pb-8">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`lg:text-md max-w-[70%] rounded-lg p-3 text-sm shadow-md ${
                      message.isUser
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-teal-900'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex max-w-[70%] items-center space-x-2 rounded-lg bg-gray-200 p-3 text-gray-800 shadow-md">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend(input)
              }}
              className="flex space-x-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit" disabled={isLoading}>
                Send
              </Button>
            </form>
          </div>
        </div>
        <footer className="mt-4 text-center text-sm text-gray-600">
          Powered by{' '}
          <Link
            href="https://xenet.ai"
            className="text-blue-500 hover:underline"
          >
            Xenet
          </Link>
        </footer>
      </div>
    </Container>
  )
}
