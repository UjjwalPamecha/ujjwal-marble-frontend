const applications = [

{
title:"Luxury Flooring",
image:"/images/applications/flooring.jpg",
description:
"Transform spaces with elegant marble flooring designed for luxury residences and premium projects."
},

{
title:"Kitchen Countertops",
image:"/images/applications/kitchen.jpg",
description:
"Premium marble surfaces crafted for modern kitchens, islands and countertops."
},

{
title:"Bathroom & Vanity",
image:"/images/applications/bathroom.jpg",
description:
"Create spa-like bathrooms with timeless marble walls, floors and vanity solutions."
},

{
title:"Hotel & Commercial Spaces",
image:"/images/applications/hotel.jpg",
description:
"Make lasting impressions with marble solutions for hotels, offices and commercial projects."
},

{
title:"Feature Walls",
image:"/images/applications/feature-wall.jpg",
description:
"Statement marble walls that add character and luxury to interiors."
},

{
title:"Custom Furniture",
image:"/images/applications/furniture.jpg",
description:
"Custom marble furniture pieces designed for unique interiors."
}

];



export default function ApplicationsPage(){


return (

<main className="
bg-black
text-white
min-h-screen
">


{/* HERO */}

<section className="
py-32
text-center
px-8
">


<p className="
text-yellow-500
tracking-[5px]
">

APPLICATIONS

</p>



<h1 className="
text-6xl
font-serif
mt-6
">

Natural Stone
For Every Space

</h1>



<p className="
text-gray-400
max-w-3xl
mx-auto
mt-6
">

From luxury residences to commercial projects,
our stones are crafted to bring elegance,
durability and timeless beauty.

</p>


</section>





{/* CARDS */}

<section className="
max-w-7xl
mx-auto
px-8
pb-24
">


<div className="
grid
md:grid-cols-3
gap-8
">


{

applications.map((item,index)=>(


<div

key={index}

className="
bg-[#111]
rounded-xl
overflow-hidden
border
border-yellow-600/20
"


>


<img

src={item.image}

alt={item.title}

className="
h-[320px]
w-full
object-cover
"


/>



<div className="
p-8
">


<h2 className="
text-2xl
font-serif
">

{item.title}

</h2>



<p className="
text-gray-400
mt-4
">

{item.description}

</p>



</div>


</div>


))

}


</div>


</section>






{/* CTA */}

<section className="
py-20
text-center
bg-[#111]
">


<h2 className="
text-4xl
font-serif
">

Have A Custom Project?

</h2>



<p className="
text-gray-400
mt-4
">

Let our team help you select the right stone
for your vision.

</p>



<a

href="/contact"

className="
inline-block
mt-8
bg-yellow-600
text-black
px-10
py-4
rounded
font-semibold
"

>

Get Project Assistance

</a>


</section>



</main>

)

}