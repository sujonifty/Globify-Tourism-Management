import { useTypewriter } from "react-simple-typewriter";

const TypeWriting3 = () => {
    const [text] = useTypewriter({
        words: [ 'Exploring Enchanting Tourism Spots','Your Next Adventure Awaits' , 'Journey Through Spectacular Landscapes'],
        loop: 0
      })
    return (
        <div>
            <p className='text-4xl font-extrabold text-[#D2B48C]'>
                {text}
            </p>
        </div>
    );
};

export default TypeWriting3;