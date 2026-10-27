export default function ResultsItem(props) {
	// I recommend destructuring individual props instead of using one collected input param
	console.log(props)
	// NOTE: we don't get access to a {key} prop even if we set one when the component is used;
	//       the key is just for React's internal bookkeeping.

	return <li
		className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-50"
	>
		<div className="flex items-start justify-between gap-3">
			<h2 className="text-sm font-semibold">{props.title}</h2>
			<small className="text-xs text-gray-500">{props.category}</small>
		</div>
		<p className="mt-1 text-xs text-gray-500">{props.summary}</p>
		<small className="mt-1 block text-xs text-gray-500">
			{props.location}
		</small>
	</li>
}
