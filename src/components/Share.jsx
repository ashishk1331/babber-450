import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid"
import Button from './Button'

export default function(props){
	return (
		<div className="flex flex-wrap items-center gap-3 mt-16 border-2 border-zinc-900 rounded p-3 px-4 italic text-lg text-zinc-600">
        	<p >
        		Already know a fantastic video? Want to share?
        		<br />
        		Tweet about it and tag me along.
        	</p>

        	<Button cl="ml-auto mr-0 my-4 md:my-0 flex items-center gap-2" href="https://twitter.com/AshishK1331">
				<ChatBubbleBottomCenterIcon className="w-6 h-6 text-purple" />
				<p className="md:hidden block">
					tweet about it.
				</p>
			</Button>      
        </div>
	)
}