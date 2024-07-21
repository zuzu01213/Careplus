import { PatientForm } from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

          <PatientForm />

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
        src="/assets/images/8.jpg"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%] h-full object-cover"
      />
    </div>
  );
}
