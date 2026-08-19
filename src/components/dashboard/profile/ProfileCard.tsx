"use client";

import {
  Pencil,
  Code2,
  Trophy,
  Languages,
} from "lucide-react";

import {FaGithub} from "react-icons/fa"

import { ProfileResponse } from "@/src/lib/api/profile";


interface Props {
  profile: ProfileResponse;
  onEdit: () => void;
}



export default function ProfileCard({
  profile,
  onEdit,
}: Props) {


  const {
    profile: userProfile,
    preferences,
  } = profile;



  return (

    <div className="space-y-6">


      {/* Header */}


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

        <div className="flex items-center justify-between">


          <div className="flex items-center gap-5">


            <img

              src={
                userProfile.avatarUrl ||
                `https://api.dicebear.com/9.x/initials/svg?seed=${userProfile.displayName}`
              }

              alt="avatar"

              className="
              h-24
              w-24
              rounded-3xl
              border
              border-zinc-200
              dark:border-zinc-700
              "
            />


            <div>


              <h1
                className="
                text-2xl
                font-bold
                text-zinc-900
                dark:text-white
                "
              >
                {userProfile.displayName}
              </h1>


              <p
                className="
                mt-1
                text-sm
                text-zinc-500
                "
              >
                {userProfile.experienceLevel}
              </p>


            </div>


          </div>




          <button

            onClick={onEdit}

            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-orange-500/10
            text-orange-500
            transition
            hover:bg-orange-500
            hover:text-white
            "
          >

            <Pencil size={18}/>

          </button>



        </div>


      </section>







      {/* Information */}



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


        <h2
          className="
          text-xl
          font-semibold
          text-zinc-900
          dark:text-white
          "
        >
          Profile Details
        </h2>




        <div className="mt-6 space-y-4">



          <InfoRow
            icon={<Languages size={20}/>}
            title="Preferred Language"
            value={
              preferences.preferredLanguage?.name ||
              "Not selected"
            }
          />



          <InfoRow
            icon={<Trophy size={20}/>}
            title="Experience Level"
            value={
              userProfile.experienceLevel
            }
          />



          <InfoRow
            icon={<Code2 size={20}/>}
            title="LeetCode"
            value={
              userProfile.leetcodeUsername ||
              "Not connected"
            }
          />



          <InfoRow
            icon={<FaGithub size={20}/>}
            title="GitHub"
            value={
              userProfile.githubUsername ||
              "Not connected"
            }
          />



        </div>



      </section>


    </div>

  );
}





function InfoRow({
  icon,
  title,
  value,
}:{
  icon:React.ReactNode;
  title:string;
  value:string;
}){


  return (

    <div
      className="
      flex
      items-center
      gap-4
      rounded-2xl
      border
      border-zinc-200
      dark:border-zinc-800
      p-4
      "
    >


      <div
        className="
        text-orange-500
        "
      >
        {icon}
      </div>



      <div>

        <p
          className="
          text-sm
          text-zinc-500
          "
        >
          {title}
        </p>


        <p
          className="
          font-medium
          text-zinc-900
          dark:text-white
          "
        >
          {value}
        </p>


      </div>



    </div>

  );

}