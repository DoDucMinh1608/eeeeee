import formStyles from '../styles/modules/form.module.scss'
import Head from 'next/head'
import Navbar from './navbar'
import mainStyles from '../styles/modules/main.module.scss'

export function FormInput({ id, name, password, type, placeholder, value, required }) {
  return (
    <section className={formStyles['input-field']}>
      <label htmlFor={id}>{name}</label>
      <input required={required} className={password && formStyles.pw} name={name} type={type || 'text'} id={id} placeholder={placeholder} value={value} />
    </section >
  )
}

export function DropdownBox({ id, name, values }) {
  return (
    <section className={formStyles['input-field']}>
      <label htmlFor={id}>{name}</label>
      <select name={name} id={id}>
        {values?.map(i => <option key={i} value={i}>{i}</option>)}
      </select>
    </section >
  )
}

export function SubmitButton({ text }) {
  return <button type='submit' className={formStyles['submit-btn']}>{text}</button>
}

export function AccountPageLayout({ title, Form }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar name="Account" />
      <main className={mainStyles.main}>
        <section className={mainStyles['main-container']}>
          <div className={mainStyles['right-border']}>
            <h1 className={mainStyles.h1}>{title}</h1>
          </div>
          <div>
            <form className={formStyles.form} method='POST' action='./login'>
              <Form />
            </form>
          </div>
        </section>
      </main>
    </>
  )
}