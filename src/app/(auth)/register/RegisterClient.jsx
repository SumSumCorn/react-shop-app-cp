'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoPath from '@/assets/colorful.svg';
import styles from '../login/Auth.module.scss';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import Loader from '@/components/loader/Loader';
import Divider from '@/components/divider/Divider';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
const RegisterClient = () => {
  const [email, setEmail] = useState('');
  const [cPassword, setCPassword] = useState(0);
  const [password, setPassword] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      return toast.error('비밀번호가 일치하지 않습니다.');
    }

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCreadential) => {
        const user = userCreadential.user;
        setIsLoading(false);
        toast.success('등록성공');
        router.push('/login');
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt='logo' />
          </h1>

          <form onSubmit={registerUser} className={styles.form}>
            {/* input */}
            <Input
              email
              icon='letter'
              id='email'
              name='email'
              label='이메일'
              placeholder='아이디(이메일)'
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon='lock'
              id='password'
              name='password'
              label='비밀번호'
              placeholder='비밀번호'
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              password
              icon='lock'
              id='cpassword'
              name='cpassword'
              label='비밀번호 확인'
              placeholder='비밀번호 확인'
              className={styles.control}
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />

            <div className={styles.buttonGroup}>
              {/* 버튼 */}
              <Button type='submit' width='100%'>
                회원가입
              </Button>
              <Divider />
              <Button width='100%' secondary>
                <Link href={'/login'}>로그인</Link>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterClient;
