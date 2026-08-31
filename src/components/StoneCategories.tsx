import Link from "next/link";


export default function StoneCategories(){


const categories=[

{
title:"Indian Stones 🇮🇳",

desc:
"Premium marble and granite sourced from India's finest quarries.",

image:"/images/indian-stones.jpg",

link:"/collection/indian"

},


{
title:"Imported Stones 🌍",

desc:
"Exclusive natural stones selected from global origins.",

image:"/images/imported-stones.jpg",

link:"/collection/imported"

},


{
title:"CNC Designs ✨",

desc:
"Precision crafted marble patterns and custom stone designs.",

image:"/images/cnc-designs.jpg",

link:"/collection/cnc"

}

];





return (

<section

className="
bg-black
text-white
py-24
px-6
"

>


<div

className="
max-w-7xl
mx-auto
"

>


<h2

className="
text-5xl
font-bold
text-center
"

>

Explore Our Collections

</h2>



<p

className="
text-gray-400
text-center
mt-5
max-w-3xl
mx-auto
"

>

Discover premium marble, granite and custom stone
solutions crafted for luxury projects worldwide.

</p>







<div

className="
grid
md:grid-cols-3
gap-8
mt-14
"

>


{

categories.map((item,index)=>(


<div

key={index}

className="
group
relative
h-[420px]
rounded-2xl
overflow-hidden
border
border-yellow-600/20
"

>


<img

src={item.image}

alt={item.title}

className="
absolute
w-full
h-full
object-cover
transition
duration-700
group-hover:scale-110
"

/>





<div

className="
absolute
inset-0
bg-black/60
"

></div>





<div

className="
relative
z-10
h-full
flex
flex-col
justify-end
p-10
"

>


<h3

className="
text-3xl
font-bold
"

>

{item.title}

</h3>



<p

className="
text-gray-300
mt-4
"

>

{item.desc}

</p>






<Link

href={item.link}

className="
mt-6
text-yellow-500
font-semibold
hover:text-yellow-300
transition
"

>

Explore Collection →

</Link>



</div>



</div>


))

}


</div>


</div>


</section>

);

}