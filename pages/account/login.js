import { FormInput, SubmitButton, Layout } from '../../components/form.js'

export function LoginForm() {
  return <>
    <FormInput required={true} id="name" name="name" placeholder="Input your name" />
    <FormInput required={true} type='password' id="password" name="password" placeholder="Input your password" />
    <SubmitButton text="Login" />
  </>
}
export const navItems = [
  { link: './login', title: 'Login' },
  { link: './register', title: 'Register' },
]
export default function () {
  return <Layout title="Login" Form={LoginForm} navItems={navItems} link='./login' />
}