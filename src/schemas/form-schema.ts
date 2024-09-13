import { z } from 'zod';

export const formSchema = z.object({
  name:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  title:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  edition:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  place_of_publication:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  publisher_name:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  year_of_publication:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
  subject:
      z.string({ required_error: 'campo obrigátorio' })
        .min(1, {
          message: 'Campo obrigátorio',
        }),
});
