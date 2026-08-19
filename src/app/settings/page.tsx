"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowLeft,
  Bell,
  CreditCard,
  Lock,
  LogOut,
  Pencil,
  Shield,
  UserRound,
  Zap,
  Mail,
  Smartphone,
  WalletCards,
} from "lucide-react";

import { getProfile, type ProfileResponse } from "@/src/lib/api/profile";
import { logout } from "@/src/lib/api/auth";

import { deleteAccount } from "@/src/lib/api/settings";


import {
  getSettings,
  updateNotificationPreferences,
  type SettingsResponse,
} from "@/src/lib/api/settings";


type Section =
  | "account"
  | "subscription"
  | "payment"
  | "notifications"
  | "privacy";

  interface NotificationProps {
  settings: SettingsResponse | null;
  loading: boolean;
  setSettings: React.Dispatch<
    React.SetStateAction<SettingsResponse | null>
  >;
}

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<Section>("account");

  const [profile, setProfile] =
    useState<ProfileResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

    const [settings, setSettings] =
  useState<SettingsResponse | null>(null);

const [settingsLoading, setSettingsLoading] =
  useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);


  useEffect(() => {

  async function loadData() {

    try {

      const profileData = await getProfile();

      setProfile(profileData);


      const settingsData = await getSettings();

      setSettings(settingsData);


    } catch(error){

      console.error(error);

    }
    finally{

      setLoading(false);
      setSettingsLoading(false);

    }

  }


  loadData();

},[]);



  async function handleLogout() {
    try {
      await logout();
    } finally {
      window.location.href = "/login";
    }
  }



  return (
    <main
      className="
      min-h-screen
      bg-zinc-50
      px-6
      py-8
      dark:bg-zinc-950
      "
    >

      <div className="mx-auto max-w-5xl">


        {/* Header */}

        <div className="flex items-center gap-4">

          <Link
            href="/dashboard"
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-zinc-200
            bg-white
            text-zinc-500
            hover:border-orange-500
            hover:text-orange-500
            dark:border-zinc-800
            dark:bg-zinc-900
            "
          >
            <ArrowLeft size={18}/>
          </Link>


          <div>

            <h1
              className="
              text-2xl
              font-bold
              text-zinc-900
              dark:text-white
              "
            >
              Settings
            </h1>


            <p className="text-sm text-zinc-500">
              Manage your AlgoForge account.
            </p>

          </div>

        </div>



        <div
          className="
          mt-8
          grid
          gap-6
          md:grid-cols-[220px_1fr]
          "
        >


          {/* Sidebar */}

          <aside
            className="
            h-fit
            rounded-3xl
            border
            border-zinc-200
            bg-white
            p-3
            dark:border-zinc-800
            dark:bg-zinc-900
            "
          >

            <SettingsButton
              active={activeSection==="account"}
              label="Account"
              icon={<UserRound size={17}/>}
              onClick={()=>setActiveSection("account")}
            />


            <SettingsButton
              active={activeSection==="subscription"}
              label="Subscription"
              icon={<Zap size={17}/>}
              onClick={()=>setActiveSection("subscription")}
            />


            <SettingsButton
              active={activeSection==="payment"}
              label="Payment"
              icon={<CreditCard size={17}/>}
              onClick={()=>setActiveSection("payment")}
            />
            

            <SettingsButton
  active={activeSection==="notifications"}
  label="Notifications"
  icon={<Bell size={17}/>}
  onClick={()=>setActiveSection("notifications")}
/>

            <SettingsButton
  active={activeSection==="privacy"}
  label="Privacy"
  icon={<Shield size={17}/>}
  onClick={()=>setActiveSection("privacy")}
/>



            <div className="my-3 h-px bg-zinc-200 dark:bg-zinc-800"/>


            <button
              onClick={handleLogout}
              className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-2.5
              text-sm
              text-red-500
              hover:bg-red-500/10
              "
            >
              <LogOut size={17}/>
              Logout
            </button>


          </aside>



          {/* Content */}

          <section
            className="
            rounded-3xl
            border
            border-zinc-200
            bg-white
            p-6
            dark:border-zinc-800
            dark:bg-zinc-900
            "
          >


            {activeSection==="account" && (
              <AccountSection
                profile={profile}
                loading={loading}
              />
            )}



            {activeSection==="subscription" && (
              <SubscriptionSection/>
            )}



            {activeSection==="payment" && (
              <PaymentSection/>
            )}


{activeSection==="notifications" && (
  <NotificationSection
    settings={settings}
    loading={settingsLoading}
    setSettings={setSettings}
  />
)}


           {activeSection==="privacy" && (
  <PrivacySection
    onDeleteClick={() => setShowDeleteModal(true)}
  />
)}

{showDeleteModal && (
  <DeleteAccountModal
    onClose={() => setShowDeleteModal(false)}
  />
)}

          </section>


        </div>


      </div>

    </main>
  );
}function SettingsButton({
  active,
  icon,
  label,
  onClick,
}: {
  active:boolean;
  icon:React.ReactNode;
  label:string;
  onClick:()=>void;
}){

  return (
    <button
      onClick={onClick}
      className={`
      flex
      w-full
      items-center
      gap-3
      rounded-xl
      px-3
      py-2.5
      text-sm
      font-medium
      transition

      ${
        active
        ?
        "bg-orange-500/10 text-orange-500"
        :
        "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      }
      `}
    >

      {icon}

      {label}

    </button>
  );
}





