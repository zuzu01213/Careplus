"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../ui/CustomFormField"

export enum FormFieldType {
  INPUT = "input",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function PatientForm() {
  // Initialize the form with useForm and zodResolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // Define the onSubmit function
  const onSubmit = () => {
    console.log();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Ready for your first appointment?</p>
        </section>

        <CustomFormField 
        fieldType={FormFieldType.INPUT}
        control={form.control} 
        name="name"
        label="full name"
        placeholder="Enter your full name"
        iconSrc= {'/assets/icons/user.svg'}
        iconAlt= {'user'}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
