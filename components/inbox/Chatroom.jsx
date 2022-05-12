import Image from 'next/image';
import Link from 'next/link';

export default function Chatroom({
	photoUrl,
	username,
	messagePreview,
	time,
	chatroomURL,
}) {
	// TODO: There should be a messagePreview truncation functionality here
	return (
		<Link href={chatroomURL}>
			<a className='grid grid-cols-[1fr_3fr] w-full hover:bg-slate-100 p-3 rounded-lg'>
				<div className='flex items-center'>
					<Image
						src={photoUrl}
						alt='avatar'
						width='60'
						height='60'
						className='rounded-full'
					/>
				</div>
				<div>
					<div className='flex justify-between'>
						<p className='font-black'>{username}</p>
						<time className='text-[15px] text-slate-600'>{time}</time>
					</div>
					<p className='text-sm text-slate-600'>{messagePreview}</p>
				</div>
			</a>
		</Link>
	);
}