function SectionHeader({
  icon,
  title,
  description,
}:{
  icon:React.ReactNode;
  title:string;
  description:string;
}){

return (

<div className="flex items-center gap-3">

<div
className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
bg-orange-500/10
text-orange-500
"
>
{icon}
</div>


<div>

<h2
className="
font-semibold
text-zinc-900
dark:text-white
"
>
{title}
</h2>

<p className="text-sm text-zinc-500">
{description}
</p>


</div>


</div>

);

}







function AccountSection({
profile,
loading,
}:{
profile:ProfileResponse|null;
loading:boolean;
}){


if(loading){

return (
<div className="space-y-3 mt-8">

<div className="h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 animate-pulse"/>

<div className="h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 animate-pulse"/>

<div className="h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 animate-pulse"/>

</div>
);

}



if(!profile)
return null;



return (

<div>

<SectionHeader
icon={<UserRound size={18}/>}
title="Account"
description="Manage your profile information."
/>



<div className="mt-8 space-y-4">


<ProfileRow
label="Display Name"
value={profile.profile.displayName}
/>


<ProfileRow
label="Email"
value={profile.user.email}
/>


<ProfileRow
label="Experience"
value={profile.profile.experienceLevel}
/>


<ProfileRow
label="Preferred Language"
value={
profile.preferences.preferredLanguage?.name ??
"Not selected"
}
/>


</div>



</div>

);

}








function ProfileRow({
label,
value,
}:{
label:string;
value:string;
}){


return (

<div
className="
flex
items-center
justify-between
rounded-2xl
border
border-zinc-200
p-4
dark:border-zinc-800
"
>


<div>

<p className="text-xs text-zinc-500">
{label}
</p>


<p className="
mt-1
font-medium
text-zinc-900
dark:text-white
">
{value}
</p>


</div>



<button
className="
flex
h-8
w-8
items-center
justify-center
rounded-lg
hover:bg-zinc-100
dark:hover:bg-zinc-800
"
>

<Pencil size={15}/>

</button>


</div>

);

}









function SubscriptionSection(){

return (

<div>

<SectionHeader
icon={<Zap size={18}/>}
title="Subscription"
description="Manage your AlgoForge plan."
/>


<div
className="
mt-8
rounded-3xl
border
border-orange-500/30
bg-orange-500/5
p-6
"
>


<p className="text-xs uppercase text-orange-500">
Current Plan
</p>


<h3
className="
mt-2
text-3xl
font-bold
dark:text-white
"
>
Free
</h3>


<p className="mt-2 text-sm text-zinc-500">
Unlock AI coaching and advanced reports.
</p>


<button
className="
mt-6
rounded-xl
bg-orange-500
px-5
py-2.5
text-sm
font-semibold
text-white
"
>
Upgrade
</button>


</div>


</div>

);

}









