import React from 'react'

function Whatido() {
    const services = [
  {
    title: "UI/UX DESIGN",
    description:
      "Designing intuitive and engaging user experiences that drive results.",
    icon: "cursor",
  },
  {
    title: "WEB DESIGN",
    description:
      "Building modern, responsive and high-performance websites.",
    icon: "web",
  },
  {
    title: "INTERACTION DESIGN",
    description:
      "Creating meaningful interactions and smooth micro experiences.",
    icon: "interaction",
  },
  {
    title: "PROTOTYPING",
    description:
      "Turning ideas into clickable prototypes and user flows.",
    icon: "prototype",
  },
  {
    title: "DESIGN SYSTEMS",
    description:
      "Building cohesive design languages and reusable components.",
    icon: "design-system",
  },
];
  return (
    <div className='w-full h-[250px]  flex gap-8'>
      <div className=' w-[16%]  h-[200px]'> 
        <h1 className='font-bebas'>What i do</h1>
        <div></div>
      </div>

  
  {services.map((service, index) => (
    <div className=' w-[16%] border-1 border-[var(--bg-red)] h-[200px] rounded-[8px]' key={index}>
      <h3 className='font-bebas'>{service.title}</h3>

      <p className="whitespace-pre-line font-bebas">{service.description}</p>

      {/* icon */}
      {/* render based on service.icon */}
    </div>
  ))}

    </div>
  )
}

export default Whatido
