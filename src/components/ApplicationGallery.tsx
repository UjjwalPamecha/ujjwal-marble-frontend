const applications = [

{
title:"Luxury Flooring",
image:"/images/applications/flooring.jpg",
description:
"Create elegant residential and commercial floors with premium natural stone."
},


{
title:"Kitchen Countertops",
image:"/images/applications/kitchen.jpg",
description:
"Premium marble surfaces designed for modern luxury kitchens."
},


{
title:"Bathroom Vanity",
image:"/images/applications/bathroom.jpg",
description:
"Elegant stone applications for luxury bathrooms and spa spaces."
},


{
title:"Feature Walls",
image:"/images/applications/feature-wall.jpg",
description:
"Transform interiors with statement marble walls and cladding."
},


{
title:"Hotel & Commercial Projects",
image:"/images/applications/hotel.jpg",
description:
"Premium stone solutions for hospitality and large-scale projects."
},


{
title:"Custom Furniture",
image:"/images/applications/furniture.jpg",
description:
"Unique marble applications for tables and designer furniture."
}

];



export default function ApplicationGallery(){

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

APPLICATIONS

</p>


<h2 className="
text-5xl
font-serif
mt-5
">

Designed For Every Space

</h2>


<p className="
text-gray-400
mt-5
">

Explore how premium natural stone transforms
homes, hotels and luxury projects.

</p>


</div>




<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
applications.map((item,index)=>(


<div

key={index}

className="
group
bg-black
rounded-xl
overflow-hidden
border
border-yellow-600/20
hover:border-yellow-500
transition
"


>


<div className="
h-72
overflow-hidden
">


<img

src={item.image}

alt={item.title}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>


</div>



<div className="
p-6
">


<h3 className="
text-2xl
font-serif
">

{item.title}

</h3>


<p className="
text-gray-400
mt-4
text-sm
">

{item.description}

</p>


</div>


</div>


))

}


</div>


</div>


</section>

)

}0