export default function LoginPage() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-xl border bg-white p-6">
      <h1 className="text-xl font-semibold">Вхід</h1>
      <p className="mt-2 text-sm text-slate-600">
        Форми логіна/реєстрації немає. Тут буде Google sign-in.
      </p>

      <button className="mt-5 w-full rounded-md bg-brand-navy px-4 py-2 text-white">
        Увійти через Google
      </button>
    </div>
  );
}
