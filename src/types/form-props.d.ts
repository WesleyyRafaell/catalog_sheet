export interface IFormProps {
  nature_of_work: string;
  title: string;
  subtitle: string;
  name: string;
  last_name: string;
  author_name2: string;
  author_last_name2: string;
  author_name3: string;
  author_last_name3: string;
  Advisor_name: string;
  Advisor_last_name: string;
  name_of_coadvisor1: string;
  last_name_of_coadvisor1: string;
  name_of_coadvisor2: string;
  last_name_of_coadvisor2: string;
  place_of_publication: string;
  year_of_publication: string;
  keywords1: string;
  keywords2: string;
  keywords3: string;
  keywords4: string;
  keywords5: string;
}

export interface IFormStructureProps {
  boxTitle: string;
  field: {
    title: string;
    required: boolean;
    isSelect: boolean;
    selectOptions: {
      value: string;
      text: string;
     }[]
    id: string;
    subFields: {
      title: string;
      required: boolean;
      isSelect: boolean;
      selectOptions: {
        value: string;
        text: string;
      }[]
      id: string;
    }[],
  }[],
}
