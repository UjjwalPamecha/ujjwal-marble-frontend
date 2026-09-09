import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-yellow-600 mb-8">
        Ujjwal Marble CRM
      </h1>

      <div className="space-y-4">
        <Link
          href="/admin/quotes"
          className="block p-4 border rounded"
        >
          Quote Requests
        </Link>

        <Link
          href="/admin/customers"
          className="block p-4 border rounded"
        >
          Customers
        </Link>

        <Link
          href="/admin/applications"
          className="block p-4 border rounded"
        >
          Applications
        </Link>
      </div>
    </div>
  );
}