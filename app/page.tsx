import styles from './page.module.css'
import {fetchInvoicesPages} from "@/app/lib/data";

export default async function Home() {
  const totalPages = await fetchInvoicesPages('');
  return (
    <main className={styles.main}>
      Boxan - User Portfolio Landing Page
      <div>
        Test DB Connection - {totalPages}
      </div>
    </main>
  )
}
