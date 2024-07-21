"use client"
import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'
import { FormFieldType } from '@/components/forms/PatientForm'
import Image from 'next/image'

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: ({ field }: { field: any }) => React.ReactNode,
}

const RenderField: React.FC<{ field: any, props: CustomProps }> = ({ field, props }) => {
    const { fieldType, iconSrc, iconAlt, placeholder } = props;

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                  {props.iconSrc && (
                    <Image
                      src={props.iconSrc}
                      height={24}
                      width={24}
                      alt={props.iconAlt || "icon"}
                      className="ml-2"
                    />
                  )}
                  <FormControl>
                    <Input
                      placeholder={props.placeholder}
                      {...field}
                      className="shad-input border-0"
                    />
                  </FormControl>
                </div>
              );

        // Add more cases for different field types if needed

        default:
            return null
    }
}

const CustomFormField: React.FC<CustomProps> = (props) => {
    const { control, fieldType, name, label, placeholder, iconSrc, iconAlt, disabled, 
        dateFormat, showTimeSelect, children, renderSkeleton } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex-1'>
                    {label && fieldType !== FormFieldType.CHECKBOX && (
                        <FormLabel>{label}</FormLabel>
                    )}

                    <RenderField field={field} props={props} />
                    
                    <FormMessage className="error-message" />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField
