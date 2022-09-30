import { DropdownBox, FormInput, SubmitButton, Layout } from '../../components/form.js'
import { navItems } from './login.js'
import schema from '../../models/accountSchema'

export async function submitForm(e) {
  // e.preventDefault()
}
export function RegisterForm() {
  return (
    <>
      <FormInput required id="name" name="name" placeholder="Input your name" />
      <FormInput required type='date' id="birthday" name="birthday" />
      <DropdownBox id="gender" required name="gender" values={['Male', 'Female', 'Others']}></DropdownBox>
      <FormInput type='password' required id="password" name="password" placeholder="Input your password" />
      <FormInput type='password' required id="re-enter" name="re-enter" placeholder="Confirm your password" />
      <SubmitButton value="Register" onClick={submitForm} />
    </>
  )
}
export default function () {
  return (
    <>
      <Layout title="Register" Form={RegisterForm} navItems={navItems} link='../api/Account/create' />
    </>
  )
}