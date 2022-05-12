export default function ChatBubble({ message, time, isOwn }) {
	if (isOwn) {
		return (
			<div className='w-fit max-w-[400px] rounded-t-3xl bg-main p-4 rounded-bl-3xl rounded-br text-white'>
				<p>{message}</p>
				<div className='w-full text-right'>
					<time className='text-sm'>{time}</time>
				</div>
			</div>
		);
	} else {
		return (
			<div className='w-fit max-w-[400px] rounded-t-3xl bg-[#f3f5f7] p-4 rounded-br-3xl rounded-bl text-slate-700'>
				<p>{message}</p>
				<div className='w-full text-right'>
					<time className='text-sm'>{time}</time>
				</div>
			</div>
		);
	}
}
