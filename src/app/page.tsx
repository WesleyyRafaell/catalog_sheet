'use client';

import FieldsGroup from '@/components/fields-group/fields-group';
import LayoutToPrint from '@/components/layout-to-print/layout-to-print';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormIdsNameEnum } from '@/enum/form-ids-name-enum';
import { formMock } from '@/mocks/form-mock';
import { IFormProps } from '@/types/form-props';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useReactToPrint } from 'react-to-print';

import { formSchema } from '../schemas/form-schema';

export default function Home () {
  const [ formValues, setFormValues ] = useState<IFormProps | null>();
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const form = useForm<IFormProps>({
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit, register, reset, formState: { errors }, control } = form;

  const onSubmit = async (values: IFormProps) => {
    setFormValues(values);
  };

  const resetFields = () => {
    reset();
    setFormValues(null);
  };

  return (
    <div className='flex items-center justify-center bg-white font-[family-name:var(--font-geist-sans)] sm:py-11'>
      <main className='w-full md:w-[800px]'>
        <Card className='w-full bg-white'>
          {!formValues?.name && (
            <>
              <CardHeader className='mb-7 bg-[#465487] text-center'>
                <CardTitle className='text-white'>Gerador de ficha catalográfica</CardTitle>
              </CardHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className='p-0'>
                  <div className='flex w-full flex-col gap-6'>
                    {formMock.map(item => {
                      return (
                        <FieldsGroup key={item.boxTitle} title={item.boxTitle}>
                          {item.field.map(itemField => {

                            return (
                              <>
                                {itemField.isSelect && (
                                  <div className='flex flex-col gap-1'>
                                    <div className='flex flex-col gap-3 md:flex-row md:items-center'>
                                      <div className='flex items-center gap-2'>
                                        <Label className='whitespace-nowrap' htmlFor='name'>{itemField.title}</Label>
                                        {itemField.required && (
                                          <StarFilledIcon width={10} color='#84ADEF'/>
                                        )}
                                      </div>
                                      <Controller
                                        control={control}
                                        name={itemField.id as unknown as FormIdsNameEnum}
                                        render={({ field }) => (
                                          <Select onValueChange={field.onChange} {...field}>
                                            <SelectTrigger>
                                              <SelectValue placeholder='Selecione' />
                                            </SelectTrigger>
                                            <SelectContent>
                                              {itemField.selectOptions.map(selectOption => (
                                                <SelectItem key={selectOption.value} value={selectOption.value}>
                                                  {selectOption.text}
                                                </SelectItem>
                                              ))}
                                            </SelectContent>
                                          </Select>
                                        )}>
                                      </Controller>
                                    </div>
                                    <ErrorMessage
                                      errors={errors}
                                      name={itemField.id as unknown as FormIdsNameEnum}
                                      render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                                  </div>
                                )}

                                {itemField?.subFields?.length > 0 && (
                                  <div className='flex flex-col gap-3 md:flex-row md:gap-0'>
                                    <p className='min-w-40'>{itemField?.title}</p>
                                    <div className='flex w-full flex-col gap-2'>
                                      {itemField?.subFields?.map(subFieldsItem => (
                                        <div key={subFieldsItem.id} className='flex flex-col gap-1'>
                                          <div className='flex  gap-3'>
                                            <div className='flex items-center gap-2'>
                                              <Label htmlFor={subFieldsItem.id}>{subFieldsItem.title}</Label>
                                              {subFieldsItem.required && (
                                                <StarFilledIcon width={10} color='#84ADEF'/>
                                              )}
                                              {!subFieldsItem.required && (
                                                <StarFilledIcon width={10} color='#fff'/>
                                              )}
                                            </div>
                                            <Input
                                              id={subFieldsItem.id }
                                              type='text'
                                              {...register(`${subFieldsItem.id as unknown as FormIdsNameEnum}`)}
                                            />
                                          </div>
                                          <ErrorMessage
                                            errors={errors}
                                            name={subFieldsItem.id as unknown as FormIdsNameEnum}
                                            render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {!itemField.isSelect && !itemField?.subFields?.length && (
                                  <div key={itemField.title} className='flex flex-col gap-1'>
                                    <div className='flex flex-col gap-3 md:flex-row md:items-center'>
                                      <div className='flex items-center gap-2'>
                                        <Label className='whitespace-nowrap' htmlFor={itemField.id}>{itemField.title}</Label>
                                        {itemField.required && (
                                          <StarFilledIcon width={10} color='#84ADEF'/>
                                        )}
                                      </div>
                                      <Input
                                        className='mt-0'
                                        id={itemField.id}
                                        type='text'
                                        {...register(`${itemField.id as unknown as FormIdsNameEnum}`)}
                                      />
                                    </div>
                                    <ErrorMessage
                                      errors={errors}
                                      name={itemField.id as unknown as FormIdsNameEnum}
                                      render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                                  </div>
                                )}
                              </>
                            );
                          })}
                        </FieldsGroup>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter className='mt-5'>
                  <Button className='w-full bg-[#040454] text-[#ffffff] hover:bg-[#040454]' type='submit'>Gerar PDF</Button>
                </CardFooter>
              </form>
            </>
          )}

          {formValues?.name && (
            <>
              <CardHeader>
                <CardTitle>PDF Gerado</CardTitle>
                <CardDescription>Baixe agora mesmo sua ficha ou gere uma nova.</CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-4'>
                <Button className='w-full bg-[#040454] text-[#ffffff] hover:bg-[#040454]' type='button' onClick={handlePrint}>
                  Abrir PDF
                </Button>
                <Button className='w-full' type='button' variant='outline' onClick={resetFields}>Gerar nova ficha</Button>
                <div className='hidden'>
                  <LayoutToPrint {...formValues} ref={componentRef} />
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </main>
    </div>
  );
}
