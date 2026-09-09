"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


export default function CustomersPage(){


const [customers,setCustomers] = useState<any[]>([]);

const [search,setSearch] = useState("");

const [loading,setLoading] = useState(true);





const loadCustomers = async()=>{


const response = await fetch(

"process.env.NEXT_PUBLIC_API_URL/customers"

);


const data = await response.json();


setCustomers(data);

setLoading(false);


};





useEffect(()=>{

loadCustomers();

},[]);






const filteredCustomers = customers.filter(

(customer)=>

customer.name
?.toLowerCase()
.includes(search.toLowerCase())


||

customer.phone
?.includes(search)


||

customer.company
?.toLowerCase()
.includes(search.toLowerCase())


);






return (

<div

className="
min-h-screen
bg-black
text-white
p-10
"

>


<h1

className="
text-4xl
font-bold
text-yellow-600
mb-8
"

>

Ujjwal Marble CRM

</h1>



<h2 className="
text-2xl
mb-6
">

Customers

</h2>





<input

placeholder="Search customer..."

value={search}

onChange={(e)=>

setSearch(e.target.value)

}

className="
bg-zinc-900
border
border-gray-600
p-3
rounded
w-full
mb-8
"

/>







{

loading ?

<p>
Loading customers...
</p>


:


<div

className="
grid
md:grid-cols-3
gap-6
"

>


{

filteredCustomers.map(

(customer)=>(


<div

key={customer.id}

className="
bg-zinc-900
border
border-zinc-700
rounded
p-6
"

>


<h3 className="
text-xl
font-bold
">

{customer.name}

</h3>



<p className="text-gray-400">

{customer.company}

</p>



<div className="
mt-4
space-y-2
">

<p>
📞 {customer.phone}
</p>

<p>
✉️ {customer.email}
</p>

<p>
📍 {customer.location}
</p>


</div>





<div className="
flex
gap-3
mt-6
">


<Link

href={`/admin/customers/${customer.id}`}

className="
bg-yellow-600
text-black
px-4
py-2
rounded
font-semibold
"

>

View Profile

</Link>



<a

href={`https://wa.me/91${customer.phone}`}

target="_blank"

className="
bg-green-600
px-4
py-2
rounded
"

>

WhatsApp

</a>



</div>



</div>


)

)


}



</div>


}



</div>


);

}