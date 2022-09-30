export default function (props) {
  return (
    <section>
      <label for={props.id || ''}>{props.name}</label>
      <input name={props.name} type='text' id={props.id || ''} placeholder={props.placeholder || ''} value={props.value || ''} />
    </section>
  )
}
