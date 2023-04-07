<template>
  <div
    class="overflow-y-auto overflow-x-hidden justify-center items-center w-full"
  >
    <div class="relative p-4 w-full h-full md:h-auto">
      <form
        action="#"
        class="relative bg-white rounded-lg shadow dark:bg-gray-800"
      >
        <div
          class="flex justify-between items-center py-4 px-4 rounded-t sm:px-5"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Карта рекомендаций
          </h3>
        </div>
        <!-- Body -->
        <div
          id="accordion-collapse-body-1"
          class=""
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-4 border-gray-200 sm:p-5 dark:border-gray-700">
            <!-- Inputs -->
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="file_input"
                  >Upload avatar</label
                >
                <div class="items-center w-full sm:flex">
                  <img
                    class="mb-4 w-20 h-20 rounded-full sm:mr-4 sm:mb-0"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                    alt="Helene avatar"
                  />
                  <div class="w-full">
                    <input
                      id="file_input"
                      class="w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="file_input_help"
                      type="file"
                    />
                    <p
                      id="file_input_help"
                      class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="first-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >First Name</label
                >
                <input
                  id="first-name"
                  type="text"
                  name="first-name"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="John"
                  required=""
                />
              </div>
              <div>
                <label
                  for="last-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Last Name</label
                >
                <input
                  id="last-name"
                  type="text"
                  name="last-name"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Doe"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="user-permissions"
                  class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Permissions
                  <button
                    type="button"
                    data-tooltip-target="tooltip-dark"
                    data-tooltip-style="dark"
                    class="ml-1"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">User permission details</span>
                  </button>
                  <div
                    id="tooltip-dark"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    User permissions, part of the overall user management
                    process, are access granted to users to specific resources
                    such as files, applications, networks, or devices.
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </label>
                <select
                  id="user-permissions"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Operational</option>
                  <option value="NO">Non Operational</option>
                </select>
              </div>
              <div>
                <label
                  for="job-title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Job Title</label
                >
                <input
                  id="job-title"
                  type="text"
                  name="job-title"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="e.g React Native Developer"
                  required=""
                />
              </div>
              <div>
                <label
                  for="languages"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Languages</label
                >
                <input
                  id="languages"
                  type="text"
                  name="languages"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="e.g English"
                  required=""
                />
              </div>
              <div>
                <label
                  for="account"
                  class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Account
                  <button
                    type="button"
                    data-tooltip-target="tooltip-account"
                    data-tooltip-style="dark"
                    class="ml-1"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Account details</span>
                  </button>
                  <div
                    id="tooltip-account"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Choose here your account type.
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </label>
                <select
                  id="account"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Choose account type</option>
                  <option value="DF">Default Account</option>
                  <option value="PRO">PRO Account</option>
                </select>
              </div>
              <div>
                <label
                  for="user-role"
                  class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Role
                  <button
                    type="button"
                    data-tooltip-target="tooltip-user-role"
                    data-tooltip-style="dark"
                    class="ml-1"
                  >
                    <svg
                      aria-hidden="true"
                      class="ml-1 w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">User role details</span>
                  </button>
                  <div
                    id="tooltip-user-role"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Flowbite provides 7 predefined roles: Owner, Admin, Editor,
                    Contributor and Viewer. Assign the most suitable role to
                    each user, giving them the most appropriate level of
                    control.
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </label>
                <select
                  id="user-role"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Owner</option>
                  <option value="AD">Admin</option>
                  <option value="ED">Editor</option>
                  <option value="CO">Contributor</option>
                  <option value="VI">Viewer</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email-status"
                  class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Status
                  <button
                    type="button"
                    data-tooltip-target="tooltip-email-status"
                    data-tooltip-style="dark"
                    class="ml-1"
                  >
                    <svg
                      aria-hidden="true"
                      class="ml-1 w-4 h-4 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Email status details</span>
                  </button>
                  <div
                    id="tooltip-email-status"
                    role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    As an administrator, you can view the status of a user's
                    email. The status indicates whether a user's email is
                    verified or not.
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </label>
                <select
                  id="email-status"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Not verified</option>
                  <option value="VE">Verified</option>
                </select>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="•••••••••"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Confirm password</label
                >
                <input
                  id="confirm-password"
                  type="password"
                  name="confirm-password"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="•••••••••"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="role"
                  >Assign Role</label
                >
                <div class="flex space-x-4">
                  <div class="flex items-center">
                    <input
                      id="inline-checkbox"
                      type="checkbox"
                      value=""
                      name="role"
                      class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Administrator</label
                    >
                  </div>
                  <div class="flex items-center">
                    <input
                      id="inline-2-checkbox"
                      type="checkbox"
                      value=""
                      name="role"
                      class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-2-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Member</label
                    >
                  </div>
                  <div class="flex items-center">
                    <input
                      id="inline-checked-checkbox"
                      checked=""
                      type="checkbox"
                      value=""
                      name="role"
                      class="w-4 h-4 bg-gray-100 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-checked-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Viewer</label
                    >
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </div>
                <label
                  for="status"
                  class="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    id="status"
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"
                  ></div>
                  <span
                    class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300"
                    >Inactive</span
                  >
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 border-gray-200 sm:p-5 dark:border-gray-700">
          <!-- Inputs -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="col-span-2">
              <label
                for="skills"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Skills</label
              >
              <input
                id="skills"
                type="text"
                name="skills"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="e.g Figma, HTML, Javascript"
                required=""
              />
            </div>
            <div class="col-span-2">
              <label
                for="phone-number"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Phone Number</label
              >
              <input
                id="phone-number"
                type="number"
                name="phone-number"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Add a phone number"
                required=""
              />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="linkedin"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Linkedin URL</label
              >
              <input
                id="linkedin"
                type="url"
                name="linkedin"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Linkedin URL"
                required=""
              />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="facebook"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Facebook</label
              >
              <input
                id="facebook"
                type="url"
                name="facebook"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Facebook Profile"
                required=""
              />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="instagram"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Instagram</label
              >
              <input
                id="instagram"
                type="url"
                name="instagram"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Instagram Username"
                required=""
              />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="personal-website"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Personal Website</label
              >
              <input
                id="personal-website"
                type="url"
                name="personal-website"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="www.example.com"
                required=""
              />
            </div>
            <div class="col-span-2">
              <label
                for="country"
                class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Country</label
              >
              <select
                id="country"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option selected="">United States</option>
                <option value="NO">Australia</option>
                <option value="NO">United Kingdom</option>
                <option value="NO">Italy</option>
                <option value="NO">Germany</option>
                <option value="NO">Spain</option>
                <option value="NO">France</option>
                <option value="NO">Canada</option>
              </select>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Address</label
              >
              <input
                id="adress"
                type="text"
                name="address"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your Location"
                required=""
              />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="timezone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Timezone</label
              >
              <input
                id="timezone"
                type="text"
                name="timezone"
                class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="e.g GMT -6"
                required=""
              />
            </div>
          </div>
        </div>
        <!-- bottom -->
        <div class="flex items-center py-4 px-4 space-x-4 sm:px-5">
          <button
            type="submit"
            class="w-full text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              class="-ml-1 w-5 h-5 sm:mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add new user
          </button>
          <button
            data-modal-toggle="createUserAccordionModal"
            type="button"
            class="w-full inline-flex justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Discard
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>
