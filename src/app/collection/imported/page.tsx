const countries = [

{
name:"Italy",
image:"/images/imported/italy.jpg",
description:
"Premium Italian marble slabs known worldwide for elegance, luxury and timeless architectural beauty.",
link:"/collection/imported/italy"
},


{
name:"Turkey",
image:"/images/imported/turkey.jpg",
description:
"High-quality Turkish marble and natural stones with unique colours and patterns.",
link:"/collection/imported/turkey"
},


{
name:"Brazil",
image:"/images/imported/brazil.jpg",
description:
"Exotic Brazilian quartzites and natural stones with extraordinary patterns.",
link:"/collection/imported/brazil"
},


{
name:"Spain",
image:"/images/imported/spain.jpg",
description:
"Elegant Spanish marbles selected for premium residential and commercial projects.",
link:"/collection/imported/spain"
},


{
name:"Greece",
image:"/images/imported/greece.jpg",
description:
"Classic Greek stones known for pure whites and premium architectural applications.",
link:"/collection/imported/greece"
},


{
name:"Vietnam",
image:"/images/imported/vietnam.jpg",
description:
"Unique Vietnamese natural stones with modern applications and distinctive character.",
link:"/collection/imported/vietnam"
},
{
name:"Iran",
image:"/images/imported/iran.jpg",
description:
"Premium Iranian marbles and natural stones with unique textures and colors.",
link:"/collection/imported/iran"
}

];



export default function ImportedPage(){


return (

<main className="
bg-black
min-h-screen
text-white
py-24
">


<div className="
max-w-7xl
mx-auto
px-8
">



{/* HERO */}

<div className="
text-center
mb-16
">


<p className="
text-yellow-500
tracking-[5px]
">

IMPORTED SLABS

</p>



<h1 className="
text-6xl
font-serif
mt-5
">

Natural Stones
From Around The World

</h1>



<p className="
text-gray-400
max-w-3xl
mx-auto
mt-6
">

Explore our collection of premium imported marble,
granite and exotic natural stone slabs sourced
from global markets.

</p>


</div>








{/* COUNTRY CARDS */}

<div className="
grid
md:grid-cols-3
gap-10
">


{

countries.map((country)=>(


<div

key={country.name}

className="
bg-[#111]
rounded-xl
overflow-hidden
border
border-yellow-600/20
hover:border-yellow-500
transition
"

>


<img

src={country.image}

alt={country.name}

className="
w-full
h-[350px]
object-cover
"

/>




<div className="
p-8
">


<h2 className="
text-3xl
font-serif
">

{country.name}

</h2>



<p className="
text-gray-400
mt-4
leading-relaxed
">

{country.description}

</p>



<a

href={country.link}

className="
inline-block
mt-6
text-yellow-500
"

>

Explore Slabs →

</a>



</div>



</div>


))

}


</div>


</div>


</main>

)

}