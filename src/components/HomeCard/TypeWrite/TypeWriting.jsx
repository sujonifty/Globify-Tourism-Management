import { useContext } from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import { authContext } from '../../Providers/AuthProvider';

const TypeWriting = () => {
    const {user}=useContext(authContext)
    const [text] = useTypewriter({
        words: [`${user.displayName}`, 'to you', 'to your family', 'to your friends'],
        loop: 0
      })
    return (
        <div className='App'>
            <p className='text-6xl font-extrabold '>
                Wellcome <span className='text-[#D2B48C]'>{text}</span>
            </p>
      
    </div>
    );
};

export default TypeWriting;