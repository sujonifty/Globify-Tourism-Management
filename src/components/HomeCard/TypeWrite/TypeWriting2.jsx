import { useContext } from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import { authContext } from '../../Providers/AuthProvider';

const TypeWriting2 = () => {
    const {user}=useContext(authContext);
    const [text] = useTypewriter({
        words: [`Welcome ${user?.displayName}`, 'Welcome to Globify Tourism Management!', 'Embark on a journey of discovery with us','With Globify, Where every trip is an extraordinary adventure!','Lets make it extraordinary together!'],
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

export default TypeWriting2;