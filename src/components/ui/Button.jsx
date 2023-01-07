export function Button(props) {
  return (
    <>
      <button {...props} style={{color: 'black'}} onClick={props.click}>{props.children}</button>
    </>
  )
}