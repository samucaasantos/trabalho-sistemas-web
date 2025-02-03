import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || 'undefined');

export async function insertLead(formData: FormData) {
  const response = await sql`
    INSERT INTO leads (name, email, subject, message, date)
    VALUES (
      ${formData.get('name')},
      ${formData.get('email')},
      ${formData.get('subject')},
      ${formData.get('message')},
      ${new Date().toISOString().split('T')[ 0 ]}
    )
  `;
  return response;
}

export async function listLeads() {
  const response = await sql`SELECT * FROM leads`;
  return response;
}

export async function getLead(id: string) {
  const response = await sql`SELECT * FROM leads WHERE id = ${id}`;
  return response;
}

export async function updateLead(id: string, formData: FormData) {
  const response = await sql`
    UPDATE leads
    SET
      name = ${formData.get('name')},
      email = ${formData.get('email')},
      subject = ${formData.get('subject')},
      message = ${formData.get('message')}
    WHERE id = ${id}
  `;
  return response;
}

export async function deleteLead(id: string) {
  const response = await sql`DELETE FROM leads WHERE id = ${id}`;
  return response;
}
