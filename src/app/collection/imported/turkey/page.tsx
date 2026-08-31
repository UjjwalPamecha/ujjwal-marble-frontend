import Link from "next/link";
import { importedStones } from "../../../../data/imported";

type ImportedStone = {
  slug: string
  name: string
  description: string
  country: string
  image: string
}

export default function ItalyPage(){


const italianStones: ImportedStone[] =
  importedStones.filter((stone: ImportedStone) => stone.country === "Turkey");



return (

<section

className="
bg-black
text-white
min-h-screen
py-24
px-8
"

>


<h1

className="
text-5xl
text-center
font-bold
text-yellow-600
"

>

Turkish Marble Collection 

</h1>



<p

className="
text-center
text-gray-400
mt-5
"

>

Premium Turkish marble sourced for luxury projects worldwide.

</p>





<div

className="
grid
md:grid-cols-3
gap-8
mt-16
"

>


{

italianStones.map((stone)=>(


<div

key={stone.slug}

className="
bg-[#111]
border
border-yellow-600/20
rounded-xl
overflow-hidden
"

>


<img

src={stone.image}

alt={stone.name}

className="
h-80
w-full
object-cover
"

/>



<div className="
p-6
"

>


<h2

className="
text-2xl
font-semibold
"

>

{stone.name}

</h2>


<p className="
text-gray-400
mt-3
"

>

{stone.description}

</p>



<Link

href="/contact"

className="
inline-block
mt-6
bg-yellow-600
text-black
px-6
py-3
rounded
"

>

Request Quote

</Link>


</div>


</div>


))

}


</div>


</section>


);

}