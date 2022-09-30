import { DropdownBox, FormInput, SubmitButton, Layout } from '../../components/form.js'
import { navItems } from './login.js'
import schema from '../../models/accountSchema'

export async function submitForm(e) {
  e.preventDefault()
  const data = await fetch('../api/Account/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {

    }
  })
}
export function RegisterForm() {
  return (
    <>
      <FormInput required={true} id="name" name="name" placeholder="Input your name" />
      <FormInput required={true} type='date' id="birthday" name="birthday" />
      <DropdownBox id="gender" required={true} name="gender" values={['Male', 'Female', 'Others']}></DropdownBox>
      <FormInput type='password' required={true} id="password" name="password" placeholder="Input your password" />
      <FormInput type='password' required={true} id="re-enter" name="re-enter" placeholder="Confirm your password" />
      <SubmitButton text="Register" onclick={submitForm} />
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