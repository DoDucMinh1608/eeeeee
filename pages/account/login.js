import Navbar from '../../components/navbar'
import mainStyles from '../../styles/modules/main.module.scss'
import formStyles from '../../styles/modules/form.module.scss'
import TextInput from '../../components/forms/text'
export default function (props) {
  return (
    <>
      <Navbar name="Account" />
      <main className={mainStyles.main}>
        <section className={mainStyles['main-container']}>
          <div className={formStyles['form-section']}>
            <h1 className={formStyles.h1}>Login</h1>
          </div>
          <div className={formStyles['form-section']}>
            <form method='POST' action={props.url}>
              <TextInput id="name" name="name" placeholder="Input your name" />
            </form>
          </div>
        </section>
      </main>
    </>
  )
}