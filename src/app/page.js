import Image from "next/image";

const logos = [
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Adidas Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Nike Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/tr/b/b1/Puma_Logo.png",
        alt: "Puma Logo",
    },
];
const slides = [
    {
        src:'https://topfranchise.ru/upload/medialibrary/b2b/96jjwouas745vfp1jji8f8hx2xt4npcg.jpg',
        alt:'slide1',
    },
    {
        src:'https://topfranchise.ru/upload/medialibrary/b2b/96jjwouas745vfp1jji8f8hx2xt4npcg.jpg',
        alt:'slide1',
    },
    {
        src:'https://topfranchise.ru/upload/medialibrary/b2b/96jjwouas745vfp1jji8f8hx2xt4npcg.jpg',
        alt:'slide1',
    },
    {
        src:'https://topfranchise.ru/upload/medialibrary/b2b/96jjwouas745vfp1jji8f8hx2xt4npcg.jpg',
        alt:'slide1',
    },
    {
        src:'https://topfranchise.ru/upload/medialibrary/b2b/96jjwouas745vfp1jji8f8hx2xt4npcg.jpg',
        alt:'slide1',
    }
];
export default function Home() {
    return (
        <div className={` bg-headerBg `}>
            <div className={`container mx-auto`}>
                <ul className={`py-3 flex justify-between`}>
                    {logos.map((logo, index) => (
                        <li
                            key={index}
                            className="bg-white rounded-full p-3 border-primary border-4 w-fit"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                width={100}
                                height={100}
                                className="w-20 h-20 object-contain"
                            />
                        </li>
                    ))}
                </ul>
                <div className={`bg-primary py-10 px-20 w-full rounded-3xl mt-3`}>
                    <div className={`bg-white rounded-xl flex justify-between items-center  `}>
                        <div className={`px-10`}>
                            <div className={`  font-bold text-xl pb-1`}>LASSA ÜRÜNLERİNDE</div>
                            <div className={`text-primary font-bold text-3xl pb-2`}>SEPETTE %20 İNDİRİM</div>
                            <p className={`text-gray-600 block clear-both pb-4`}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <a href="" className={`bg-primary text-white rounded-full py-3 px-8 flex w-fit shadow-xl font-semibold text-sm`}>ŞİMDİ DAHA FAZLASI</a>
                        </div>
                        <img className={` rounded-xl`}
                             src={`https://topfranchise.ru/upload/medialibrary/b2b/96jjwouas745vfp1jji8f8hx2xt4npcg.jpg`}/>
                    </div>
                    <ul className={` flex justify-between mt-5`}>
                        {slides.map((slide, index) => (
                            <li key={index}>
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-36 object-cover rounded-3xl border-4 border-white"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
