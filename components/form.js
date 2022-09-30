import styles from '../styles/modules/form.module.scss'

export function FormInput(props) {
  return (
    <section className={styles['input-field']}>
      <label for={props.id}>{props.name}</label>
      <input className={props.password && styles.pw} name={props.name} type={props.type || 'text'} id={props.id} placeholder={props.placeholder} value={props.value} />
    </section>
  )
}

export function DropdownBox(props) {
  return (
    <section className={styles['input-field']}>
      <label for={props.id}>{props.name}</label>
      <select name={props.name} id={props.id}>
        {props.values?.map(i => <option value={i}>{i}</option>)}
      </select>
    </section>
  )
}