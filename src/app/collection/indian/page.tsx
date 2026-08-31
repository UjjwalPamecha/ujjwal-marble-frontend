const categories = [

{
title:"Indian Marble",

image:"/images/indian/marble.jpg",

description:
"Elegant Indian marbles known for timeless beauty, natural patterns and premium interior applications.",

link:"/collection/indian/marble"

},


{
title:"Indian Granite",

image:"/images/indian/granite.jpg",

description:
"Strong and durable Indian granites selected for residential, commercial and export projects.",

link:"/collection/indian/granite"

}

];



export default function IndianCollection(){


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



<div className="
text-center
">


<p className="
text-yellow-500
tracking-[5px]
">

INDIAN COLLECTION

</p>



<h1 className="
text-6xl
font-serif
mt-5
">

Natural Stones
From India

</h1>



<p className="
text-gray-400
mt-6
max-w-3xl
mx-auto
">

Explore our curated collection of premium
Indian marble and granite selected for
luxury spaces and global projects.

</p>


</div>








<div className="
grid
md:grid-cols-2
gap-10
mt-16
">


{
categories.map((item,index)=>(


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
h-[450px]
w-full
object-cover
"

/>




<div className="
p-8
">


<h2 className="
text-4xl
font-serif
">

{item.title}

</h2>



<p className="
text-gray-400
mt-5
">

{item.description}

</p>




<a

href={item.link}

className="
inline-block
mt-6
text-yellow-500
"

>

Explore Collection →

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