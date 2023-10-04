import Layout from "@/components/layout/layout"
import styles from './page.module.css'
import Card from "@/components/card/card";

export default function Home() {

  const junapseros = [
    {
      name: 'Tosti',
      img: 'https://lh3.googleusercontent.com/pw/ADCreHfrPAFBHaCPpWI6dt7I4Daid7T4Db41XchZ0HxIGex7vW2ocHGsxLKHVaU6t1dpOeoo9oulIsmyy3d4FbvA7tWmklWcFYZQpi3lrVusunZveS2F4chFm4edu9Q8-3ix4lVtrsf6qye_uOostTdxGZTy=w1392-h923-s-no?authuser=0'
    },
    {
      name:'Berni',
      img:'https://lh3.googleusercontent.com/pw/ADCreHddPleFYwSNHgAbPAGxuFvKui-Myip0R90Fox3_1FgIiIXPULDUbrH2JMrRfp6Fhe8LxP3YEFMwCTeIBR5TeEyxpedZimPKdd-W_34KG_pk1e5Ol0uMIXwWv4AITHm7JZRuVvPL4N6kLzE8tz9mUHvsbw=w1920-h887-s-no?authuser=0'
    },
    {
      name:'Vera',
      img:'https://lh3.googleusercontent.com/pw/ADCreHe6y3Z6QJm_cT3NYZoAWdfwzseP9lCtOgz3tY-dSdoQ7trvLj-vFrYIjF8jhR4U6Qm0zO3Hy7yT83LEbpq-rwpCkm33mnCMThXXIjCK7dKO8gN2SFFzFtfGz9O0SHHvfv4LirC3yyMFAK_r_rV24rw55g=w426-h923-s-no?authuser=0'
     }, 
     {
      name:'Napo',
      img:'https://lh3.googleusercontent.com/pw/ADCreHeWIMgt05hPC-4M8eklNQi9paOLpLTTWBd6iAIVF_x44H5qgTczhy8UGMtjYuYdFpmPw9RIgW-dqDdJbs9J57tbev22X8S6txR_MO6nIBZbB7h98HqzXUI8-c2egnnRqvVVKnbbbAPGHayRxfP-7ANGPg=w1641-h923-s-no?authuser=0'
     }, 
     {
      name:'Gushi',
      img:'https://lh3.googleusercontent.com/pw/ADCreHfRsNddptMKUjcK_cCyOcb1M-vlQ9ZHumJeCtaiCBp7-UdIkozdVt1mjhkAp2JXYmyO5GwD6QYLXRKci-a61YjqoFgKa04gfkjF9Gbf62qIaSolg5VvTdiafQ-y2SNPHmf1l3uCuZze4R6XTVaSyBiVtg=w1385-h923-s-no?authuser=0'
     }, 
     {
      name:'Zunda',
      img:'https://lh3.googleusercontent.com/pw/ADCreHc_LAWOlNJFAn_pap5g-G62ZkB6NTeErtl6T6FM4xGV3wqS2mu-GXhLMaQvfe0Airx6997lei6zRPa80W3EqYxccq2SB3tREYuMGBFFP9EKn7-PF80J2zOBTECQvPQ5ZXcfkKBMuoSS-V9JIZuZ3aKV_N6hTqFwYaoTgI12jzTO3Z-B_EpdAls2H6qGdLsGMj5qp_Sare250gGLFfZwi9xhyxC4jluO8cQQSOboKHJWECyTe5-m7-GglCSLH1CQrn0w8czAQPFXnzqT5msFBBOTCpBERITsi7JzkpTGTtcYueAKJqLM_cvNKwGhEo3LN8LmnDhPCFkP6901CIhqYOTcYISzmXYB_jNf2P4XNgMSnrCkdoTqF83mkKtBhdtNf4taGN9XavEhEw0LsEsdbfd684L14zGy7XLngFAXOMYN3srH3H2kTzmgRNzoTFldBCrasdoTRK4E9iDX0A5CWHjBXyaRLOJ7EG4-3mUbuXwTqPBGjgQit4CYAoo5K7A4MHRbDNDee6ph_XrLrt-uk0bH9gdGZLH2cKR8YxJVfrPkV-WuTTllUvtgmlMlXHpY6o8CNPFu-htXM7VPghyKKdYcP4yURB10e2vcVDZl8rXnixm5mOATbhen-XkG7OXFBbnjYW8mSh4bOewVbQDvg7V2K3p1VWJAidDbJ-xOgOaj0xcrMzjz1GWGq2jutzJliZEkMORQ2xQmsTJ-sTNhkoAFrZ0NDFaM7_SkV3tjasu9HLMR_Ac9jyxoSNncNdH2Y4zZjQupl4x2uIO1-NtGiCLO2doOpqNoyTSKUhBSCn4PxnZMLGxzTyk28rUESiw8jAr-dnz8p6aVDtVa4nckcUNXnJwiSGnPG2_qDw3sK_k07Xmqfa20_6FR0fiHt19FOy-CMNIs2x6BBf5TL14IL79u81O5eFjvLwRZrzXzFlR642GK_6PaqAoeId-SLMeLv9CvPpQJZt3gWqVhoQEtRAAfJuMzXQE=w467-h464-s-no?authuser=0'
     }, 
     {
      name:'Juampi',
      img:'https://lh3.googleusercontent.com/pw/ADCreHfNOzrKbV1KSCGLouNJWZWWPJvtv07I6_OrygfudWsc1DjYqeM7dENF_TEOgRtS6VZoPjBL_LK-bdnROMGatPGj59Sb1-tmZz1ywnreywlr8bm9kGbCgLCCu13IW3E_DlMDSp_tsThDSuNuB5LCSIlcEw=w1639-h923-s-no?authuser=0'
     },  
     {
      name:'Burro',
      img:'https://lh3.googleusercontent.com/pw/ADCreHcX-FubZ7vkyQ6Kvl1CVn8FxJ_KR1DDLDS-t444eHbvHsUQ1l5mjHNmUICRaXCMWhIG3qEkmdXvYaWkQvqJUB3YBhuyegvMnlz7hEouyO67GwTnh87s9HgSCo7czQll9a0rK0-kxWIeGNxeNr_3W6IA_Q=w692-h923-s-no?authuser=0'
     }, 
  ];

  return (
    <Layout>
      <main className={styles.main}>
        <p className='text-4xl'>Junapsis</p>
        <div className={styles.miembros}> 
          <p className="text-2xl">miembros de junapsis</p>
          <div className="flex flex-wrap gap-3">
            {
              junapseros.map((pana, index)=>{
                return <Card name={pana.name} img={pana.img} key={index}/>
              })
            }
          </div>
        </div>
      </main>
    </Layout>
  )
}
