import { IFormProps } from '@/types/form-props';
import { forwardRef } from 'react';

const LayoutToPrint = forwardRef<
HTMLDivElement,
IFormProps
>(function LayoutToPrint ({
  name,
  edition,
  place_of_publication,
  publisher_name,
  subject,
  title,
  subtitle,
  year_of_publication,
  cdu,
}, ref) {

  return (
    <div ref={ref}>
      <div className=' mx-auto w-4/5 max-w-3xl border border-gray-300 bg-white p-6 shadow-lg print:w-full print:border-none print:shadow-none'>
        <div className='mb-6 border-b-2 border-gray-800 pb-4 text-center'>
          <h1 className='text-2xl font-bold'>Ficha catalográfica</h1>
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>Nome do autor:</label>
          <span className='text-lg text-gray-700'>{name}</span>
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>Título da obra:</label>
          <span className='text-lg text-gray-700'>{title}</span>
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>Subtítulo da obra:</label>
          <span className='text-lg text-gray-700'>{subtitle}</span>
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>Edição:</label>
          <span className='text-lg text-gray-700'>{edition}</span>
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>Local de publicação:</label>
          <span className='text-lg text-gray-700'>{place_of_publication}</span>
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>Nome da editora:</label>
          <span className='text-lg text-gray-700'>{publisher_name}</span>
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>Subject:</label>
          <span className='text-lg text-gray-700'>{subject}</span>
        </div>

        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>Ano de publicação:</label>
          <span className='text-lg text-gray-700'>{year_of_publication}</span>
        </div>
        <div className='mb-4 flex items-center justify-between'>
          <label className='font-bold'>CDU:</label>
          <span className='text-lg text-gray-700'>{cdu}</span>
        </div>
      </div>
    </div>
  );
});

export default LayoutToPrint;
