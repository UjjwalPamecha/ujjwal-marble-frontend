"use client";

import { useState } from "react";


export default function Navbar(){

const [open,setOpen] = useState(false);


return (

<nav className="
fixed
top-0
w-full
z-50
bg-black/80
backdrop-blur-lg
border-b
border-yellow-600/30
">


<div className="
max-w-7xl
mx-auto
px-8
py-5
flex
justify-between
items-center
">


{/* LOGO */}

<a href="/">

<div>

<h1 className="
text-2xl
tracking-widest
text-yellow-500
font-serif
">

UJJWAL

</h1>


<p className="
text-xs
tracking-[5px]
text-white
">

MARBLE STUDIOS

</p>


</div>

</a>







{/* MENU */}

<div className="
hidden
md:flex
items-center
gap-8
text-sm
text-gray-200
">


<a

href="/"

className="
hover:text-yellow-500
transition
"

>
Home
</a>





{/* COLLECTION DROPDOWN */}


<div className="
relative
">


<button

onClick={()=>setOpen(!open)}

className="
hover:text-yellow-500
transition
"

>

Collection ▾

</button>





{
open && (

<div

className="
absolute
top-10
left-0
w-60
bg-[#111]
border
border-yellow-600/30
rounded-xl
p-3
shadow-xl
"


>


<a

href="/collection"

className="
block
px-4
py-3
rounded
hover:bg-black
hover:text-yellow-500
transition
"

>

All Stones

</a>





<a

href="/collection/indian"

className="
block
px-4
py-3
rounded
hover:bg-black
hover:text-yellow-500
transition
"

>

Indian Stones 🇮🇳

</a>





<a

href="/collection/imported"

className="
block
px-4
py-3
rounded
hover:bg-black
hover:text-yellow-500
transition
"

>

Imported Stones 🌍

</a>






<a

href="/collection/cnc"

className="
block
px-4
py-3
rounded
hover:bg-black
hover:text-yellow-500
transition
"

>

CNC Designs ✨

</a>



</div>

)

}



</div>








<a

href="/applications"

className="
hover:text-yellow-500
transition
"

>

Applications

</a>






<a

href="/export"

className="
hover:text-yellow-500
transition
"

>

Export

</a>







<a

href="/about"

className="
hover:text-yellow-500
transition
"

>

About

</a>







<a

href="/contact"

className="
hover:text-yellow-500
transition
"

>

Contact

</a>





</div>








{/* REQUEST QUOTE BUTTON */}


<a

href="/contact"

className="
bg-yellow-600
text-black
px-6
py-3
rounded
font-semibold
hover:bg-yellow-500
transition
"

>

Request Quote

</a>





</div>


</nav>


)

}