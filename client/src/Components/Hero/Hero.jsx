// import {useState} from 'react'
// import {img1} from '../../assets/lap1.png'


// const LapData = [
//     {
//         id:1,
//         image:{img1},
//         title: "Laptop Brandnew 2024",
//         subtitle:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laboriosam delectus eos distincti.",
//         price:"LKR 450 000",
//         modal:"Az 412/102",
//         bgColor:"#8b5958"
//     },

//     {
//         id:2,
//         image:{img1},
//         title: "Laptop Brandnew 2024",
//         subtitle:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laboriosam delectus eos distincti.",
//         price:"LKR 450 000",
//         modal:"Az 412/102",
//         bgColor:"#8b5958"
//     },

//     {
//         id:3,
//         image:{img1},
//         title: "Laptop Brandnew 2024",
//         subtitle:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laboriosam delectus eos distincti.",
//         price:"LKR 450 000",
//         modal:"Az 412/102",
//         bgColor:"#8b5958"
//     },


// ];

const Hero = () => {

    // const [activeData, setActiveData] = useState(LapData[0]);


  return (
    <>
        <section className="bg-brandDark text-white">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                {/* Brand Info */}
                <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
                    <h1 className="text-3xl lg:text-6xl font-bold font-varela">
                        {/* {activeData.title} */}
                    </h1>
                </div>


                {/* Hero Image */}


                {/* Whtsapp Icon */}


            </div>
        </section>
      
    </>
  )
}

export default Hero
