import Image from "next/image"

 const contractors = [
    {id:'1',
     name:'Kelly',
     position: 'loctician | hair stylist',
     image:'/asset/kelly.png'
    
    },
    {id: '2',
     name: 'TD cube',
     position: 'natural hair specialist | hair stylist',
     image: '/asset/Td-cube.jpg'

    },
    {id: '3',
     name: 'Kelvin',
     position: 'wig maker | hair stylist',
     image: '/asset/kelvin.png'

    }
]


export default function Stylists () {
    const stylists = contractors.map(stylist => 
        <article key={stylist.id}>
        <div>
              <Image
                    src={stylist.image}
                    width={300}
                    height={300}
                    alt={stylist.name}
                    />
        </div>
        <h3>{stylist.name}</h3>
        <span>{stylist.position}</span>
        </article>

    )
    return (
        <div>
             <h1>Skilled contractors for you</h1>

             <div className="flex justify-between">
                {stylists}
             </div>
        </div>
    )
}