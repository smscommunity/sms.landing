import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import HomepageButton from '../components/HomepageButton';

interface ILInfo {
    file: string;
    player: string;
    level: string;
    baseUrl: string;
}

export default function Home() {
    // const startHere = [
    // ];
    // const [startHereIndex, setStartHereIndex] = React.useState(
    //     Math.floor(Math.random() * startHere.length)
    // );

    // const randomizeStartHere = React.useCallback(() => {
    //     setStartHereIndex(Math.floor(Math.random() * startHere.length));
    // }, []);

    const bgILs: ILInfo[] = [
        {
            file: './bianco_4_rimato.mp4',
            player: 'Rimato13',
            level: 'Bianco 4',
            baseUrl: 'https://www.youtube.com/watch?v=jEwYvHAaFr0',
        },
        {
            file: './bianco_6r_trey.mp4',
            player: 'AverageTrey',
            level: 'Bianco 6 No-Hover',
            baseUrl: 'https://www.youtube.com/watch?v=bFplU7J2Png',
        },
        {
            file: './ricco_1_diddeh.mp4',
            player: 'nindiddeh',
            level: 'Ricco 1',
            baseUrl: 'https://www.youtube.com/watch?v=KFESDl87V_w',
        },
        {
            file: './pinna_3_jer.mp4',
            player: 'Jer',
            level: 'Pinna 3',
            baseUrl: 'https://www.youtube.com/watch?v=kBIHINSXADo',
        },
        {
            file: './sirena_8_despin.mp4',
            player: 'Despin',
            level: 'Sirena 8',
            baseUrl: 'https://www.youtube.com/watch?v=cT-zaqotNqw'
        },
        {
            file: './noki_6s_jpep.mp4',
            player: 'jpep',
            level: 'Noki 6 Secret',
            baseUrl: 'https://www.youtube.com/watch?v=Y3ZF3DXhJ8I'
        }
    ]

    const randomILIndex = Math.floor(Math.random() * bgILs.length)
    const selectedIl = bgILs[randomILIndex];

    return (
        <div>
            <Head>
                <title>Super Mario Sunshine Speedrunning Community</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <div className="fixed min-h-full -z-10 min-w-full bg-tile-background bg-repeat">
                <video
                    className="fixed min-h-full min-w-full object-cover object-center h-full w-full"
                    autoPlay
                    muted
                    loop
                    poster="/fullbackground.png"
                    id="bgvideo">
                    <source src={selectedIl.file} type="video/mp4" />
                </video>
                <div className="fixed min-h-full min-w-full bg-black opacity-60" />
            </div>
            <div>
                <main className={'min-h-screen flex flex-col justify-center text-center z-20 m:w-3/4 m-auto py-16 overflow-y-auto'}>
                    <div>
                        <div className="h-auto text-5xl font-bold text-white mb-10">
                          Super Mario Sunshine Speedrunning Community
                        </div>
                        {/* <div
                            onClick={randomizeStartHere}
                            className="flex flex-row justify-center text-4xl font-bold text-white my-5 subheadAnimation">
                            <div className="text-yellow-300 text-right w-1/2 mr-2">
                                {startHere[startHereIndex][0]}
                            </div>
                            <div className="text-blue-400 text-left w-1/2 ml-2">
                                {startHere[startHereIndex][1]}
                            </div>
                        </div> */}
                    </div>
                    <div className="flex flex-wrap flex-row justify-center max-w-5xl mx-auto">
                      <HomepageButton href="https://speedrun.com/sms" label="Leaderboard" />
                      <HomepageButton href="https://discord.gg/jX38aXCv9y" label="Discord Server" />
                      <HomepageButton href="https://twitch.tv/sunshinecommunity" label="Twitch" />
                      <HomepageButton href="https://sunmar.io/il" label="IL Spreadsheet" />
                      <HomepageButton href="https://ilview.sunmar.io" label="IL Leaderboard Viewer" />
                      <HomepageButton href="https://sms.bingo" label="Bingo" />
                      <HomepageButton href="https://twitter.com/smscommunity" label="Twitter" />
                      <HomepageButton href="https://www.youtube.com/user/SMSCommunity" label="Youtube" />
                      <HomepageButton href="https://smscommunity.github.io/sms-guide/tutorials" label="Tutorials and Guides" />
                        {/* <Link href="https://docs.google.com/spreadsheets/d/1gN6xyfIoaDTwf04Oz_Yvf5AKNwhfTPi4pA0Bx4_ebMk/edit#gid=0">
                            <div className="cursor-pointer transition-colors bg-yellow-300 hover:bg-yellow-500 rounded-md text-black font-bold m-2 p-2 text-2xl w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                                Playoff Bracket
                            </div>
                        </Link> */}
                    </div>
                    <div className='bottom-0 left-0 fixed float-left font-bold text-white text-x p-3'>
                        <Link href={selectedIl.baseUrl}>{"🎬" + selectedIl.player + " - " + selectedIl.level}</Link>
                    </div>
                </main>
            </div>
        </div>
    );
}