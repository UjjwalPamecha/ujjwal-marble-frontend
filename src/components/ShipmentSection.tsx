const steps = [

{
number:"01",
title:"Order Confirmation",
description:
"Final specifications, quantity and requirements are confirmed before processing begins."
},

{
number:"02",
title:"Material Selection",
description:
"Selected stones are prepared according to customer requirements and project needs."
},

{
number:"03",
title:"Quality Inspection",
description:
"Every slab goes through quality checking before packing."
},

{
number:"04",
title:"Professional Packing",
description:
"Strong protective packing ensures safe transportation."
},

{
number:"05",
title:"Loading & Dispatch",
description:
"Truck/container loading is documented before shipment."
},

{
number:"06",
title:"Delivery Updates",
description:
"Customers receive shipment progress updates until delivery."
}

];


export default function ShipmentSection(){

return (

<section className="
py-24
bg-black
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

TRANSPARENT SHIPPING

</p>


<h2 className="
text-5xl
font-serif
mt-5
">

From Our Yard To Your Destination

</h2>


<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Stay connected with your order journey through
packing, dispatch and delivery updates.

</p>


</div>



<div className="
mt-16
relative
">


<div className="
grid
md:grid-cols-3
gap-8
">


{
steps.map((step,index)=>(


<div

key={index}

className="
bg-[#111]
border
border-yellow-600/20
rounded-xl
p-8
hover:border-yellow-500
transition
"


>


<div className="
text-yellow-500
text-4xl
font-serif
">

{step.number}

</div>


<h3 className="
text-xl
font-serif
mt-5
">

{step.title}

</h3>


<p className="
text-gray-400
mt-4
text-sm
leading-relaxed
">

{step.description}

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