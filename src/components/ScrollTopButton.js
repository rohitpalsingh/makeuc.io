import ScrollTop from 'react-scrolltop-button';

const ScrollTopButton = ({distance=700}) => {
    return (
        <ScrollTop 
            text=''
            distance={distance}
            breakpoint={50000}
            style={{'border-radius': '50%'}}
        />
    );
};

export default ScrollTopButton;