function PaymentSection() {

  return (

    <div>

      <SectionHeader
        icon={<CreditCard size={19}/>}
        title="Payment"
        description="Manage your payment methods and billing history."
      />


      {/* Payment Method */}

      <div
        className="
        mt-8
        rounded-2xl
        border
        border-zinc-200
        p-6
        dark:border-zinc-800
        "
      >

        <div className="flex items-center gap-4">


          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-zinc-100
            dark:bg-zinc-800
            "
          >

            <WalletCards size={22}/>

          </div>



          <div>

            <h3 className="
            font-semibold
            text-zinc-900
            dark:text-white
            ">
              No payment method
            </h3>


            <p className="
            mt-1
            text-sm
            text-zinc-500
            ">
              Add a payment method when you upgrade your plan.
            </p>


          </div>


        </div>



        <button
          disabled
          className="
          mt-6
          rounded-xl
          border
          border-zinc-200
          px-4
          py-2.5
          text-sm
          font-medium
          text-zinc-400
          dark:border-zinc-700
          "
        >
          Add payment method
        </button>


      </div>





      {/* Billing History */}

      <div
        className="
        mt-6
        rounded-2xl
        border
        border-zinc-200
        p-6
        dark:border-zinc-800
        "
      >


        <div className="flex items-center gap-3">


          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-orange-500/10
            text-orange-500
            "
          >

            <CreditCard size={18}/>

          </div>



          <div>

            <h3 className="
            font-semibold
            text-zinc-900
            dark:text-white
            ">
              Billing History
            </h3>


            <p className="
            text-sm
            text-zinc-500
            ">
              View your previous invoices and payments.
            </p>


          </div>


        </div>





        {/* Empty state */}

        <div
          className="
          mt-6
          flex
          flex-col
          items-center
          justify-center
          rounded-2xl
          border
          border-dashed
          border-zinc-200
          py-10
          text-center
          dark:border-zinc-800
          "
        >


          <CreditCard
            size={32}
            className="
            text-zinc-400
            "
          />


          <h4
            className="
            mt-4
            font-medium
            text-zinc-900
            dark:text-white
            "
          >
            No billing history
          </h4>


          <p
            className="
            mt-1
            max-w-sm
            text-sm
            text-zinc-500
            "
          >
            Your subscription invoices and payment
            records will appear here.
          </p>


        </div>


      </div>


    </div>

  );

}

function NotificationToggle({
  icon,
  label,
  description,
  checked,
  disabled,
  onChange,
}:{
  icon?:React.ReactNode;
  label:string;
  description:string;
  checked:boolean;
  disabled?:boolean;
  onChange:(value:boolean)=>void;
}){


return (

<div className="
flex
items-center
justify-between
rounded-2xl
border
border-zinc-200
bg-white
p-4
dark:border-zinc-800
dark:bg-zinc-900
">


<div className="flex items-center gap-3">

{
icon && (
<div className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
bg-orange-500/10
text-orange-500
">
{icon}
</div>
)
}


<div>

<h3 className="
text-sm
font-medium
text-zinc-900
dark:text-white
">
{label}
</h3>


<p className="
text-xs
text-zinc-500
">
{description}
</p>


</div>

</div>



<button
disabled={disabled}
onClick={()=>
onChange(!checked)
}
className={`
relative
h-6
w-11
rounded-full
transition
${
checked
?
"bg-orange-500"
:
"bg-zinc-300 dark:bg-zinc-700"
}
${
disabled
?
"cursor-not-allowed opacity-50"
:
""
}
`}
>


<span
className={`
absolute
top-1
h-4
w-4
rounded-full
bg-white
transition
${
checked
?
"left-6"
:
"left-1"
}
`}
/>


</button>


</div>

);

}

