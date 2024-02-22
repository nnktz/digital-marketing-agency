import { Navbar } from '@/components/navbar'
import { ContactForm } from './_components/contact-form'

const ContactPage = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Navbar />

      <div className="items-start justify-center px-6 md:flex md:py-20">
        <div>
          <div className="w-full bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-5 text-5xl font-medium text-transparent md:w-2/3 md:text-7xl">
            Contact our sales team
          </div>

          <div className="py-4 text-gray-300">
            Let&apos;s talk about how Bird can help your team work better.
          </div>

          <div className="my-4 hidden space-y-6 rounded-2xl bg-[#f6f5f4] p-4 md:flex md:w-4/5 md:flex-col">
            <div className="flex gap-4 border-b">
              <p className="pb-4 font-normal">
                One flexible agency for your entire company to share knowledge, ship projects, and
                collaborate.
              </p>
            </div>

            <div className="flex gap-4 border-b">
              <p className="pb-4 font-normal">
                Enterprise features to securely manage user access and security.
              </p>
            </div>

            <div className="flex gap-4 border-b">
              <p className="pb-4 font-normal">
                Dedicated support to work with you on your setup and help you build the best plan
                for your company.
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
