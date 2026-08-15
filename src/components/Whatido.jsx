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
      <div className=' w-[16%]  h-[200px]'></div>
     <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
  {services.map((service, index) => (
    <div key={index}>
      <h3>{service.title}</h3>

      <p>{service.description}</p>

      {/* icon */}
      {/* render based on service.icon */}
    </div>
  ))}
</div>
    </div>
  )
}

export default Whatido
