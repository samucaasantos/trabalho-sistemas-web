'use server';

import { z } from 'zod';
import { deleteLead, insertLead, updateLead } from './data';

export type LeadData = {
  name: string,
  email: string,
  subject: string,
  message: string,
  date: string,
}

enum SubjectsEnum {
  desenvolvimento = 'desenvolvimento',
  design = 'design',
  consultoria = 'consultoria',
  outro = 'outro',
}

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(3, { message: 'Nome deve ter mais de 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  subject: z.nativeEnum(SubjectsEnum, { message: 'Assunto inválido' }),
  message: z.string().min(10, { message: 'Mensagem deve ter mais de 10 caracteres' }),
  date: z.string(),
});

const CreateLead = FormSchema.omit({ id: true, date: true });
export type State = {
  errors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
  message?: string;
};

export async function createLead(
  // prevState: State,
  formData: FormData
) {
  const validatedFields = CreateLead.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos inválidos. Falha ao enviar mensagem.',
    };
  }

  try {
    await insertLead(formData);
  } catch (error) {
    return {
      message: 'Erro na base de dados: Falha ao enviar mensagem.',
    };
  }
}

const UpdateLead = FormSchema.omit({ id: true, date: true });

export async function updateLeadById(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateLead.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  try {
    await updateLead(id, formData);
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Invoice',
    };
  }
}

export async function removeLeadById(id: string) {
  try {
    await deleteLead(id);
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Invoice',
    };
  }
}
