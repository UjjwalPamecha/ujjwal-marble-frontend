export default function AboutSection(){

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
grid
md:grid-cols-2
gap-12
items-center
">


{/* IMAGE */}

<div>

<img

src="/images/about/legacy.jpg"

alt="stone warehouse"

className="
rounded-xl
w-full
h-[500px]
object-cover
"

/>

</div>





{/* CONTENT */}

<div>


<p className="
text-yellow-500
tracking-[5px]
">

OUR LEGACY

</p>



<h2 className="
text-5xl
font-serif
mt-5
">

35+ Years Of
Stone Expertise

</h2>




<p className="
text-gray-400
mt-6
leading-relaxed
">

With decades of experience in the natural stone
industry, we have built strong relationships with
quarries, processors and customers worldwide.

</p>



<p className="
text-gray-400
mt-5
leading-relaxed
">

Our expertise lies in selecting premium materials,
managing processing, ensuring quality and delivering
reliable stone solutions for residential, commercial
and export projects.

</p>





<div className="
grid
grid-cols-2
gap-5
mt-8
">



<div className="
bg-[#111]
p-6
rounded-xl
border
border-yellow-600/20
">

<h3 className="
text-3xl
text-yellow-500
font-serif
">

35+

</h3>

<p className="
text-gray-400
">

Years Experience

</p>

</div>





<div className="
bg-[#111]
p-6
rounded-xl
border
border-yellow-600/20
">

<h3 className="
text-3xl
text-yellow-500
font-serif
">

Global

</h3>

<p className="
text-gray-400
">

Stone Network

</p>

</div>


</div>



</div>


</div>


</section>

)

}