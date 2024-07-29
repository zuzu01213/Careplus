import { RegisterForm } from "@/components/forms/RegisterForm"
import { getUser } from "@/lib/actions/patient.actions"
import Image from "next/image"
import Link from "next/link"


const register = async ({params: { userId }}: SearchParamProps ) => {
    const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px] mx-auto">
        <Image
          src="/assets/icons/logo-full.svg"
          alt="patient"
          width={496}
          height={496}
          className="w-fit mb-12 h-10"
        />

        <RegisterForm 
            user={user}
        />

        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 Healthcare.
          </p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
      </div>
    </section>
    
    <Image
      src="/assets/images/register-img.png"
      alt="patient"
      width={1000}
      height={1000}
      className="side-img max-w-[48%] "
    />
  </div>
  )
}

export default register