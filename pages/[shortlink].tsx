import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

interface ShortLinkProps {
    href: string;
}

export default function ShortLink(props: ShortLinkProps) {
    return (
        <div>
            <Head>
                <meta httpEquiv="refresh" content={"0;url=" + props.href} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                If you are not redirected, click <a href={props.href}>here.</a>
            </div>
        </div>
    );
}

// To add a shortlink.
// 1. Edit shortLinks to contain your new short link slug.
// 2. Update getHref to add to the case/switch the new link you want to shortlink to.
// 3. You are done!
const shortLinks = ['discord', 'il', 'wiki', 'twitch', 'yt'] as const;
type ShortLinks = typeof shortLinks[number];

export const getStaticProps: GetStaticProps = ({ params }) => {
    const path = params?.shortlink as ShortLinks;
    return {
        props: {
            href: getHref(path)
        }
    }
}

function getHref(shortLinkTarget: ShortLinks): string {
    switch (shortLinkTarget) {
        case 'discord':
            return 'https://discord.gg/jX38aXCv9y';
        case 'il':
            return 'https://docs.google.com/spreadsheets/d/12wDUXjLqmcUuWSEXWc1fHNJc24KlfyCh0pvibZYEQM0/edit#gid=0'
        case 'wiki':
            return 'https://smscommunity.github.io/sms-guide/'        
        case 'twitch':
            return 'https://www.twitch.tv/sunshinecommunity'
        case 'yt'
            return 'https://www.youtube.com/@SMSCommunity'
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: shortLinks.map(shortlinkName => ({
            params: {
                shortlink: shortlinkName,
            }
        })),
        fallback: false,
    }
}
