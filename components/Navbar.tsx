"use client"
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link'

const languages = [
    { value: "en", label: "English" },
    { value: "ru", label: "Русский" },
    { value: "tg", label: "Тоҷикӣ" },
  ];
const Navbar = () => {
  const  router = useRouter()
  const locale = useLocale();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, {
      locale: newLocale,
    });
  };
  return (
    <div className='flex gap-10 p-5'>
       <select
      value={locale}
      onChange={(e) => handleChange(e.target.value)}
    >
      {languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
        <Link className=' border-dashed border p-2 rounded-xl' href={"/"}>Home</Link>

        <Link className=' border-dashed border p-2 rounded-xl' href={"/about"}>About</Link>
        <Link className=' border-dashed border p-2 rounded-xl' href={"/contact"}>Contact</Link>
        <Link className=' border-dashed border p-2 rounded-xl' href={"/login"}>Login</Link>
    </div>
  )
}

export default Navbar