import { HeroText } from '@glitchify/ui';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Page: NextPage = () => {
  const { push } = useRouter();

  const onHeroClick = () => {
    push('/me');
  };
  return (
    <HeroText label={'le_twix'} subTitle={'[WIP]'} onClick={onHeroClick} />
  );
};

export default Page;
