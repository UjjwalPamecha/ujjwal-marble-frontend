export default function ExportSection(){

const points=[

{
title:"Bulk Supply",
desc:"Reliable supply solutions for importers, dealers and large projects."
},

{
title:"Quality Control",
desc:"Material inspection and finishing checks before dispatch."
},

{
title:"Premium Packing",
desc:"Secure packing practices for safe international transportation."
},

{
title:"Live Updates",
desc:"Stay connected with processing, inspection and loading updates."
}

];


return (

<section className="
bg-[#111]
text-white
py-24
">


<div className="
max-w-7xl
mx-auto
px-8
">


<div className="
grid
md:grid-cols-2
gap-12
items-center
">


{/* TEXT */}

<div>


<p className="
text-yellow-500
tracking-[5px]
">

GLOBAL EXPORT

</p>



<h2 className="
text-5xl
font-serif
mt-5
">

Connecting Premium
Stone To The World

</h2>



<p className="
text-gray-400
mt-6
leading-relaxed
">

From selecting the right material to
processing, quality checks and shipment
coordination, we manage every stage of
the stone journey.

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

Request Export Quote

</a>


</div>







{/* FEATURES */}

<div className="
grid
grid-cols-2
gap-5
">


{
points.map((item,index)=>(


<div

key={index}

className="
bg-black
border
border-yellow-600/20
rounded-xl
p-6
"


>


<h3 className="
text-xl
font-serif
">

{item.title}

</h3>



<p className="
text-gray-400
mt-3
text-sm
">

{item.desc}

</p>



</div>


))

}


</div>



</div>


</div>


</section>

)

}