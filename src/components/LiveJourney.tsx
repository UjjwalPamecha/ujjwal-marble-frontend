const journey = [

{
title:"Quarry Selection",
video:"/videos/journey/quarry.mp4",
description:
"Premium stone blocks are selected carefully from trusted sources based on quality and natural characteristics."
},

{
title:"Block Cutting",
video:"/videos/journey/cutter.mp4",
description:
"Large blocks are precisely cut into slabs while preserving the natural beauty of the stone."
},

{
title:"Epoxy & Converter Process",
video:"/videos/journey/epoxy-converter.mp4",
description:
"Advanced treatment improves slab strength, durability and surface quality."
},

{
title:"Precision Polishing",
video:"/videos/journey/polish.mp4",
description:
"Expert polishing enhances the natural colour, texture and shine of every slab."
},

{
title:"Quality Inspection",
video:"/videos/journey/quality-check.mp4",
description:
"Each slab is carefully inspected before final packing and dispatch."
},

{
title:"Packing & Loading",
video:"/videos/journey/loading.mp4",
description:
"Professional packing and secure loading ensure safe delivery worldwide."
}

];


export default function LiveJourney(){

return (

<section className="
bg-black
text-white
py-24
">

<div className="
max-w-7xl
mx-auto
px-8
">


<div className="
text-center
mb-16
">

<p className="
text-yellow-500
tracking-[5px]
">

OUR PROCESS

</p>


<h2 className="
text-5xl
font-serif
mt-5
">

From Quarry
To Your Project

</h2>


<p className="
text-gray-400
mt-5
">

Follow the complete journey behind every stone.

</p>


</div>



<div className="
grid
md:grid-cols-3
gap-8
">


{

journey.map((item,index)=>(

<div

key={item.title}

className="
bg-[#111]
rounded-xl
overflow-hidden
border
border-yellow-600/20
"

>


<video

src={item.video}

controls

className="
w-full
h-[250px]
object-cover
"

/>



<div className="
p-6
">

<p className="
text-yellow-500
">

0{index+1}

</p>


<h3 className="
text-2xl
font-serif
mt-3
">

{item.title}

</h3>


<p className="
text-gray-400
mt-3
">

{item.description}

</p>


</div>


</div>

))

}


</div>


</div>

</section>

)

}