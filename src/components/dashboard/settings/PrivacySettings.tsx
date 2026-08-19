"use client";

import { useState } from "react";
import {
  Lock,
  Trash2,
  ShieldAlert,
  Eye,
  EyeOff,
} from "lucide-react";

import {
  changePassword,
  deleteAccount,
} from "@/src/lib/api/settings";


export default function PrivacySettings() {

  const [showPassword,setShowPassword] =
    useState(false);

  const [currentPassword,setCurrentPassword] =
    useState("");

  const [newPassword,setNewPassword] =
    useState("");

  const [confirmDelete,setConfirmDelete] =
    useState("");

  const [showDeleteModal,setShowDeleteModal] =
    useState(false);


  const [loading,setLoading] =
    useState(false);

  const [message,setMessage] =
    useState("");



  async function handlePasswordChange(){

    setLoading(true);
    setMessage("");

    try{

      await changePassword({
        currentPassword,
        newPassword,
      });


      setMessage(
        "Password updated successfully."
      );


      setCurrentPassword("");
      setNewPassword("");

    }
    catch(error){

      setMessage(
        error instanceof Error
        ? error.message
        : "Failed to update password."
      );

    }
    finally{

      setLoading(false);

    }

  }





  async function handleDeleteAccount(){

    if(confirmDelete !== "DELETE")
      return;


    setLoading(true);


    try{

      await deleteAccount();


      window.location.href="/login";

    }
    catch(error){

      setMessage(
        error instanceof Error
        ? error.message
        : "Failed to delete account."
      );

    }
    finally{

      setLoading(false);

    }

  }



  return (

    <div className="space-y-6">



      {/* Password */}


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


        <div className="flex gap-3">

          <Lock
            className="text-orange-500"
          />

          <div>

            <h2 className="
              text-xl
              font-semibold
              text-zinc-900
              dark:text-white
            ">
              Change Password
            </h2>


            <p className="
              text-sm
              text-zinc-500
            ">
              Update your account password.
            </p>

          </div>

        </div>



        <div className="mt-6 space-y-4">


          <div className="relative">

            <input
              type={
                showPassword
                ?"text"
                :"password"
              }

              value={currentPassword}

              onChange={(e)=>
                setCurrentPassword(e.target.value)
              }

              placeholder="Current Password"

              className="
              h-11
              w-full
              rounded-xl
              border
              border-zinc-200
              bg-transparent
              px-4
              pr-12
              dark:border-zinc-700
              "
            />


            <button
              onClick={()=>
                setShowPassword(!showPassword)
              }

              className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-zinc-500
              "
            >

              {
                showPassword
                ?
                <EyeOff size={18}/>
                :
                <Eye size={18}/>
              }

            </button>


          </div>



          <input
            type="password"

            value={newPassword}

            onChange={(e)=>
              setNewPassword(e.target.value)
            }

            placeholder="New Password"

            className="
            h-11
            w-full
            rounded-xl
            border
            border-zinc-200
            bg-transparent
            px-4
            dark:border-zinc-700
            "
          />



          <button
            onClick={handlePasswordChange}

            disabled={loading}

            className="
            rounded-xl
            bg-orange-500
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            disabled:opacity-50
            "
          >

            {
              loading
              ?
              "Updating..."
              :
              "Update Password"
            }

          </button>


        </div>


      </section>






      {/* Danger Zone */}



      <section
        className="
        rounded-3xl
        border
        border-red-500/20
        bg-red-500/5
        p-6
        "
      >


        <div className="flex gap-3">


          <ShieldAlert
            className="text-red-500"
          />


          <div>

            <h2 className="
            text-xl
            font-semibold
            text-red-500
            ">
              Danger Zone
            </h2>


            <p className="
            mt-1
            text-sm
            text-zinc-500
            ">
              Permanently remove your AlgoForge account.
            </p>


          </div>


        </div>




        <div className="mt-5">


          <button

            onClick={()=>
              setShowDeleteModal(true)
            }

            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-red-500
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            "

          >

            <Trash2 size={17}/>

            Delete Account

          </button>


        </div>


      </section>






      {
        message && (

          <div
          className="
          rounded-xl
          border
          border-orange-500/20
          bg-orange-500/10
          px-4
          py-3
          text-sm
          text-orange-500
          "
          >

            {message}

          </div>

        )
      }





      {/* Delete Modal */}



      {
        showDeleteModal && (

          <div
          className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/50
          px-5
          "
          >


            <div
            className="
            w-full
            max-w-md
            rounded-3xl
            bg-white
            p-6
            dark:bg-zinc-900
            "
            >


              <h2
              className="
              text-xl
              font-bold
              text-red-500
              "
              >
                Delete Account?
              </h2>



              <p
              className="
              mt-3
              text-sm
              text-zinc-500
              "
              >
                This action cannot be undone.
                Your profile, progress and preferences
                will be permanently deleted.
              </p>



              <input

              value={confirmDelete}

              onChange={(e)=>
                setConfirmDelete(e.target.value)
              }

              placeholder="Type DELETE"

              className="
              mt-5
              h-11
              w-full
              rounded-xl
              border
              px-4
              dark:border-zinc-700
              dark:bg-zinc-950
              "

              />




              <div className="mt-5 flex gap-3">


                <button

                onClick={()=>
                  setShowDeleteModal(false)
                }

                className="
                flex-1
                rounded-xl
                border
                py-2.5
                "

                >
                  Cancel
                </button>




                <button

                disabled={
                  confirmDelete !== "DELETE"
                }

                onClick={handleDeleteAccount}

                className="
                flex-1
                rounded-xl
                bg-red-500
                py-2.5
                font-semibold
                text-white
                disabled:opacity-40
                "

                >

                  Delete

                </button>


              </div>


            </div>


          </div>

        )
      }


    </div>

  );
}