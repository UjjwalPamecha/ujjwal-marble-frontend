"use client";
import { marbles } from "@/data/marbles";
import { importedStones } from "@/data/imported";

const allStones = [
  ...marbles.map((stone) => ({
    name: stone.name,
    category: stone.type,
    slug: stone.name,
    country: "India",
  })),

  ...importedStones.map((stone) => ({
    name: stone.name,
    category: stone.category,
    slug: stone.slug,
    country: stone.country,
  })),
];
import { useState } from "react";


type Stone = {
  material: string;
  stone_name: string;
  quantity: string;
  thickness: string;
  finish: string;
};



export default function ContactPage(){


const [type,setType] = useState("");



const [stones,setStones] = useState<Stone[]>([

{
material:"",
stone_name:"",
quantity:"",
thickness:"",
finish:""
}

]);



const [form,setForm] = useState({

name:"",
company:"",
phone:"",
email:"",
location:"",
message:""

});






const addStone = ()=>{

setStones([

...stones,

{
material:"",
stone_name:"",
quantity:"",
thickness:"",
finish:""
}

]);

};






const removeStone=(index:number)=>{


setStones(

stones.filter(

(_,i)=>i!==index

)

);


};






const updateStone=(

index:number,

field:keyof Stone,

value:string

)=>{


const updated=[...stones];


updated[index][field]=value;


setStones(updated);


};






const submitQuote=async()=>{


try{


const response = await fetch(

`${process.env.NEXT_PUBLIC_API_URL}/quote`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

...form,

items:stones

})

}

);



const data = await response.json();


console.log(data);


alert(
"Quote submitted successfully"
);



}

catch(error){

console.log(error);

alert(
"Something went wrong"
);

}


};







return (

<section

className="
min-h-screen
bg-black
text-white
p-10
"

>


<h1 className="
text-4xl
font-bold
text-yellow-600
"

>

REQUEST QUOTE

</h1>


<p className="
mt-4
text-gray-300
"

>

Premium Stone Solutions

</p>


<p className="
text-gray-400
mt-2
"

>

Tell us your requirement and our team will connect with you.

</p>






<div className="
grid
md:grid-cols-2
gap-6
mt-10
">



<div

onClick={()=>setType("India")}

className={`

cursor-pointer
bg-[#111]
border
rounded-xl
p-10
transition

${
type==="India"
?
"border-yellow-500"
:
"border-yellow-600/20"

}

`}

>


<h2 className="
text-2xl
">

🇮🇳 Indian Customers

</h2>


<p className="
text-gray-400
mt-3
">

For dealers, builders, architects and domestic projects.

</p>


</div>







<div

onClick={()=>setType("Export")}

className={`

cursor-pointer
bg-[#111]
border
rounded-xl
p-10
transition

${
type==="Export"
?
"border-yellow-500"
:
"border-yellow-600/20"

}

`}

>


<h2 className="
text-2xl
">

🌍 International Buyers

</h2>


<p className="
text-gray-400
mt-3
">

For importers, distributors and bulk project requirements.

</p>


</div>



</div>







{

type && (

<div className="
mt-10
bg-[#111]
p-8
rounded-xl
border
border-yellow-600/20
">


<h2 className="
text-2xl
mb-6
">

{
type==="India"
?
"Domestic Requirement"
:
"Export Enquiry"
}

</h2>





<input

placeholder="Name"

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

className="
w-full
bg-black
border
border-gray-700
p-4
rounded
"

/>
<input
  placeholder="Phone Number"
  onChange={(e)=>
    setForm({
      ...form,
      phone:e.target.value
    })
  }
  className="
  mt-4
  w-full
  bg-black
  border
  border-gray-700
  p-4
  rounded
"
/>

<input
  placeholder="Email"
  onChange={(e)=>
    setForm({
      ...form,
      email:e.target.value
    })
  }
  className="
  mt-4
  w-full
  bg-black
  border
  border-gray-700
  p-4
  rounded
"
/>




<input

placeholder={
type==="Export"
?
"Company & Country"
:
"City"
}

onChange={(e)=>

setForm({

...form,

location:e.target.value

})

}

className="
mt-6
w-full
bg-black
border
border-gray-700
p-4
rounded
"

/>







<h3 className="
text-xl
mt-10
mb-5
">

Stone Requirements

</h3>







{

stones.map((stone,index)=>(


<div

key={index}

className="
border
border-gray-700
rounded-xl
p-5
mb-5
"

>


<select
  value={stone.material}
  onChange={(e) => {
    updateStone(index, "material", e.target.value);
    updateStone(index, "stone_name", "");
  }}
  className="
  w-full
  bg-black
  border
  border-gray-700
  p-4
  rounded
"
>
  <option value="">Select Material</option>

  <option value="Granite">Granite</option>
  <option value="Marble">Marble</option>
  <option value="Quartzite">Quartzite</option>
  <option value="Onyx">Onyx</option>
  <option value="Travertine">Travertine</option>
</select>



<select
  value={stone.stone_name}
  onChange={(e) =>
    updateStone(index, "stone_name", e.target.value)
  }
  className="
  mt-4
  w-full
  bg-black
  border
  border-gray-700
  p-4
  rounded
"
>
  <option value="">Select Stone</option>

  {allStones
    .filter(
      (item) => item.category === stone.material
    )
    .map((item) => (
      <option
        key={item.slug}
        value={item.name}
      >
        {item.country !== "India"
        ? `${item.name} (${item.country})`
        : item.name}
      </option>
    ))}
</select>



<input

placeholder="Quantity (sqft)"

value={stone.quantity}

onChange={(e)=>

updateStone(

index,

"quantity",

e.target.value

)

}

className="
mt-4
w-full
bg-black
border
border-gray-700
p-4
rounded
"

/>






<select
  value={stone.thickness}
  onChange={(e) =>
    updateStone(index, "thickness", e.target.value)
  }
  className="
  mt-4
  w-full
  bg-black
  border
  border-gray-700
  p-4
  rounded
"
>
  <option value="">Select Thickness</option>
  <option value="15mm">15mm</option>
  <option value="18mm">17mm</option>
  <option value="20mm">20mm</option>
  <option value="30mm">30mm</option>
</select>


<select
  value={stone.finish}
  onChange={(e) =>
    updateStone(index, "finish", e.target.value)
  }
  className="
  mt-4
  w-full
  bg-black
  border
  border-gray-700
  p-4
  rounded
"
>
  <option value="">Select Finish</option>

  <option value="Polished">Polished</option>
  <option value="Unpolished">Unpolished</option>
  <option value="Leather">Leather</option>
  <option value="Honed">Honed(Lapatro)</option>
  <option value="Flamed">Flamed</option>
</select>



{

stones.length>1 &&

<button

onClick={()=>removeStone(index)}

className="
mt-4
text-red-500
"

>

Remove Stone

</button>

}



</div>


))

}





<button

onClick={addStone}

className="
border
border-yellow-600
px-6
py-3
rounded
"

>

+ Add Another Stone

</button>







<textarea

placeholder="Project Details"

onChange={(e)=>

setForm({

...form,

message:e.target.value

})

}

className="
mt-6
w-full
bg-black
border
border-gray-700
p-4
rounded
"

/>






<button

onClick={submitQuote}

className="
mt-8
bg-yellow-600
text-black
px-10
py-4
rounded
font-semibold
"

>

Submit Enquiry

</button>




</div>

)

}



</section>


);


}