'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { PiSmiley } from 'react-icons/pi'

import { formSchema } from '@/lib/schemas'

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

type FormValues = {
  first_name: string
  last_name: string
  email: string
  job_title: string
  company_name: string
  help: 'Evaluate Bird for my company' | 'Learn More' | 'Get a Quote' | 'Other'
  company_size: '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+'
  info: string
  terms: boolean
}

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      job_title: '',
      company_name: '',
      help: 'Learn More',
      company_size: '1-10',
      info: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        throw new Error('Something went wrong')
      }

      setSubmitted(true)
    } catch (error) {
      toast({ title: 'Error', description: 'Something went wrong' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      {!submitted ? (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-full space-y-4 rounded-3xl border p-10 md:w-1/3"
        >
          <div className="items-center gap-6 md:flex">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="w-full items-center justify-center">
                  <FormLabel className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm text-transparent">
                    First name *
                  </FormLabel>

                  <FormControl>
                    <Input {...field} required autoFocus />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="w-full items-center justify-center">
                  <FormLabel className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm text-transparent">
                    Last name *
                  </FormLabel>

                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full items-center justify-center">
                <FormLabel className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm text-transparent">
                  Email *
                </FormLabel>

                <FormControl>
                  <Input {...field} required type="email" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem className="w-full items-center justify-center">
                <FormLabel className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm text-transparent">
                  Company name?
                </FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_size"
            render={({ field }) => (
              <FormItem className="w-full items-center justify-center">
                <FormLabel className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm text-transparent">
                  Company size?
                </FormLabel>

                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="1_10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="501-1000">501-1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="help"
            render={({ field }) => (
              <FormItem className="w-full items-center justify-center">
                <FormLabel className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm text-transparent">
                  How can we help?
                </FormLabel>

                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="Evaluate Bird for my company">
                      Evaluate Bird for my company
                    </SelectItem>
                    <SelectItem value="Learn More">Learn More</SelectItem>
                    <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="info"
            render={({ field }) => (
              <FormItem className="w-full items-center justify-center">
                <FormLabel className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm text-transparent">
                  Anything else?
                </FormLabel>

                <FormControl>
                  <Textarea style={{ height: '100px' }} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex items-center gap-4">
            <Checkbox
              required
              className="border-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-sm font-light text-transparent outline"
            />

            <div className="mb-1 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-xs font-light text-transparent md:w-3/4">
              I agree to Bird&apos; sending marketing communications related to bird
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button disabled={loading} type="submit" className="text-sm font-light">
              Submit
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center px-8 text-xl md:text-2xl">
          <div className="w-80 py-20">
            <PiSmiley className="mx-auto text-6xl text-[#6c6684]" />

            <div className="mx-auto justify-center py-10 text-center font-light text-gray-500">
              We&apos;ve received your inquiry and will be contacting you via email shortly.
            </div>
          </div>
        </div>
      )}
    </Form>
  )
}
