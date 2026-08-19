const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";


async function handleResponse<T>(
  response: Response,
): Promise<T> {

  const data = await response
    .json()
    .catch(() => ({}));


  if (!response.ok) {
    throw new Error(
      typeof data.message === "string"
        ? data.message
        : "Something went wrong. Please try again.",
    );
  }


  return data as T;
}


/* =========================
      Types
========================= */


export interface NotificationPreferences {

  emailEnabled:boolean;

  inAppEnabled:boolean;

  revisionNotification:boolean;

  roadmapNotification:boolean;

  dailyGoalNotification:boolean;

  weeklyReportNotification:boolean;

  recommendationNotification:boolean;

  paymentNotification:boolean;

  marketingNotification:boolean;

  quietHoursStart:number | null;

  quietHoursEnd:number | null;

}


export interface AccountSettings {

  email:string;

  isEmailVerified:boolean;

}


export interface SettingsResponse {

  account:AccountSettings;

  notifications:NotificationPreferences;

}


export interface UpdateNotificationPreferencesInput {

  emailEnabled?:boolean;

  inAppEnabled?:boolean;

  revisionNotification?:boolean;

  roadmapNotification?:boolean;

  dailyGoalNotification?:boolean;

  weeklyReportNotification?:boolean;

  recommendationNotification?:boolean;

  paymentNotification?:boolean;

  marketingNotification?:boolean;

  quietHoursStart?:number|null;

  quietHoursEnd?:number|null;

}



/* =========================
      Get Settings
========================= */


export async function getSettings()
:Promise<SettingsResponse>{


  const response = await fetch(
    `${API_URL}/api/settings`,
    {
      method:"GET",
      credentials:"include",
    },
  );


  const result =
    await handleResponse<{
      success:boolean;
      data:SettingsResponse;
    }>(response);


  return result.data;

}



/* =========================
      Update Notifications
========================= */


export async function updateNotificationPreferences(
  data:UpdateNotificationPreferencesInput,
):Promise<NotificationPreferences>{


  const response = await fetch(
    `${API_URL}/api/settings/notifications`,
    {
      method:"PATCH",

      credentials:"include",

      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify(data),
    },
  );


  const result =
    await handleResponse<{
      success:boolean;
      data:NotificationPreferences;
    }>(response);


  return result.data;

}



/* =========================
      Delete Account
========================= */


export async function deleteAccount():Promise<{
  message:string;
}> {


  const response = await fetch(
    `${API_URL}/api/settings/account`,
    {
      method:"DELETE",

      credentials:"include",

      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify({
        confirmation:"DELETE",
      }),
    },
  );


  return handleResponse<{
    success:boolean;
    message:string;
  }>(response);

}



/* =========================
      Change Password
========================= */


export async function changePassword(data:{
  currentPassword:string;
  newPassword:string;
}):Promise<{
  message:string;
}> {


  const response = await fetch(
    `${API_URL}/api/settings/password`,
    {
      method:"PATCH",

      credentials:"include",

      headers:{
        "Content-Type":"application/json",
      },

      body:JSON.stringify(data),
    },
  );


  return handleResponse<{
    success:boolean;
    message:string;
  }>(response);

}