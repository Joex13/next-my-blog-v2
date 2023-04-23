import { HomeLink, HomeHeading } from '@/components/Feature';

export default function Home() {
  return (
    <div className="text-center">
      <HomeHeading>THIS IS HOME</HomeHeading>
      <HomeLink href="/blog/1">記事一覧へ</HomeLink>
    </div>
  );
}
