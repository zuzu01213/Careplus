"use client"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from "libphonenumber-js/core";
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

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { SelectTrigger, Select, SelectContent, SelectValue } from './ui/select';

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
    const { fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, renderSkeleton } = props;

    switch (fieldType) {
            case FormFieldType.INPUT:
                return (
                    <div className="flex rounded-md border border-dark-500 bg-dark-400">
                        {iconSrc && (
                            <Image
                                src={iconSrc}
                                height={24}
                                width={24}
                                alt={iconAlt || "icon"}
                                className="ml-2"
                            />
                        )}
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                {...field}
                                className="shad-input border-0"
                            />
                        </FormControl>
                    </div>
                );

            case FormFieldType.PHONE_INPUT:
                return (
                    <FormControl>
                        <PhoneInput
                            defaultCountry='US'
                            placeholder={placeholder}
                            international
                            withCountryCallingCode
                            value={field.value as E164Number | undefined}
                            onChange={field.onChange}
                            className='input-phone'
                        />
                    </FormControl>       
                );

            case FormFieldType.DATE_PICKER:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                        <Image
                            src={'/assets/icons/calendar.svg'}
                            height={24}
                            width={24}
                            alt={"calender"}
                            className="ml-2"
                        />
                    <FormControl>
                        <DatePicker selected={field.value} onChange={(date) =>field.onChange
                        (date)}
                            dateFormat={dateFormat ?? 'MM/dd/yyyy'}
                            showTimeSelect={showTimeSelect ?? false}
                            timeInputLabel='Time'
                            wrapperClassName='date-picker'
                             /> 
                    </FormControl>
                </div>
            );
       
            case FormFieldType.SELECT:
                return (
                    <FormControl>
                        <Select defaultValue={field.value} 
                        onValueChange={field.onChange}>

                            <FormControl>
                                <SelectTrigger className='shad-select-trigger' >
                                    <SelectValue placeholder={placeholder}/>

                                </SelectTrigger>
                            </FormControl>

                            <SelectContent className='shad-select-content'>
                                {props.children}
                            </SelectContent>

                        </Select>
                    </FormControl>
                )
            case FormFieldType.SKELETON:
                return renderSkeleton ? renderSkeleton({ field }) : null

                
                
        
            default:
                return null;
    }
}

const CustomFormField: React.FC<CustomProps> = (props) => {
    const {
        control,
        fieldType,
        name,
        label,
        placeholder,
        iconSrc,
        iconAlt,
        disabled,
        dateFormat,
        showTimeSelect,
        children,
        renderSkeleton,
      
    } = props;

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
    );
}

export default CustomFormField;
