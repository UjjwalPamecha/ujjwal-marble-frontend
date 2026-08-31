import { marbles } from "@/data/marbles";
import { notFound } from "next/navigation";


export default async function MarblePage({

params

}:{

params: Promise<{slug:string}>

}){


const {slug}=await params;



const marble = marbles.find(

(item)=>item.name.toLowerCase().replace(/\s+/g, '-')===slug

);



if(!marble){

notFound();

}



return (

<main className="
bg-black
text-white
min-h-screen
py-24
">


<div className="
max-w-7xl
mx-auto
px-8
">



{/* HERO */}


<div className="
grid
md:grid-cols-2
gap-12
items-center
">


<img

src={marble.image}

alt={marble.name}

className="
rounded-xl
w-full
h-[600px]
object-cover
"

/>



<div>


<p className="
text-yellow-500
tracking-[5px]
">

PREMIUM STONE

</p>



<h1 className="
text-6xl
font-serif
mt-5
">

{marble.name}

</h1>




<p className="
text-gray-400
mt-6
">

{marble.description}

</p>




<a

href="/contact"

className="
inline-block
mt-8
bg-yellow-600
text-black
px-8
py-4
rounded
font-semibold
"

>

Request Quote

</a>


</div>


</div>








{/* DETAILS */}


<div className="
grid
md:grid-cols-3
gap-8
mt-20
">



<div className="
bg-[#111]
p-8
rounded-xl
border
border-yellow-600/20
">

<h3 className="
text-yellow-500
">

Origin

</h3>


<p className="mt-3">

{marble.origin}

</p>


</div>





<div className="
bg-[#111]
p-8
rounded-xl
border
border-yellow-600/20
">

<h3 className="
text-yellow-500
">

Material

</h3>


<p className="mt-3">

{marble.type}

</p>


</div>








</div>









{/* FINISH */}


<section className="
mt-20
">


<h2 className="
text-4xl
font-serif
">

Available Finishes

</h2>



<div className="
flex
gap-4
mt-6
flex-wrap
">


{
marble.finishes.map((finish)=>(

<span

key={finish}

className="
bg-[#111]
border
border-yellow-600/30
px-6
py-3
rounded
"

>

{finish}

</span>

))

}


</div>


</section>








{/* APPLICATIONS */}


<section className="
mt-20
">


<h2 className="
text-4xl
font-serif
">

Applications

</h2>



<div className="
grid
md:grid-cols-4
gap-5
mt-8
">


{
marble.applications.map((app)=>(


<div

key={app}

className="
bg-[#111]
p-6
rounded-xl
border
border-yellow-600/20
"

>

{app}

</div>


))

}


</div>


</section>



</div>


</main>

)

}