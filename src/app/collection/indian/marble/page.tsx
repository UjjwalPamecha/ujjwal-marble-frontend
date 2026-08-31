const marbles = [

{
name:"Makrana White Marble",
image:"/images/indian/marble/makrana.jpg",
origin:"India",
type:"Marble",
description:
"One of India's most iconic white marbles, known for purity, elegance and timeless architectural beauty.",
applications:[
"Luxury Flooring",
"Temples",
"Wall Cladding",
"Premium Interiors"
],
finishes:[
"Polished",
"Honed"
]
},


{
name:"Udaipur Green Marble",
image:"/images/indian/marble/udaipur-green.jpg",
origin:"India",
type:"Marble",
description:
"Distinctive green marble featuring natural patterns and rich character for unique interiors.",
applications:[
"Flooring",
"Feature Walls",
"Bathrooms",
"Commercial Spaces"
],
finishes:[
"Polished",
"Honed"
]
},


{
name:"Morwad White Marble",
image:"/images/indian/marble/morwad.jpg",
origin:"India",
type:"Marble",
description:
"Premium white marble with subtle textures suitable for modern luxury spaces.",
applications:[
"Residences",
"Hotels",
"Flooring",
"Interior Projects"
],
finishes:[
"Polished",
"Leather"
]
},


{
name:"Rainforest Brown Marble",
image:"/images/indian/marble/rainforest-brown.jpg",
origin:"India",
type:"Marble",
description:
"Artistic marble featuring flowing patterns inspired by natural landscapes.",
applications:[
"Feature Walls",
"Luxury Flooring",
"Designer Interiors"
],
finishes:[
"Polished"
]
},


{
name:"Rainforest Green Marble",
image:"/images/indian/marble/rainforest-green.jpg",
origin:"India",
type:"Marble",
description:
"Unique green marble with dramatic natural movement and premium appearance.",
applications:[
"Wall Cladding",
"Luxury Homes",
"Hotels"
],
finishes:[
"Polished",
"Honed"
]
},


{
name:"Bidasar Marble",
image:"/images/indian/marble/bidasar.jpg",
origin:"India",
type:"Marble",
description:
"Elegant marble with natural brown and golden patterns.",
applications:[
"Flooring",
"Staircases",
"Interior Projects"
],
finishes:[
"Polished"
]
},


{
name:"Fantasy Brown Marble",
image:"/images/indian/marble/fantasy-brown.jpg",
origin:"India",
type:"Marble",
description:
"Premium marble with flowing waves of brown, grey and cream tones.",
applications:[
"Kitchen Countertops",
"Feature Walls",
"Luxury Interiors"
],
finishes:[
"Polished",
"Honed"
]
},


{
name:"Pink Marble",
image:"/images/indian/marble/pink.jpg",
origin:"India",
type:"Marble",
description:
"Warm-toned marble adding elegance and uniqueness to architectural spaces.",
applications:[
"Flooring",
"Decorative Work",
"Wall Applications"
],
finishes:[
"Polished"
]
},


{
name:"Katni Beige Marble",
image:"/images/indian/marble/katni-beige.jpg",
origin:"India",
type:"Marble",
description:
"Classic beige marble offering a sophisticated and calm appearance.",
applications:[
"Large Flooring Areas",
"Hotels",
"Residential Projects"
],
finishes:[
"Polished"
]
},


{
name:"Jaisalmer Yellow Marble",
image:"/images/indian/marble/jaisalmer-yellow.jpg",
origin:"India",
type:"Marble",
description:
"Golden yellow marble known for traditional and architectural applications.",
applications:[
"Exterior Cladding",
"Flooring",
"Heritage Projects"
],
finishes:[
"Polished"
]
},


{
name:"Agaria White Marble",
image:"/images/indian/marble/agaria-white.jpg",
origin:"India",
type:"Marble",
description:
"Clean white marble with elegant patterns suitable for premium interiors.",
applications:[
"Luxury Homes",
"Bathrooms",
"Flooring"
],
finishes:[
"Polished"
]
},


{
name:"Indian Statuario Marble",
image:"/images/indian/marble/indian-statuario.jpg",
origin:"India",
type:"Marble",
description:
"Premium white marble with elegant veining inspired by classic designs.",
applications:[
"Luxury Flooring",
"Bathrooms",
"Designer Projects"
],
finishes:[
"Polished"
]
},


{
name:"Spider Green Marble",
image:"/images/indian/marble/spider-green.jpg",
origin:"India",
type:"Marble",
description:
"Green marble with unique web-like natural patterns.",
applications:[
"Feature Walls",
"Tables",
"Interior Accents"
],
finishes:[
"Polished"
]
},


{
name:"Black Marble",
image:"/images/indian/marble/black-marble.jpg",
origin:"India",
type:"Marble",
description:
"Deep black marble offering a bold and luxurious appearance.",
applications:[
"Flooring",
"Wall Cladding",
"Premium Interiors"
],
finishes:[
"Polished",
"Honed"
]
}

];





export default function IndianMarblePage(){


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


{/* HEADER */}

<div className="
text-center
mb-16
">


<p className="
text-yellow-500
tracking-[5px]
">

INDIAN MARBLE

</p>


<h1 className="
text-6xl
font-serif
mt-5
">

Timeless Marble
From India

</h1>


<p className="
text-gray-400
max-w-3xl
mx-auto
mt-6
">

Explore premium Indian marble varieties
selected for luxury residences, hotels,
commercial projects and exports.

</p>


</div>






{/* CARDS */}

<div className="
grid
md:grid-cols-2
gap-10
">


{

marbles.map((stone)=>(


<div

key={stone.name}

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

src={stone.image}

alt={stone.name}

className="
w-full
h-[420px]
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

{stone.name}

</h2>




<div className="
flex
gap-4
mt-4
text-sm
text-yellow-500
">

<span>
{stone.origin}
</span>

<span>
•
</span>

<span>
{stone.type}
</span>


</div>




<p className="
text-gray-400
mt-5
leading-relaxed
">

{stone.description}

</p>






<h3 className="
text-yellow-500
mt-6
">

Applications

</h3>



<div className="
mt-3
grid
grid-cols-2
gap-2
">

{

stone.applications.map((app)=>(

<p

key={app}

className="
text-gray-300
text-sm
"

>

✓ {app}

</p>


))

}

</div>






<h3 className="
text-yellow-500
mt-6
">

Available Finishes

</h3>


<div className="
flex
gap-3
mt-3
flex-wrap
">

{

stone.finishes.map((finish)=>(

<span

key={finish}

className="
bg-black
border
border-yellow-600/30
px-4
py-2
rounded
text-sm
"

>

{finish}

</span>


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
px-8
py-3
rounded
font-semibold
"

>

Request Quote

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