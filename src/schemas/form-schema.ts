import { z } from 'zod';

export const formSchema = z.object({
  nature_of_work: z.enum([ 'tcc', 'monografia', 'livro' ], { message: 'Campo obrigatório' }),
  title:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  subtitle:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  name:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  last_name:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  author_name2: z.string(),
  author_last_name2: z.string(),
  author_name3: z.string(),
  author_last_name3: z.string(),
  Advisor_name:
  z.string({ required_error: 'campo obrigátorio' })
    .min(1, {
      message: 'Campo obrigátorio',
    }),
  Advisor_last_name:
  z.string({ required_error: 'campo obrigátorio' })
    .min(1, {
      message: 'Campo obrigátorio',
    }),
  name_of_coadvisor1: z.string(),
  last_name_of_coadvisor1: z.string(),
  name_of_coadvisor2: z.string(),
  last_name_of_coadvisor2: z.string(),
  place_of_publication:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  year_of_publication:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  keywords1:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  keywords2:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  keywords3:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  keywords4: z.string(),
  keywords5: z.string(),
});
