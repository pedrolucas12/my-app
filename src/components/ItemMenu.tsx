type Props = {
    name : string;
}

export function ItemMenu({name} : Props) {
    return (
        <button className='flex items-center gap-3'>
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">{name}</a>
        </button>
    );
}