import { DropdownBox, FormInput, SubmitButton, AccountPageLayout } from '../../components/form.js'

export function RegisterForm() {
  return (
    <>
      <FormInput required={true} id="name" name="name" placeholder="Input your name" />
      <FormInput required={true} type='date' id="birthday" name="birthday" />
      <DropdownBox id="gender" required={true} name="gender" values={['Male', 'Female', 'Others']}></DropdownBox>
      <FormInput type='password' required={true} id="password" name="password" placeholder="Input your password" />
      <FormInput type='password' required={true} id="re-enter" name="re-enter" placeholder="Confirm your password" />
      <SubmitButton text="Register" />
    </>
  )
}
export default function () {
  return <AccountPageLayout title="Register" Form={RegisterForm} />
}