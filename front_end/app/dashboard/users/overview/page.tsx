import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
};

export default async function Page() {

  return (
    <main>
      Users
    </main>
  );
}
