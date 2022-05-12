import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function TopBar({ username, photoUrl }) {
	return (
		<Link href='/'>
			<a className='flex bg-secondary text-white w-full gap-3 items-center px-7 py-2'>
				<FontAwesomeIcon icon={faChevronLeft} />
				<Image
					src={photoUrl}
					alt='avatar'
					width='45'
					height='45'
					className='rounded-full'
				/>
				<p>{username}</p>
			</a>
		</Link>
	);
}
