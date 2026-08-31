const process = [

{
number:"01",
title:"Premium Block Selection",
description:
"Carefully selected natural stone blocks sourced from trusted suppliers and quarries."
},

{
number:"02",
title:"Precision Processing",
description:
"Blocks are processed through our trusted manufacturing network to achieve premium slabs."
},

{
number:"03",
title:"Quality Inspection",
description:
"Every slab is inspected for finish, colour consistency, pattern and quality standards."
},

{
number:"04",
title:"Professional Packing",
description:
"Strong and secure packing designed for safe domestic and international transportation."
},

{
number:"05",
title:"Reliable Delivery",
description:
"Complete shipment coordination with transparent updates from dispatch to destination."
}

];


export default function ProcessSection(){


return (

<section className="
py-24
bg-[#111]
">


<div className="
max-w-7xl
mx-auto
px-8
">


<div className="
text-center
">


<p className="
text-yellow-500
tracking-[5px]
text-sm
">

OUR PROCESS

</p>


<h2 className="
text-5xl
font-serif
mt-5
">

From Block To Destination

</h2>


<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Complete stone solutions managed with experience,
quality control and reliable execution.

</p>


</div>




<div className="
mt-16
grid
md:grid-cols-5
gap-6
">


{
process.map((item,index)=>(


<div

key={index}

className="
bg-black
border
border-yellow-600/20
rounded-xl
p-6
hover:border-yellow-500
transition
"


>


<h3 className="
text-yellow-500
text-3xl
font-serif
">

{item.number}

</h3>


<h4 className="
text-xl
font-serif
mt-5
">

{item.title}

</h4>


<p className="
text-gray-400
text-sm
mt-4
leading-relaxed
">

{item.description}

</p>


</div>


))

}


</div>


</div>


</section>

)

}