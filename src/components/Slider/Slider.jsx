
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


const Slider = () => {
    return (
        <>
            <section>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[EffectFade, Navigation, Pagination,Autoplay]}
                    className="mySwiper h-[10rem] md:h-[15rem] lg:h-[30rem] card shadow-xl"
                >


                    <SwiperSlide className=" flex justify-center items-center bg-[url('https://i.ibb.co/7byb9vV/bali.png')] bg-cover object-cover" >


                        <div className='space-y-3 py-5 bg-black text-white opacity-60  shadow-2xl lg:py-20 lg:m-20 card '>
                            <div className="title font-bold text-2xl lg:text-3xl" data-swiper-parallax="-300">
                                Bali: Island of Gods and Paradise
                            </div>
                            <div className="pb-2 hidden md:flex text-center font-semibold text-xl  justify-center">
                                <p>Discovering Tranquility and Adventure in Indonesia</p>
                            </div>
                            <div className=" w-2/3 mx-auto hidden md:flex" data-swiper-parallax="-100">
                                <p>
                                    Bali, often referred to as the "Island of Gods," is a tropical paradise renowned for its stunning landscapes, vibrant culture, and warm hospitality.Bali, Indonesia's iconic island, captivates visitors with its pristine beaches, lush landscapes, and vibrant culture. From ancient temples to exhilarating water sports, Bali offers a perfect blend of relaxation and adventure for travelers seeking paradise.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>


                    <SwiperSlide className="bg-[url('https://i.ibb.co/Xk48gGP/bandarban.jpg')] bg-cover object-cover" >

                        <div className='space-y-3 py-5 bg-black text-white opacity-60  shadow-2xl lg:py-20 lg:m-20 card '>
                            <div className="title font-bold text-2xl lg:text-3xl" data-swiper-parallax="-300">
                                Bandarban: Jewel of the Chittagong Hill Tracts
                            </div>
                            <div className="pb-2 hidden md:flex text-center font-semibold text-xl  justify-center">
                                <p>Exploring Nature's Majesty in Bangladesh</p>
                            </div>
                            <div className=" w-2/3 mx-auto hidden md:flex" data-swiper-parallax="-100">
                                <p>
                                    Nestled in the scenic Chittagong Hill Tracts of Bangladesh, Bandarban enchants visitors with its pristine natural beauty and rich cultural heritage. Home to lush green hills, cascading waterfalls, and indigenous communities, this idyllic destination offers a retreat into the heart of nature. Explore tribal villages, trek through verdant forests, and witness breathtaking vistas that capture the essence of Bandarban's charm and allure.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="bg-[url('https://i.ibb.co/TYSwy82/Kuala-Lumpur.jpg')] bg-cover object-cover" >

                        <div className='space-y-3 py-5 bg-black text-white opacity-60  shadow-2xl lg:py-20 lg:m-20 card '>
                            <div className="title font-bold text-2xl lg:text-3xl" data-swiper-parallax="-300">
                                Kuala Lumpur: The Vibrant Heart of Malaysia
                            </div>
                            <div className="pb-2 hidden md:flex text-center font-semibold text-xl  justify-center">
                                <p>The Wonders of Malaysia's Capital City</p>
                            </div>
                            <div className=" w-2/3 mx-auto hidden md:flex" data-swiper-parallax="-100">
                                <p>
                                    Embark on a captivating journey through Kuala Lumpur, Malaysia's bustling capital, where modernity meets tradition in a vibrant tapestry of sights and sounds. Explore iconic landmarks like the Petronas Twin Towers and Batu Caves, savor diverse culinary delights at bustling street markets, and immerse yourself in the city's rich cultural heritage. With its blend of history, cuisine, and urban charm, Kuala Lumpur promises an unforgettable tour experience for every traveler..
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="bg-[url('https://i.ibb.co/MM05s3n/Halong-bay.jpg')] bg-cover object-cover" >

                        <div className='space-y-3 py-5 bg-black text-white opacity-60  shadow-2xl lg:py-20 lg:m-20 card '>
                            <div className="title font-bold text-2xl lg:text-3xl" data-swiper-parallax="-300">
                                Halong Bay: Vietnam's Spectacular Seascape
                            </div>
                            <div className="pb-2 hidden md:flex text-center font-semibold text-xl  justify-center">
                                <p>A Serene Escape Amidst Limestone Wonders</p>
                            </div>
                            <div className=" w-2/3 mx-auto hidden md:flex" data-swiper-parallax="-100">
                                <p>
                                    Halong Bay, a UNESCO World Heritage Site in Vietnam, is renowned for its mesmerizing landscape of limestone islands and emerald waters. Offering tranquil cruises, hidden caves, and captivating sunsets, it's a haven for nature enthusiasts seeking serenity amidst natural wonders.With its ethereal beauty and serene atmosphere, Halong Bay is a must-visit destination for nature lovers and adventurers alike.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="bg-[url('https://i.ibb.co/9c40Q59/angkor-wat.jpg')] bg-cover object-cover" >

                        <div className='space-y-3 py-5 bg-black text-white opacity-60  shadow-2xl lg:py-20 lg:m-20 card '>
                            <div className="title font-bold text-2xl lg:text-3xl" data-swiper-parallax="-300">
                                Angkor Wat: A Timeless Marvel
                            </div>
                            <div className="pb-2 hidden md:flex text-center font-semibold text-xl  justify-center">
                                <p>Exploring Cambodia's Magnificent Temple Complex</p>
                            </div>
                            <div className=" w-2/3 mx-auto hidden md:flex" data-swiper-parallax="-100">
                                <p>
                                    Angkor Wat, Cambodia's crown jewel, is the world's largest religious monument. Built in the 12th century, it mesmerizes visitors with its intricate carvings and towering spires, serving as a testament to the grandeur of the Khmer Empire. As a symbol of Cambodia's cultural heritage, Angkor Wat attracts visitors from around the globe, offering a mesmerizing journey through ancient history and spiritual significance.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className="bg-[url('https://i.ibb.co/xmSHQ19/phiphi-island.jpg')] bg-cover object-cover" >

                        <div className='space-y-3 py-5 bg-black text-white opacity-60  shadow-2xl lg:py-20 lg:m-20 card '>
                            <div className="title font-bold text-2xl lg:text-3xl" data-swiper-parallax="-300">
                                The Enchanting Phi Phi Islands
                            </div>
                            <div className="pb-2 hidden md:flex text-center font-semibold text-xl  justify-center">
                                <p>Unveiling Thailand's Tropical Gem with Pristine Beaches</p>
                            </div>
                            <div className=" w-2/3 mx-auto hidden md:flex" data-swiper-parallax="-100">
                                <p>The Phi Phi Islands, nestled in Thailand's Andaman Sea, boast stunning beaches, crystal-clear waters, and dramatic limestone cliffs. Famous for attractions like Maya Bay and Tonsai Village, they offer diverse activities such as snorkeling, diving, and beach hopping, making them a must-visit tropical destination.
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>



                </Swiper>
            </section>

            <section>
                
            </section>
        </>
    );
}

export default Slider;
