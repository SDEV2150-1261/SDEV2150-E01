export default function ResultsItem(props) {
	// I recommend destructuring individual props instead of using one collected input param
	console.log(props)
	// NOTE: we don't get access to a {key} prop even if we set one when the component is used;
	//       the key is just for React's internal bookkeeping.

	return <li>{props.title}</li>
}

