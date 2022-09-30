import { FormInput, SubmitButton, AccountPageLayout } from '../../components/form.js'

export function LoginForm() {
  return <>
    <FormInput required={true} id="name" name="name" placeholder="Input your name" />
    <FormInput required={true} type='password' id="password" name="password" placeholder="Input your password" />
    <SubmitButton text="Login" />
  </>
}
export default function () {
  return <AccountPageLayout title="Login" Form={LoginForm} />
}