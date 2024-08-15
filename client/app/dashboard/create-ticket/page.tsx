'use client';
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/dashboard/create-ticket/ticket-details');
  return null;
}