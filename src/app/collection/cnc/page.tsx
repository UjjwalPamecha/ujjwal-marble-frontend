const designs = [

{
title:"Luxury Marble Flooring Patterns",

image:"/images/cnc/floor-pattern.jpg",

description:
"Intricate CNC and waterjet cut marble patterns designed for luxury entrances, villas and premium spaces.",

applications:[
"Villa Entrances",
"Hotel Lobbies",
"Luxury Residences"
]

},


{
title:"Marble Medallions",

image:"/images/cnc/medallion.jpg",

description:
"Custom marble medallions crafted with precision cutting and artistic stone combinations.",

applications:[
"Floor Centrepieces",
"Grand Entrances",
"Designer Interiors"
]

},


{
title:"Custom Waterjet Designs",

image:"/images/cnc/waterjet.jpg",

description:
"Precision engineered marble designs created according to architectural concepts.",

applications:[
"Custom Flooring",
"Wall Art",
"Commercial Projects"
]

},


{
title:"Bespoke Marble Inlay",

image:"/images/cnc/inlay.jpg",

description:
"Unique stone combinations transformed into detailed luxury patterns.",

applications:[
"Premium Homes",
"Hotels",
"Architectural Projects"
]

}

];



export default function CNCPage(){


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
">


<p className="
text-yellow-500
tracking-[5px]
text-sm
">

CNC & WATERJET DESIGNS

</p>



<h1 className="
text-6xl
font-serif
mt-5
">

Precision Crafted
Marble Designs

</h1>



<p className="
text-gray-400
max-w-3xl
mx-auto
mt-6
">

Transform natural stone into custom architectural
masterpieces with advanced CNC and waterjet technology.

</p>


</div>








{/* PROCESS */}


<div className="
grid
md:grid-cols-4
gap-6
mt-20
">



<div className="
bg-[#111]
p-8
rounded-xl
border
border-yellow-600/20
">

<h3 className="
text-yellow-500
text-xl
">

01 Design

</h3>

<p className="
text-gray-400
mt-3
">

Digital concept and pattern selection.

</p>

</div>





<div className="
bg-[#111]
p-8
rounded-xl
border
border-yellow-600/20
">

<h3 className="
text-yellow-500
text-xl
">

02 Cutting

</h3>

<p className="
text-gray-400
mt-3
">

Precision CNC and waterjet processing.

</p>

</div>





<div className="
bg-[#111]
p-8
rounded-xl
border
border-yellow-600/20
">

<h3 className="
text-yellow-500
text-xl
">

03 Assembly

</h3>

<p className="
text-gray-400
mt-3
">

Expert arrangement of stone pieces.

</p>

</div>





<div className="
bg-[#111]
p-8
rounded-xl
border
border-yellow-600/20
">

<h3 className="
text-yellow-500
text-xl
">

04 Installation

</h3>

<p className="
text-gray-400
mt-3
">

Final luxury stone installation.

</p>

</div>



</div>









{/* DESIGN CARDS */}


<div className="
grid
md:grid-cols-2
gap-10
mt-20
">


{
designs.map((item,index)=>(


<div

key={index}

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

src={item.image}

alt={item.title}

className="
w-full
h-96
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

{item.title}

</h2>




<p className="
text-gray-400
mt-5
">

{item.description}

</p>




<h3 className="
text-yellow-500
mt-6
">

Applications

</h3>




<div className="
mt-3
">

{
item.applications.map((app,i)=>(

<p

key={i}

className="
text-gray-300
"

>

✓ {app}

</p>

))

}

</div>




<a

href="/contact"

className="
inline-block
mt-8
bg-yellow-600
text-black
px-6
py-3
rounded
font-semibold
"

>

Discuss Custom Project

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