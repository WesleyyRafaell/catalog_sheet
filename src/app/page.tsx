'use client';

import LayoutToPrint from '@/components/layout-to-print/layout-to-print';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IFormProps } from '@/types/form-props';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
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

  const { handleSubmit, register, reset, formState: { errors } } = form;

  const onSubmit = async (values: IFormProps) => {
    setFormValues(values);
  };

  const resetFields = () => {
    reset();
    setFormValues(null);
  };

  return (
    <div className='flex items-center justify-center font-[family-name:var(--font-geist-sans)] sm:py-11'>
      <main className='w-[500px]'>
        <Card className='w-full max-w-md'>
          {!formValues?.name && (
            <>
              <CardHeader>
                <CardTitle>Gerador de ficha catalográfica</CardTitle>
              </CardHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent>
                  <div className='grid w-full items-center gap-6'>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='name'>Nome do autor</Label>
                      <Input
                        id='name'
                        type='text'
                        {...register('name')}
                      />
                      <ErrorMessage
                        errors={errors}
                        name='name'
                        render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='title'>Título da obra</Label>
                      <Input
                        id='title'
                        type='text'
                        {...register('title')}
                      />
                      <ErrorMessage
                        errors={errors}
                        name='title'
                        render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='edition'>Edição</Label>
                      <Input
                        id='edition'
                        type='text'
                        {...register('edition')}
                      />
                      <ErrorMessage
                        errors={errors}
                        name='edition'
                        render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='place_of_publication'>Local de publicação</Label>
                      <Input
                        id='place_of_publication'
                        type='text'
                        {...register('place_of_publication')}
                      />
                      <ErrorMessage
                        errors={errors}
                        name='place_of_publication'
                        render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='publisher_name'>Nome da editora</Label>
                      <Input
                        id='publisher_name'
                        type='text'
                        {...register('publisher_name')}
                      />
                      <ErrorMessage
                        errors={errors}
                        name='publisher_name'
                        render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='year_of_publication'>Ano de publicação</Label>
                      <Input
                        id='year_of_publication'
                        type='text'
                        {...register('year_of_publication')}
                      />
                      <ErrorMessage
                        errors={errors}
                        name='year_of_publication'
                        render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                    </div>
                    <div className='flex flex-col space-y-1.5'>
                      <Label htmlFor='subject'>Assuntos (Separados por virgula)</Label>
                      <Input
                        id='subject'
                        type='text'
                        {...register('subject')}
                      />
                      <ErrorMessage
                        errors={errors}
                        name='subject'
                        render={({ message }) => <p className='text-[12px] text-red-800'>{message}</p>}/>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className='w-full' type='submit'>Gerar PDF</Button>
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
                <Button className='w-full' type='button' onClick={handlePrint}>Abrir PDF</Button>
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
