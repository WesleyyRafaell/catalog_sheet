import { getDocumentType } from '@/enum/nature_of_work';
import { IFormProps } from '@/types/form-props';
import { forwardRef } from 'react';

const LayoutToPrint = forwardRef<
HTMLDivElement,
IFormProps
>(function LayoutToPrint ({
  Advisor_last_name,
  Advisor_name,
  author_last_name2,
  author_last_name3,
  author_name2,
  author_name3,
  keywords1,
  keywords2,
  keywords3,
  keywords4,
  keywords5,
  last_name,
  last_name_of_coadvisor1,
  last_name_of_coadvisor2,
  name_of_coadvisor1,
  name_of_coadvisor2,
  nature_of_work,
  number_pages,
  number_sheets,
  name,
  place_of_publication,
  title,
  subtitle,
  year_of_publication,
}, ref) {

  return (
    <div ref={ref}>
      <div className=' mx-auto w-4/5 max-w-3xl border border-gray-300 bg-white p-6 shadow-lg print:w-full print:border-none print:shadow-none'>
        <div className=''>
          <p className='text-center font-serif font-medium'>Ficha gerada por meio do Sistema catalográfico com dados fornecidos pelo(a) autor(a).
                Diretoria Integrada de Bibliotecas</p>
          <div className='m-2 border border-gray-800 p-4'>
            <p className='font-serif first-letter:lowercase'>{last_name}, {name}.</p>
            <div className='mb-3'>
              <p className='font-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{title} / {name} {last_name}, {author_name2} {author_last_name2}, {author_name3} {author_last_name3}. - {year_of_publication}.</p>
              {number_pages && (
                <p className='font-serif'>{number_pages} p.</p>
              )}
              {number_sheets && (
                <p className='font-serif'>{number_sheets} f.</p>
              )}
            </div>
            <div className='mb-3'>
              <p className='font-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subtítulo: {subtitle}.</p>
              <p className='font-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coorientador(a) 1: {name_of_coadvisor1} {last_name_of_coadvisor1}.</p>
              <p className='font-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coorientador(a) 2: {name_of_coadvisor2} {last_name_of_coadvisor2}.</p>
              <p className='font-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Orientador(a): {Advisor_name} {Advisor_last_name}.</p>
              <p className='font-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getDocumentType(nature_of_work)} - {place_of_publication} {year_of_publication}.</p>
            </div>
            <div className='flex flex-wrap'>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.</p>
                <p className='font-serif'>{keywords1}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>2.</p>
                <p className='font-serif'>{keywords2}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>3.</p>
                <p className='font-serif'>{keywords3}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>4.</p>
                <p className='font-serif'>{keywords4}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>5.</p>
                <p className='font-serif'>{keywords5}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>I.</p>
                <p className='font-serif'>{author_last_name2}, {author_name2}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>II.</p>
                <p className='font-serif'>{Advisor_last_name}, {Advisor_name}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>III.</p>
                <p className='font-serif'>{last_name_of_coadvisor2}, {name_of_coadvisor2}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>IV.</p>
                <p className='font-serif'>{last_name_of_coadvisor1}, {name_of_coadvisor1}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>IV.</p>
                <p className='font-serif'>{author_last_name3}, {author_name3}.</p>
              </div>
              <div className='mr-3 flex gap-4'>
                <p className='font-serif'>VI.</p>
                <p className='font-serif'>Título.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LayoutToPrint;
