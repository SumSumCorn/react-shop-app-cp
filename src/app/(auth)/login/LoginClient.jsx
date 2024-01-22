'use client';
import { useState } from 'react';
import Image from 'next/image';
import LogoPath from '@/assets/colorful.svg';
import { useRouter } from 'next/navigation';

import styles from './Auth.module.scss';
import Loader from '@/components/loader/Loader';

const LoginClient = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push('/');
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signWithGoogle = () => {};

  return (
    <>
      <Loader />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt='logo' />
          </h1>

          <form onSubmit={loginUser} className={styles.form}>
            {/* input */}
            <div className={styles.group}>{/* 자동로그인 비밀번호수정 */}</div>

            <div className={styles.buttonGroup}>
              {/* 버튼 */}
              <div>{/* 버튼 */}</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;
