"use client";

import {
  Mail,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import {
  AccountSettings as AccountSettingsType,
} from "@/src/lib/api/settings";


interface Props {
  account: AccountSettingsType;
}


export default function AccountSettings({
  account,
}: Props) {


  return (

    <div className="space-y-6">


      <section
        className="
        rounded-3xl
        border
        border-black/5
        dark:border-white/5
        bg-white/80
        dark:bg-zinc-900/80
        backdrop-blur-xl
        p-6
        "
      >


        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-orange-500/10
            "
          >

            <ShieldCheck
              className="text-orange-500"
            />

          </div>



          <div>

            <h2
              className="
              text-xl
              font-semibold
              text-zinc-900
              dark:text-white
              "
            >
              Account Information
            </h2>


            <p
              className="
              text-sm
              text-zinc-500
              "
            >
              Manage your account details.
            </p>

          </div>


        </div>




        <div className="mt-6 space-y-5">


          {/* Email */}


          <div
            className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-zinc-200
            dark:border-zinc-800
            p-4
            "
          >

            <div className="flex items-center gap-3">


              <Mail
                size={20}
                className="text-orange-500"
              />


              <div>

                <p
                  className="
                  text-sm
                  text-zinc-500
                  "
                >
                  Email Address
                </p>


                <p
                  className="
                  font-medium
                  text-zinc-900
                  dark:text-white
                  "
                >
                  {account.email}
                </p>


              </div>


            </div>




            {
              account.isEmailVerified
              ?

              <div
                className="
                flex
                items-center
                gap-1
                rounded-full
                bg-green-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-green-500
                "
              >

                <CheckCircle2 size={14}/>

                Verified

              </div>

              :

              <div
                className="
                rounded-full
                bg-yellow-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-yellow-500
                "
              >

                Not Verified

              </div>

            }


          </div>





          {/* Security Info */}


          <div
            className="
            rounded-2xl
            border
            border-zinc-200
            dark:border-zinc-800
            p-4
            "
          >


            <h3
              className="
              font-medium
              text-zinc-900
              dark:text-white
              "
            >
              Security
            </h3>


            <p
              className="
              mt-1
              text-sm
              text-zinc-500
              "
            >
              Your password and authentication settings
              can be managed from the Privacy section.
            </p>


          </div>



        </div>


      </section>



    </div>

  );
}