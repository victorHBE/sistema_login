import styles from '../styles/Login.module.css'
import LoginCard from '../src/components/loginCard/loginCard'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <div className={styles.background}>
            <LoginCard title="Entre na sua conta">
                <form className={styles.form}>
                    <Input type="email" placeholder="Digite seu email" />
                    <Input type="password" placeholder="Digite sua senha" />
                    <Button>Entrar</Button>
                    <Link href="/cadastro">Ainda não possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}