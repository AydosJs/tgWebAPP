export default function Height() {
  return (
    <div className="flex flex-col justify-between h-full pb-12">
      <div className="flex flex-col items-center space-y-10">
        <div className="p-3 border-2 rounded-full w-fit" >
          <div className="p-10 rounded-full bg-primary-900 w-fit">
            <svg width="61" height="61" viewBox="0 0 43 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 29.0209C19.5385 29.0209 17.6573 28.2417 16.2703 26.8547C14.8833 25.4677 14.1041 23.5866 14.1041 21.6251C14.1041 19.6636 14.8833 17.7824 16.2703 16.3954C17.6573 15.0085 19.5385 14.2292 21.5 14.2292C23.4615 14.2292 25.3426 15.0085 26.7296 16.3954C28.1166 17.7824 28.8958 19.6636 28.8958 21.6251C28.8958 22.5963 28.7045 23.558 28.3328 24.4553C27.9611 25.3526 27.4164 26.168 26.7296 26.8547C26.0428 27.5415 25.2275 28.0863 24.3302 28.4579C23.4329 28.8296 22.4712 29.0209 21.5 29.0209ZM21.5 0.916748C16.0078 0.916748 10.7405 3.09851 6.85696 6.98208C2.97339 10.8656 0.791626 16.1329 0.791626 21.6251C0.791626 37.1563 21.5 60.0834 21.5 60.0834C21.5 60.0834 42.2083 37.1563 42.2083 21.6251C42.2083 16.1329 40.0265 10.8656 36.143 6.98208C32.2594 3.09851 26.9922 0.916748 21.5 0.916748Z" fill="white" />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold ">Bo'yingiz</h1>
        </div>
        <form className="w-full">
          <div className="flex items-center py-2 border-b">
            <input className="w-full px-2 py-1 mr-3 leading-tight bg-transparent border-none appearance-none focus:outline-none" type="text" placeholder="sm" />
            <button className="p-2 border rounded-lg" type="button">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.0625 1.0625L8.9375 8.9375" stroke="#AF12FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.0625 8.9375L8.9375 1.0625" stroke="#AF12FF" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm text-left text-red-500">
            *Xato! Bo'yingizni to'g'ri kiriting.
          </p>
        </form>

      </div>
      <div className="w-full">
        <button className="w-full px-4 py-4 font-bold text-white rounded-3xl bg-primary-900 ">
          Tasdiqlash
        </button>
      </div>
    </div>
  )
}