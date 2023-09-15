<template>
  <div>
    <section class="bg-white py-8 lg:py-16">
      <div class="max-w-2xl mx-auto px-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900">
            Комментарии (20)
          </h2>
        </div>
        <form class="mb-6">
          <div class="mb-4 w-full bg-gray-10 rounded-lg border border-gray-200">
            <div class="py-2 px-4 bg-gray-10 rounded-t-lg">
              <label for="comment" class="sr-only">Your comment</label>
              <textarea
                id="comment"
                rows="6"
                class="px-0 w-full text-sm text-gray-900 bg-gray-10 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div
              class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600"
            >
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Отправить
              </button>
              <div class="flex pl-0 space-x-1 sm:pl-2">Оценка в баллах</div>
            </div>
          </div>
        </form>

        <!-- Комментарии -->
        <article
          class="p-6 mb-6 text-base bg-gray-10 border rounded-lg dark:bg-gray-700"
        >
          <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
              <p
                class="inline-flex gap-2 items-center mr-3 text-sm text-gray-900 dark:text-white"
              >
                <span
                  class="flex items-center justify-center text-black text-lg border rounded-full w-6 h-6"
                >
                  <!-- {{ Array.from(authStore.user!.name)[0] }} -->
                  A
                </span>
                <span> Антон Павлов </span>
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022"
                  >2023-04-06</time
                >
              </p>
            </div>
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-10 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              type="button"
            >
              Delete
              <span class="sr-only">Comment settings</span>
            </button>
          </footer>
          <p class="text-gray-500 dark:text-gray-400">
            Очень интересная услуга!
          </p>
          <div class="flex items-center mt-4 space-x-4">
            <button
              type="button"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              Оценка рейтинг
            </button>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