function NotificationSection({
  settings,
  loading,
  setSettings,
}: NotificationProps) {

  const [updating, setUpdating] = useState(false);


  if (loading) {
    return (
      <div className="space-y-3">
        <div className="h-16 rounded-2xl bg-zinc-100 animate-pulse dark:bg-zinc-800" />
        <div className="h-16 rounded-2xl bg-zinc-100 animate-pulse dark:bg-zinc-800" />
        <div className="h-16 rounded-2xl bg-zinc-100 animate-pulse dark:bg-zinc-800" />
      </div>
    );
  }


  if (!settings) {
    return (
      <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-500 dark:border-zinc-800">
        Notification settings unavailable.
      </div>
    );
  }


  const notifications = settings.notifications;


  const deliveryEnabled =
    notifications.emailEnabled ||
    notifications.inAppEnabled;



  async function update(
    key: keyof typeof notifications,
    value: boolean,
  ) {

    try {

      setUpdating(true);


      const updated =
        await updateNotificationPreferences({
          [key]: value,
        });


      setSettings((prev)=>{

        if(!prev) return prev;


        return {
          ...prev,

          notifications:{
            ...prev.notifications,
            ...updated,
          },

        };

      });


    } catch(error){

      console.error(error);

    }
    finally{

      setUpdating(false);

    }

  }



  const items = [

    {
      key:"revisionNotification",
      label:"Revision reminders",
      description:"Get reminders for pending revisions."
    },

    {
      key:"roadmapNotification",
      label:"Roadmap updates",
      description:"Updates related to your learning roadmap."
    },

    {
      key:"dailyGoalNotification",
      label:"Daily goal reminders",
      description:"Stay consistent with daily coding goals."
    },

    {
      key:"weeklyReportNotification",
      label:"Weekly reports",
      description:"Receive your weekly progress summary."
    },

    {
      key:"recommendationNotification",
      label:"AI recommendations",
      description:"Get personalized coding recommendations."
    },

    {
      key:"paymentNotification",
      label:"Payment notifications",
      description:"Receive payment related updates."
    },

    {
      key:"marketingNotification",
      label:"Marketing notifications",
      description:"Receive product announcements."
    },

  ] as const;



  return (

    <div>


      <SectionHeader
        icon={<Bell size={19}/>}
        title="Notifications"
        description="Manage how AlgoForge communicates with you."
      />



      {/* Delivery methods */}

      <div className="mt-8 space-y-3">


        <NotificationToggle
          icon={<Mail size={18}/>}
          label="Email notifications"
          description="Receive notifications through email."
          checked={notifications.emailEnabled}
          disabled={updating}
          onChange={(value)=>
            update(
              "emailEnabled",
              value
            )
          }
        />


        <NotificationToggle
          icon={<Smartphone size={18}/>}
          label="In-app notifications"
          description="Receive notifications inside AlgoForge."
          checked={notifications.inAppEnabled}
          disabled={updating}
          onChange={(value)=>
            update(
              "inAppEnabled",
              value
            )
          }
        />

      </div>



      {!deliveryEnabled && (

        <div className="
          mt-5
          rounded-2xl
          border
          border-orange-500/20
          bg-orange-500/5
          px-5
          py-4
          text-sm
          text-zinc-600
          dark:text-zinc-400
        ">

          Enable email or in-app notifications
          to manage individual notification options.

        </div>

      )}




      {/* Individual notifications */}

      <div className="mt-6 space-y-3">


        {items.map((item)=>(
          
          <NotificationToggle
            key={item.key}
            label={item.label}
            description={item.description}
            checked={
              notifications[item.key]
            }
            disabled={
              !deliveryEnabled ||
              updating
            }
            onChange={(value)=>
              update(
                item.key,
                value
              )
            }
          />

        ))}


      </div>



    </div>

  );

}








function PrivacySection({
  onDeleteClick,
}:{
  onDeleteClick:()=>void;
}){

  return (

    <div>

      <SectionHeader
        icon={<Shield size={19}/>}
        title="Privacy"
        description="Manage your account security and privacy."
      />


      <div
        className="
        mt-8
        rounded-2xl
        border
        border-red-200
        bg-red-50
        p-6
        dark:border-red-900/40
        dark:bg-red-950/20
        "
      >

        <h3
          className="
          font-semibold
          text-red-600
          "
        >
          Delete Account
        </h3>


        <p
          className="
          mt-2
          text-sm
          text-zinc-500
          "
        >
          Permanently delete your AlgoForge account.
          This action cannot be undone.
        </p>


        <button
  onClick={onDeleteClick}
          className="
          mt-5
          rounded-xl
          bg-red-500
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-red-600
          "
        >
          Delete Account
        </button>


      </div>


    </div>

  );

}

function DeleteAccountModal({
  onClose,
}:{
  onClose:()=>void;
}){


const [loading,setLoading] = useState(false);

const [error,setError] = useState("");



async function handleDelete(){

try{

setLoading(true);

setError("");

await deleteAccount();

window.location.href="/login";


}catch(err){

setError(
err instanceof Error
? err.message
: "Failed to delete account"
);

}
finally{

setLoading(false);

}

}



return (

<div
className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/50
backdrop-blur-sm
px-5
"
>


<div
className="
w-full
max-w-md
rounded-3xl
border
border-zinc-200
bg-white
p-6
shadow-2xl
dark:border-zinc-800
dark:bg-zinc-900
"
>


<h2
className="
text-xl
font-bold
text-zinc-900
dark:text-white
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
This will permanently remove your account,
profile and progress. This action cannot be reversed.
</p>



{error && (

<div
className="
mt-4
rounded-xl
bg-red-50
px-4
py-3
text-sm
text-red-600
"
>
{error}
</div>

)}



<div
className="
mt-6
flex
justify-end
gap-3
"
>


<button
onClick={onClose}
disabled={loading}
className="
rounded-xl
border
border-zinc-200
px-4
py-2
text-sm
dark:border-zinc-700
"
>
Cancel
</button>



<button
onClick={handleDelete}
disabled={loading}
className="
rounded-xl
bg-red-500
px-4
py-2
text-sm
font-semibold
text-white
disabled:opacity-50
"
>
{
loading
?
"Deleting..."
:
"Delete Forever"
}
</button>


</div>


</div>


</div>

);

}