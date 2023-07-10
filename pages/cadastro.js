import styles from '../styles/Login.module.css'
import LoginCard from '../src/components/loginCard/loginCard'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

export default function CadastroPage() {
    return (
        <div className={styles.background}>
            <LoginCard title="Cadastre sua conta">
                <form className={styles.form}>
                    <Input type="text" placeholder="Seu nome" />
                    <Input type="email" placeholder="Cadastre seu email" />
                    <Input type="password" placeholder="Sua senha" />
                    <Button>Cadastrar</Button>
                    <Link href="/login">Já possui cadastro?</Link>
                </form>
            </LoginCard>
        </div>
    )
}