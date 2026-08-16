"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;

  defaultValues?: {
    displayName: string;
    githubUsername?: string;
    leetcodeUsername?: string;
    experienceLevel:
      | "BEGINNER"
      | "INTERMEDIATE"
      | "ADVANCED";
  };
}

export default function EditProfileDialog({
  open,
  onClose,
  defaultValues,
}: Props) {
  const [form, setForm] = useState({
    displayName: defaultValues?.displayName ?? "",

    githubUsername:
      defaultValues?.githubUsername ?? "",

    leetcodeUsername:
      defaultValues?.leetcodeUsername ?? "",

    experienceLevel:
      defaultValues?.experienceLevel ??
      "BEGINNER",
  });

  function update<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleSave() {
    // TODO:
    // await updateProfile(form)

    console.log(form);

    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-6">
        <DialogPanel
          className="
            w-full
            max-w-xl
            rounded-3xl
            border
            border-zinc-200
            bg-white
            p-8
            shadow-2xl
            dark:border-zinc-800
            dark:bg-zinc-900
          "
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold">
                Edit Profile
              </DialogTitle>

              <p className="mt-2 text-sm text-zinc-500">
                Update your AlgoForge profile.
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Display Name
              </label>

              <input
                value={form.displayName}
                onChange={(e) =>
                  update(
                    "displayName",
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-300
                  bg-transparent
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-orange-500
                  dark:border-zinc-700
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                GitHub Username
              </label>

              <input
                value={form.githubUsername}
                onChange={(e) =>
                  update(
                    "githubUsername",
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-300
                  bg-transparent
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-orange-500
                  dark:border-zinc-700
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                LeetCode Username
              </label>

              <input
                value={form.leetcodeUsername}
                onChange={(e) =>
                  update(
                    "leetcodeUsername",
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-300
                  bg-transparent
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-orange-500
                  dark:border-zinc-700
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Experience
              </label>

              <select
                value={form.experienceLevel}
                onChange={(e) =>
                  update(
                    "experienceLevel",
                    e.target.value as
                      | "BEGINNER"
                      | "INTERMEDIATE"
                      | "ADVANCED"
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-300
                  bg-transparent
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-orange-500
                  dark:border-zinc-700
                "
              >
                <option value="BEGINNER">
                  Beginner
                </option>

                <option value="INTERMEDIATE">
                  Intermediate
                </option>

                <option value="ADVANCED">
                  Advanced
                </option>
              </select>
            </div>
          </div>

          <div className="mt-10 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="
                rounded-xl
                border
                border-zinc-300
                px-5
                py-3
                font-medium
                transition
                hover:bg-zinc-100
                dark:border-zinc-700
                dark:hover:bg-zinc-800
              "
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="
                rounded-xl
                bg-orange-500
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-orange-600
              "
            >
              Save Changes
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}