import formStyles from '../styles/modules/form.module.scss'
import Head from 'next/head'
import Navbar from './navbar'
import mainStyles from '../styles/modules/main.module.scss'

export function FormInput(props) {
  const { id, name } = props;
  return (
    <section className={formStyles['input-field']}>
      <label htmlFor={id}>{name}</label>
      <input {...props} />
    </section >
  )
}

export function DropdownBox({ id, name, values }) {
  return (
    <section className={formStyles['input-field']}>
      <label htmlFor={id}>{name}</label>
      <select {...{ id, name }}>
        {values?.map(i => <option key={i} value={i}>{i}</option>)}
      </select>
    </section >
  )
}

export function SubmitButton(props) {
  return <input {...props} type='submit' className={formStyles['submit-btn']} />
}

export function Layout({ title, Form, navItems, link }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar name="Account" items={navItems} />
      <main className={mainStyles.main}>
        <section className={mainStyles['main-container']}>
          <div className={mainStyles['right-border']}>
            <h1 className={mainStyles.h1}>{title}</h1>
          </div>
          <div>
            <form className={formStyles.form} method='POST' action={link}>
              <Form />
            </form>
          </div>
        </section>
      </main>
    </>
  )
}