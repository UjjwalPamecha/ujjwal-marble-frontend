const marbles = [

{
name:"Majestic Black",
image:"/images/majestic-black.jpg",
description:
"Deep black natural stone with premium finish, ideal for luxury interiors and architectural projects.",
usage:
"Flooring • Walls • Hotels"
},


{
name:"Rajasthan Black",
image:"/images/rajasthan-black.jpg",
description:
"Elegant Indian black marble known for durability and timeless appearance.",
usage:
"Residential • Commercial"
},


{
name:"Brazil Brown",
image:"/images/brazil-brown.jpg",
description:
"Rich brown tones with natural patterns creating a warm luxury atmosphere.",
usage:
"Luxury Homes • Villas"
},


{
name:"River Black",
image:"/images/river-black.jpg",
description:
"Premium dark stone with unique natural movement and texture.",
usage:
"Projects • Premium Spaces"
},


{
name:"Pink Marble",
image:"/images/pink-marble.jpg",
description:
"Classic pink marble adding elegance and traditional beauty.",
usage:
"Interiors • Decoration"
},


{
name:"Green Marble",
image:"/images/green-marble.jpg",
description:
"Natural green stone bringing a unique luxury appearance.",
usage:
"Flooring • Feature Walls"
}

];



export default function MarbleCollection(){


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
">

OUR COLLECTION

</p>


<h2 className="
text-5xl
font-serif
mt-4
">

Premium Natural Stones

</h2>


<p className="
text-gray-400
mt-4
">

Selected marble and granite for premium projects worldwide.

</p>


</div>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
marbles.map((marble,index)=>(


<div
key={index}
className="
group
bg-[#111]
rounded-xl
overflow-hidden
border
border-yellow-600/20
hover:border-yellow-500
transition
"
>


<div className="
h-72
overflow-hidden
">


<img

src={marble.image}

alt={marble.name}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>


</div>



<div className="
p-6
">


<h3 className="
text-2xl
font-serif
">

{marble.name}

</h3>



<p className="
text-gray-400
mt-3
text-sm
">

{marble.description}

</p>



<p className="
text-yellow-500
mt-4
text-sm
">

{marble.usage}

</p>



<button className="
mt-6
border
border-yellow-600
px-5
py-2
rounded
hover:bg-yellow-600
hover:text-black
transition
">

Request Quote

</button>


</div>


</div>


))

}



</div>


</div>


</section>

)

}