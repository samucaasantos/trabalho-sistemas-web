import { listLeads } from '../lib/data';
import React from 'react';
import styles from './page.module.css';

export default async function demoPage() {
  const leads = await listLeads();

  return (
    <div className={styles.leadsContainer}>
      <h1>Leads</h1>
      <section className={styles.cardContainer}>
        {leads.map((lead) => (
          <div key={lead.id} className={styles.card}>
            <h2>{lead.name}</h2>
            <p>{lead.email}</p>
            <p>{lead.subject}</p>
            <p>{lead.message}</p>
          </div>
        ))}
      </section>
      <br />
      <br />
    </div>
  );
};
