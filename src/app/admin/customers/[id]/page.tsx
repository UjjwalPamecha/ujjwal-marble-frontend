"use client";


import { useEffect,useState } from "react";
import { useParams } from "next/navigation";



export default function CustomerProfile(){


const params = useParams();


const id = params.id;



const [customer,setCustomer] = useState<any>(null);

const [quotes,setQuotes] = useState<any[]>([]);





useEffect(()=>{


const loadCustomer = async()=>{


const response = await fetch(

`${process.env.NEXT_PUBLIC_API_URL}/customer/${id}`

);


const data = await response.json();


setCustomer(data.customer);

setQuotes(data.quotes);


};


loadCustomer();


},[id]);







if(!customer){

return (

<div className="
bg-black
text-white
min-h-screen
p-10
">

Loading...

</div>

)

}






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

Customer Profile

</h1>





<div

className="
bg-zinc-900
border
border-zinc-700
rounded
p-8
"

>


<h2 className="
text-3xl
font-bold
">

{customer.name}

</h2>


<p className="text-gray-400">

{customer.company}

</p>



<div className="
mt-6
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
mt-8
flex
gap-4
">


<a

href={`tel:${customer.phone}`}

className="
border
border-yellow-600
px-5
py-2
rounded
"

>

Call

</a>



<a

href={`https://wa.me/91${customer.phone}`}

target="_blank"

className="
bg-green-600
px-5
py-2
rounded
"

>

WhatsApp

</a>


</div>



</div>







<h2 className="
text-2xl
mt-10
mb-5
">

Enquiry History

</h2>






<div className="
space-y-5
">


{

quotes.map(

(quote)=>(


<div

key={quote.id}

className="
bg-zinc-900
border
border-zinc-700
rounded
p-6
"

>


<p>
Material: {quote.material}
</p>


<p>
Stone: {quote.stone_name}
</p>


<p>
Quantity: {quote.quantity}
</p>


<p>
Finish: {quote.finish}
</p>


<p>
Status: {quote.status}
</p>



</div>


)

)


}



</div>





</div>


);

}