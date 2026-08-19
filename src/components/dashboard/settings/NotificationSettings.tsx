"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Mail,
  Clock,
  Flame,
  Route,
  Target,
  BarChart3,
  Sparkles,
  CreditCard,
  Megaphone,
} from "lucide-react";

import {
  getSettings,
  updateNotificationPreferences,
  NotificationPreferences,
} from "@/src/lib/api/settings";


const notificationItems = [
  {
    key: "revisionNotification",
    title: "Revision Notifications",
    description: "Get reminders for your scheduled revisions.",
    icon: Bell,
  },

  {
    key: "roadmapNotification",
    title: "Roadmap Updates",
    description: "Receive updates about your learning roadmap.",
    icon: Route,
  },

  {
    key: "dailyGoalNotification",
    title: "Daily Goal Reminder",
    description: "Stay consistent with your daily goals.",
    icon: Target,
  },

  {
    key: "weeklyReportNotification",
    title: "Weekly Reports",
    description: "Receive weekly progress summaries.",
    icon: BarChart3,
  },

  {
    key: "recommendationNotification",
    title: "AI Recommendations",
    description: "Get personalized coding recommendations.",
    icon: Sparkles,
  },

  {
    key: "paymentNotification",
    title: "Payment Notifications",
    description: "Updates about subscriptions and payments.",
    icon: CreditCard,
  },

  {
    key: "marketingNotification",
    title: "Marketing Emails",
    description: "Receive product updates and offers.",
    icon: Megaphone,
  },
];


function Toggle({
  enabled,
  onChange,
}:{
  enabled:boolean;
  onChange:()=>void;
}){

  return (
    <button
      onClick={onChange}
      className={`
        relative
        h-6
        w-11
        rounded-full
        transition
        ${
          enabled
          ? "bg-orange-500"
          : "bg-zinc-300 dark:bg-zinc-700"
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
          transition-all
          ${
            enabled
            ? "left-6"
            : "left-1"
          }
        `}
      />

    </button>
  );
}



export default function NotificationSettings(){

  const [settings,setSettings] =
    useState<NotificationPreferences | null>(null);

  const [loading,setLoading] =
    useState(true);


  async function loadSettings(){

    try{

      const data = await getSettings();

      setSettings(data.notifications);

    }finally{

      setLoading(false);

    }

  }


  useEffect(()=>{

    loadSettings();

  },[]);



  async function update(
    key:keyof NotificationPreferences,
  ){

    if(!settings)
      return;


    const value =
      !settings[key];


    setSettings({
      ...settings,
      [key]:value,
    });


    await updateNotificationPreferences({
      [key]:value,
    });

  }



  if(loading){

    return (
      <div className="
        rounded-3xl
        border
        border-black/5
        dark:border-white/5
        bg-white/80
        dark:bg-zinc-900/80
        p-6
      ">
        Loading notifications...
      </div>
    );

  }



  if(!settings)
    return null;



  return (

    <div className="space-y-6">


      {/* Channels */}

      <div
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

        <h2 className="
          text-xl
          font-semibold
          text-zinc-900
          dark:text-white
        ">
          Notification Channels
        </h2>


        <p className="
          mt-1
          text-sm
          text-zinc-500
        ">
          Choose where you want to receive notifications.
        </p>



        <div className="mt-6 space-y-5">


          <div className="flex items-center justify-between">

            <div className="flex gap-3">

              <Mail className="text-orange-500"/>

              <div>
                <h3 className="font-medium">
                  Email Notifications
                </h3>

                <p className="text-sm text-zinc-500">
                  Receive updates on email
                </p>
              </div>

            </div>


            <Toggle
              enabled={settings.emailEnabled}
              onChange={()=>
                update("emailEnabled")
              }
            />

          </div>




          <div className="flex items-center justify-between">

            <div className="flex gap-3">

              <Bell className="text-orange-500"/>

              <div>
                <h3 className="font-medium">
                  In App Notifications
                </h3>

                <p className="text-sm text-zinc-500">
                  Show notifications inside AlgoForge
                </p>
              </div>

            </div>


            <Toggle
              enabled={settings.inAppEnabled}
              onChange={()=>
                update("inAppEnabled")
              }
            />

          </div>


        </div>


      </div>




      {/* Preferences */}


      <div
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

        <h2 className="text-xl font-semibold">
          Notification Preferences
        </h2>


        <div className="mt-6 space-y-5">


        {notificationItems.map((item)=>{

          const Icon=item.icon;

          const key =
            item.key as keyof NotificationPreferences;


          return (

            <div
              key={item.key}
              className="
              flex
              items-center
              justify-between
              "
            >

              <div className="flex gap-3">

                <Icon
                  size={20}
                  className="text-orange-500"
                />

                <div>

                  <h3 className="font-medium">
                    {item.title}
                  </h3>

                  <p className="
                    text-sm
                    text-zinc-500
                  ">
                    {item.description}
                  </p>

                </div>


              </div>


              <Toggle
                enabled={settings[key] as boolean}
                onChange={()=>
                  update(key)
                }
              />

            </div>

          );

        })}


        </div>


      </div>




      {/* Quiet Hours */}


      <div
        className="
        rounded-3xl
        border
        border-black/5
        dark:border-white/5
        bg-white/80
        dark:bg-zinc-900/80
        p-6
        "
      >

        <div className="flex gap-3">

          <Clock className="text-orange-500"/>

          <div>
            <h2 className="font-semibold">
              Quiet Hours
            </h2>

            <p className="text-sm text-zinc-500">
              Pause notifications during these hours.
            </p>
          </div>

        </div>


        <div className="mt-5 flex gap-4">


          <input
            type="number"
            placeholder="Start"
            value={settings.quietHoursStart ?? ""}
            className="
            h-11
            w-full
            rounded-xl
            border
            px-4
            dark:bg-zinc-950
            "
          />


          <input
            type="number"
            placeholder="End"
            value={settings.quietHoursEnd ?? ""}
            className="
            h-11
            w-full
            rounded-xl
            border
            px-4
            dark:bg-zinc-950
            "
          />


        </div>


      </div>



    </div>

  );
}