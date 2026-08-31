export default function WhyChooseUs(){

return (

<section className="
bg-black
text-white
py-24
">


<div className="
max-w-6xl
mx-auto
px-8
text-center
">


<p className="
text-yellow-500
tracking-[5px]
">

WHY CHOOSE US

</p>


<h2 className="
text-5xl
font-serif
mt-5
">

Complete Stone Management

</h2>



<p className="
text-gray-400
mt-6
">

From premium block selection to processing,
inspection and delivery, we manage the complete
stone journey.

</p>



<div className="
grid
md:grid-cols-5
gap-5
mt-12
">


{
[
"Block Selection",
"Processing",
"Quality Check",
"Premium Packing",
"Delivery"
].map((item,index)=>(


<div
key={index}
className="
bg-[#111]
p-6
rounded-xl
border
border-yellow-600/20
"
>

{item}

</div>


))

}


</div>


</div>


</section>

)

}