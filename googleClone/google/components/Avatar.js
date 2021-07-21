

function Avatar({url}) {
    return (
        <img 
        loading='lazy'
        src={url}
        alt="profile pic"
        className='h-10 rounded-full bouncecursor-pointer transition duration-150 transform hover:scale-110'
        />
    )
}

export default Avatar
