export default function Hero(){

return (

<section className="
min-h-screen
bg-black
relative
flex
items-center
">


<div className="
absolute
inset-0
">

<img

src="/images/hero/hero.jpg"

className="
w-full
h-full
object-cover
opacity-60
"

/>

</div>



<div className="
relative
max-w-7xl
mx-auto
px-8
text-white
">


<p className="
text-yellow-500
tracking-[6px]
">

NATURAL STONE EXPERIENCE

</p>



<h1 className="
text-6xl
md:text-7xl
font-serif
mt-6
max-w-4xl
">

Crafting Luxury
With Natural Stone

</h1>



<p className="
text-gray-300
text-lg
mt-8
max-w-2xl
">

35+ Years of expertise in sourcing,
processing and delivering premium marble
and granite solutions.

</p>




<div className="
flex
gap-5
mt-10
">


<a

href="/collection"

className="
bg-yellow-600
text-black
px-8
py-4
rounded
font-semibold
"

>

Explore Collection

</a>




<a

href="/contact"

className="
border
border-yellow-600
px-8
py-4
rounded
"

>

Request Bulk Quote

</a>


</div>


</div>


</section>

)

}