import { DropdownBox, FormInput, SubmitButton, Layout } from '../../components/form.js'
import { navItems } from './login.js'
import schema from '../../models/Account/accountSchema'

export async function submitForm(e) {
  e.preventDefault()
}
export function RegisterForm() {
  return (
    <>
      <FormInput required id="name" name="name" placeholder="Input your name" />
      <FormInput required type='date' id="birthday" name="birthday" />
      <DropdownBox id="gender" required name="gender" values={['Male', 'Female', 'Others']}></DropdownBox>
      <FormInput type='password' minLength={schema.password.minlength[0]} required id="password" name="password" placeholder="Input your password" />
      <FormInput type='password' required id="re-enter" name="re-enter" placeholder="Confirm your password" />
      <SubmitButton value="Register" onClick={submitForm} />
    </>
  )
}
export function RegisterFormTest() {
  return (
    <>
      <FormInput required id="name" name="name" placeholder="Input your name" defaultValue="afdsasdfasfdasfd" />
      <FormInput required type='date' id="birthday" name="birthday" defaultValue='2222-10-02' />
      <DropdownBox id="gender" required name="gender" values={['Male', 'Female', 'Others']}></DropdownBox>
      <FormInput type='password' minLength={schema.password.minlength[0]} defaultValue="asfdasfasfdasf" required id="password" name="password" placeholder="Input your password" />
      <FormInput type='password' required id="re-enter" name="re-enter" defaultValue='value="asfdasfasfdasf"' placeholder="Confirm your password" />
      <SubmitButton value="Register" onClick={submitForm} />
    </>
  )
}
export default function () {
  return (
    <>
      <Layout title="Register" Form={RegisterFormTest} navItems={navItems} link='../api/Account/create' />
    </>
  )
}