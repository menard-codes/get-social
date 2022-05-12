import Image from 'next/image';

export default function ContinueWith({ provider, providerLogoUrl, url }) {
	return (
		<a
			href={url}
			className='border-2 border-[#F6F6F6] hover:bg-[#f3f5f7] rounded-2xl py-2 px-8 w-full flex items-center gap-4 justify-center'
		>
			<Image src={providerLogoUrl} alt='Auth provider' width='30' height='30' />
			<span>Continue with {provider}</span>
		</a>
	);
}
