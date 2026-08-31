export default function CustomerPortal(){

return (

<section className="
py-24
bg-[#111]
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
text-sm
">

SELECT YOUR MARKET

</p>


<h2 className="
text-4xl
md:text-5xl
font-serif
mt-4
">

Choose Your Requirement

</h2>


<p className="
text-gray-400
mt-4
">

Different solutions for domestic buyers and global partners.

</p>


</div>





<div className="
grid
md:grid-cols-2
gap-10
mt-16
">



{/* INDIA */}

<div className="
bg-black
border
border-yellow-600/30
rounded-xl
p-10
hover:border-yellow-500
transition
">


<div className="
text-5xl
">

🇮🇳

</div>


<h3 className="
text-3xl
font-serif
mt-6
">

Indian Market

</h3>


<p className="
text-gray-400
mt-4
">

For homeowners, architects, builders and
marble dealers across India.

</p>



<div className="
mt-8
space-y-3
text-gray-300
">


<p>
✓ INR Pricing
</p>


<p>
✓ GST Billing
</p>


<p>
✓ Domestic Transportation
</p>


<p>
✓ Dealer Enquiries
</p>


</div>



<button className="
mt-10
bg-yellow-600
text-black
px-8
py-3
rounded
font-semibold
">

View Collection

</button>


</div>







{/* EXPORT */}

<div className="
bg-black
border
border-yellow-600/30
rounded-xl
p-10
hover:border-yellow-500
transition
">


<div className="
text-5xl
">

🌎

</div>


<h3 className="
text-3xl
font-serif
mt-6
">

International Buyers

</h3>


<p className="
text-gray-400
mt-4
">

For importers, distributors and bulk project
requirements worldwide.

</p>



<div className="
mt-8
space-y-3
text-gray-300
">


<p>
✓ Export Grade Selection
</p>


<p>
✓ Bulk Container Supply
</p>


<p>
✓ Professional Packing
</p>


<p>
✓ Shipment Updates
</p>


</div>



<button className="
mt-10
bg-yellow-600
text-black
px-8
py-3
rounded
font-semibold
">

Request Export Quote

</button>


</div>



</div>


</div>


</section>

)

}