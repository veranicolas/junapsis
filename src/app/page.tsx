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
      img:'/zunda.jpg'
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
