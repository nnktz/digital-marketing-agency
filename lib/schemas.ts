import * as z from 'zod'

export const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum(['Evaluate Bird for my company', 'Learn More', 'Get a Quote', 'Other']),
  company_size: z.enum(['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']),
  info: z.string(),
})
