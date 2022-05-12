import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function WriteMessage() {
	return (
		<form className='flex gap-2'>
			<input
				type='text'
				className='bg-[#f3f5f7] rounded-lg py-2 px-4 w-full'
				placeholder='Message'
			/>
			<button
				type='submit'
				className='bg-main hover:bg-main-light w-14 rounded-lg text-white'
			>
				<FontAwesomeIcon icon={faPaperPlane} />
			</button>
		</form>
	);
}
