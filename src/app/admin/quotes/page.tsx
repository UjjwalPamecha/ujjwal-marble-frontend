"use client";

import { useEffect, useState } from "react";


export default function QuotesPage(){


const [quotes,setQuotes] = useState<any[]>([]);

const [filteredQuotes,setFilteredQuotes] = useState<any[]>([]);

const [loading,setLoading] = useState(true);

const [search,setSearch] = useState("");

const [sortOption,setSortOption] = useState("newest");

const [materialFilter,setMaterialFilter] = useState("All");

const [statusFilter,setStatusFilter] = useState("All");






const loadQuotes = async()=>{


const response = await fetch(

"http://localhost:8000/quotes"

);


const data = await response.json();


setQuotes(data);

setLoading(false);


};






useEffect(()=>{

loadQuotes();

},[]);







useEffect(()=>{


let data=[...quotes];




// SEARCH

if(search){


data=data.filter((quote)=>{


const stoneMatch = quote.items?.some(

(item:any)=>

item.stone_name
?.toLowerCase()
.includes(search.toLowerCase())

);


return (

quote.name
?.toLowerCase()
.includes(search.toLowerCase())

||

quote.phone
?.includes(search)

||

quote.location
?.toLowerCase()
.includes(search.toLowerCase())

||

stoneMatch

);


});


}






// MATERIAL FILTER

if(materialFilter !== "All"){


data=data.filter((quote)=>


quote.items?.some(

(item:any)=>

item.material===materialFilter

)


);


}







// STATUS FILTER

if(statusFilter !== "All"){


data=data.filter(

(quote)=>

quote.status===statusFilter

);


}







// SORT

if(sortOption==="newest"){


data.sort(

(a,b)=>

new Date(b.created_at).getTime()

-

new Date(a.created_at).getTime()

);


}



else if(sortOption==="oldest"){


data.sort(

(a,b)=>

new Date(a.created_at).getTime()

-

new Date(b.created_at).getTime()

);


}




else if(sortOption==="nameAZ"){


data.sort(

(a,b)=>

a.name.localeCompare(b.name)

);


}





else if(sortOption==="nameZA"){


data.sort(

(a,b)=>

b.name.localeCompare(a.name)

);


}





setFilteredQuotes(data);



},[
quotes,
search,
materialFilter,
statusFilter,
sortOption
]);









const updateQuote = async(

id:number,

field:string,

value:string

)=>{


await fetch(

`http://localhost:8000/quote/${id}`,

{

method:"PUT",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

[field]:value

})

}


);



loadQuotes();


};









const convertCustomer = async(id:number)=>{


await fetch(

`http://localhost:8000/convert/${id}`,

{

method:"POST"

}

);


loadQuotes();


};









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
mb-3
"

>

Ujjwal Marble CRM

</h1>



<h2

className="
text-2xl
mb-8
"

>

Customer Quote Requests

</h2>








<div

className="
grid
md:grid-cols-5
gap-4
mb-8
"

>





<input

placeholder="Search customer, phone, stone"

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
"

/>







<select

value={materialFilter}

onChange={(e)=>

setMaterialFilter(e.target.value)

}

className="
bg-zinc-900
border
border-gray-600
p-3
rounded
"

>


<option>
All
</option>

<option>
Granite
</option>

<option>
Marble
</option>

<option>
Quartzite
</option>

<option>
Onyx
</option>


</select>








<select

value={statusFilter}

onChange={(e)=>

setStatusFilter(e.target.value)

}

className="
bg-zinc-900
border
border-gray-600
p-3
rounded
"

>


<option>
All
</option>

<option>
New
</option>

<option>
Contacted
</option>

<option>
Converted
</option>


</select>







<select

value={sortOption}

onChange={(e)=>

setSortOption(e.target.value)

}

className="
bg-zinc-900
border
border-gray-600
p-3
rounded
"

>


<option value="newest">
Newest First
</option>


<option value="oldest">
Oldest First
</option>


<option value="nameAZ">
Name A-Z
</option>


<option value="nameZA">
Name Z-A
</option>


</select>



</div>









{

loading ?

<p>
Loading...
</p>


:


<div className="
space-y-6
"

>


{

filteredQuotes.map((quote)=>(



<div

key={quote.id}

className="
border
border-zinc-700
rounded-xl
p-6
bg-zinc-950
"

>





<div className="
flex
justify-between
items-start
"

>


<div>


<h3 className="
text-2xl
font-semibold
"

>

{quote.name}

</h3>


<p className="
text-gray-400
"

>

📍 {quote.location}

</p>


<p className="
text-gray-400
"

>

📞 {quote.phone}

</p>
<p className="text-gray-400">
  📧 {quote.email || "No Email"}
</p>


</div>





<div>


<select

value={quote.status}

onChange={(e)=>

updateQuote(

quote.id,

"status",

e.target.value

)

}

className="
bg-black
border
border-gray-600
p-2
rounded
"

>


<option>
New
</option>

<option>
Contacted
</option>

<option>
Converted
</option>


</select>


</div>


</div>










<div className="
mt-6
"

>


<h4 className="
text-yellow-500
text-lg
font-semibold
mb-4
"

>

Material Requirements

</h4>







{
  quote.items?.length > 0 ? (
    quote.items.map(

(item:any,index:number)=>(



<div

key={index}

className="
border
border-zinc-700
rounded-lg
p-4
mb-4
"

>


<p>
<b>Material:</b> {item.material}
</p>


<p>
<b>Stone:</b> {item.stone_name}
</p>


<p>
<b>Quantity:</b> {item.quantity}
</p>


<p>
<b>Thickness:</b> {item.thickness}
</p>


<p>
<b>Finish:</b> {item.finish}
</p>



      </div>
    ))
  ) : (
    <p className="text-gray-500">
      No material details available
    </p>
  )
}





</div>









{

quote.status !== "Converted" &&


<button

onClick={()=>convertCustomer(quote.id)}

className="
mt-4
bg-yellow-600
text-black
px-5
py-2
rounded
font-semibold
"

>

Convert Customer

</button>


}




</div>


))


}


</div>


}



</div>


);


}