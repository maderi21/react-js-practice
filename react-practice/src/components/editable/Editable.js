const Editable = () => {
  const [editable, setEditable] = useState(false);
	const [inputValue,setInputValue] = useState('')

const togleEditable = () => setEditable(prevEditable =>!prevEditable)

const handleInputValue = (e) => {
	setInputValue(e.target.value)
}


return (
	<div>
		{editable ? (
			<lable>
				Title
				<imput type='text' value={inputValue} onChange={handleInputValue} />
			</lable>
		) :(

		)}
	</div>
)

};