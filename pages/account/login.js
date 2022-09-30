import Navbar from '../../components/navbar'
import mainStyles from '../../styles/modules/main.module.scss'
import formStyles from '../../styles/modules/form.module.scss'
import { DropdownBox, FormInput } from '../../components/form.js'

export default function (props) {
  return (
    <>
      <Navbar name="Account" />
      <main className={mainStyles.main}>
        <section className={mainStyles['main-container']}>
          <div>
            <h1 className={mainStyles.h1}>Login</h1>
          </div>
          <div className={formStyles['form-section']}>
            <form className={formStyles.form} method='POST' action='/login'>
              <FormInput id="name" name="name" placeholder="Input your name" />
              <FormInput type='date' id="birthday" name="birthday" />
              <DropdownBox id="gender" name="gender" values={['Male', 'Female', 'Others']}></DropdownBox>
              <FormInput type='password' id="password" name="password" placeholder="Input your password" />
              <FormInput type='password' id="re-enter" name="re-enter" placeholder="Confirm your password" />
            </form>
          </div>
        </section>
      </main>
    </>
  )
}