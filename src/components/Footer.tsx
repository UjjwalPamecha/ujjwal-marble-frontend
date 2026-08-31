export default function Footer(){

return (

<footer className="
bg-black
border-t
border-yellow-600/20
py-16
">


<div className="
max-w-7xl
mx-auto
px-8
grid
md:grid-cols-3
gap-10
">



{/* BRAND */}

<div>

<h2 className="
text-3xl
font-serif
text-yellow-500
tracking-widest
">

UJJWAL

</h2>


<p className="
text-xs
tracking-[5px]
mt-2
">

MARBLE STUDIOS

</p>


<p className="
text-gray-400
mt-6
leading-relaxed
">

A legacy of 40+ years in natural stone,
providing premium marble solutions through
trusted sourcing, processing and supply.

</p>


</div>





{/* CONTACT */}

<div>


<h3 className="
text-xl
font-serif
">

Contact

</h3>


<div className="
mt-6
space-y-3
text-gray-400
">


<p>
📞 WhatsApp: +91 XXXXX XXXXX
</p>


<p>
✉ Email: sales@yourcompany.com
</p>


<p>
📍 India
</p>


</div>


</div>





{/* LINKS */}

<div>


<h3 className="
text-xl
font-serif
">

Business

</h3>


<div className="
mt-6
space-y-3
text-gray-400
">


<p>
Indian Market
</p>


<p>
International Export
</p>


<p>
Request Quote
</p>


<p>
Shipment Updates
</p>


</div>


</div>




</div>





<div className="
text-center
mt-14
pt-8
border-t
border-gray-800
text-gray-500
text-sm
">

© {new Date().getFullYear()} Ujjwal Marble Studios. All rights reserved.

</div>



</footer>

)

}