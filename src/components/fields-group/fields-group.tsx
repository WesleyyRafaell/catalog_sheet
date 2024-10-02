import React from 'react';

interface IFieldsGroupProps {
  title: string;
  children: React.ReactNode
}

const FieldsGroup = ({ children, title }: IFieldsGroupProps) => {
  return (
    <div className='flex flex-col gap-4'>
      {title && (
        <div className='bg-[#EDF1F8] p-3'>
          <p className='text-sm font-semibold uppercase text-[#404E82]'>{title}</p>
        </div>
      )}
      <div className='flex flex-col gap-4 px-20'>
        {children}
      </div>
    </div>
  );
};

export default FieldsGroup;
