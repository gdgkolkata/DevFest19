import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team_members = [
    {
      name: 'Rivu Chakrabarty',
      designation: 'Co-organizer',
      twitter: 'https://twitter.com/rivuchakraborty',
      linkedin: 'https://www.linkedin.com/in/rivuchk/',
      profileImage: 'RivuC.jpeg'
    },
    {
      name: 'Manisha Biswas',
      designation: 'Organizer',
      twitter: 'https://twitter.com/manisha_biswas7?lang=en',
      linkedin: 'https://www.linkedin.com/in/manisha-biswas-2a3228114/',
      profileImage: 'ManishaB.jpeg'
    },
    {
      name: 'Tanmay Ghosh',
      designation: 'Conceptualizer',
      twitter: '#',
      linkedin: '#',
      profileImage: 'TanmayG.jpeg'
    },
    {
      name: 'Koushik Pal',
      designation: 'Founder- GDG Kolkata',
      twitter: 'https://twitter.com/hello2pal',
      linkedin: 'https://www.linkedin.com/in/koushik-pal-06572525/',
      profileImage: 'KaushikP.jpeg'
    },
    {
      name: 'Suvankar Bose',
      designation: 'Founder- GDG Kolkata',
      twitter: 'https://twitter.com/suvankarbose',
      linkedin: 'https://www.linkedin.com/in/suvankar-bose-a6602937/',
      profileImage: 'SuvankarB.jpeg'
    },
    {
      name: 'Indranil Dutta',
      designation: 'Event Organizer',
      twitter: 'https://www.twitter.com/iamindraD',
      linkedin: 'https://www.linkedin.com/in/indranil-dutta-06',
      profileImage: 'IndranilD.jpeg'
    },
    {
      name: 'Sayak Paul',
      designation: 'Event Organizer',
      twitter: 'https://twitter.com/RisingSayak',
      linkedin: 'https://www.linkedin.com/in/sayak-paul/',
      profileImage: 'SayakP.jpeg'
    },
    {
      name: 'Shuvam Manna',
      designation: 'Event Organizer',
      twitter: 'https://twitter.com/shuvam360',
      linkedin: 'https://www.linkedin.com/in/shuvam-manna/',
      profileImage: 'ShuvamM.jpeg'
    },
    {
      name: 'Anubhav Singh',
      designation: 'Event Organizer',
      twitter: 'https://twitter.com/xprilion',
      linkedin: 'https://www.linkedin.com/in/xprilion/',
      profileImage: 'AnubhavS.jpeg'
    },
    {
      name: 'Ritwik Raha',
      designation: 'Design Head',
      twitter: 'https://twitter.com/RahaRitwik',
      linkedin: 'https://www.linkedin.com/in/ritwik-raha/',
      profileImage: 'RitwikR.jpeg'
    }
  ];
  volunteers = [
    {
      name: 'Jyoti Mishra',
      email: 'jyotimishra29091997@gmail.com',
      linkedin: 'https://www.linkedin.com/in/jyoti-mishra-56a25415b',
      slack: 'https://devfest-19.slack.com/team/UKYS22PTK'
    },
    {
      name: 'Rishiraj Acharya',
      email: 'rshrjacharya@gmail.com',
      linkedin: 'www.linkedin.com/in/rishirajacharya/',
      slack: 'devfest-19.slack.com/team/UL72WQJP9'
    },
    {
      name: 'Varun Vishal',
      email: 'varunvishal10@gmail.com',
      linkedin: 'https://www.linkedin.com/in/varun-vishal/',
      slack: 'https://devfest-19.slack.com/team/UKTQYTPLK'
    },
    {
      name: 'Koustav Dhar Chowdhury',
      email: 'koustav13198@gmail.com',
      linkedin: 'https://www.linkedin.com/in/kdc13198/',
      slack: 'https://devfest-19.slack.com/team/UL7B8NXDL'
    },
    {
      name: 'Pranita Ganguly',
      email: 'pranitaganguly17@gmail.com',
      linkedin: 'https://www.linkedin.com/in/pranita-ganguly-8a1873175/',
      slack: 'https://devfest-19.slack.com/team/UL86ZDZLN'
    },
    {
      name: 'Soham Jana',
      email: 'janasoham11@gmail.com',
      linkedin: 'https://www.linkedin.com/in/soham-jana-407a27185',
      slack: 'https://devfest-19.slack.com/team/UKYTE0DQR'
    },
    {
      name: 'Vishwajeet Raj',
      email: 'vishwajeetraj11@gmail.com',
      linkedin: 'https://www.linkedin.com/in/vishwajeet-raj-41129a169',
      slack: 'https://devfest-19.slack.com/team/UL7BVUGBY'
    },
    {
      name: 'Mahak Makharia',
      email: 'makhariamahak@gmail.com',
      linkedin: 'https://www.linkedin.com/in/mahakmakharia/',
      slack: 'https://devfest-19.slack.com/team/UL57NH8DT'
    },
    {
      name: 'Ritesh Prasad Singh',
      email: 'riteshprasadsingh8@gmail.com',
      linkedin: 'linkedin.com/in/ritesh-prasad-singh-a4321b148/',
      slack: 'https://devfest-19.slack.com/team/UL7B5GUBY'
    },
    {
      name: 'MD FAZAL MUSTAFA',
      email: 'fazalmd964@gmail.com',
      linkedin: 'https://www.linkedin.com/in/md-fazal-mustafa-ba5265129/',
      slack: 'https://devfest-19.slack.com/team/UKYSCUJG1'
    },
    {
      name: 'Atisaya Jain',
      email: 'atisayajain@gmail.com',
      linkedin: 'https://www.linkedin.com/in/atisayajain/',
      slack: 'https://devfest-19.slack.com/team/UKTQE13L2'
    },
    {
      name: 'Utsav Akash Naskar',
      email: 'utsavakash123@gmail.com',
      linkedin: 'www.linkedin.com/in/utsav-akash-naskar-5207b2169',
      slack: 'https://devfest-19.slack.com/team/UKTQUPV27'
    },
    {
      name: 'Shashwat Sinha',
      email: 'shashwat3057@gmail.com',
      linkedin: 'https://www.linkedin.com/in/shashwat3057/',
      slack: 'https://devfest-19.slack.com/team/UL4P8BFEG'
    },
    {
      name: 'Anjali',
      email: 'anjali001.as@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anjali-singh-282b66170',
      slack: 'https://devfest-19.slack.com/team/UL4NG41QU'
    },
    {
      name: 'Aniket Kumar',
      email: 'aniketkumar049@gmail.com',
      linkedin: 'https://linkedin.com/in/aniketkumar049/',
      slack: 'https://devfest-19.slack.com/team/UL571AYNL/'
    },
    {
      name: 'Divya Goswami',
      email: 'divyadeepti2000@gmail.com',
      linkedin: 'https://www.linkedin.com/in/divya-goswami-1a863616b',
      slack: 'https://devfest-19.slack.com/team/UL56YCGF2'
    },
    {
      name: 'Faiz Alam',
      email: 'faiz276482@gmail.com',
      linkedin: 'www.linkedin.com/in/faiz-alam-1934bb180/',
      slack: 'https://devfest-19.slack.com/team/UL56YNKGQ'
    },
    {
      name: 'Aniket Kumar Singh',
      email: 'aniketkrsingh3@gmail.com',
      linkedin: 'https://www.linkedin.com/in/aniket-singh-361138176',
      slack: 'https://devfest-19.slack.com/team/UKYS3BH2M'
    },
    {
      name: 'Abhik Banerjee',
      email: 'abhik.banerjee.1999@gmail.com',
      linkedin: 'https://linkedin.com/in/abhik-banerjee-591081164/',
      slack: 'https://devfest-19.slack.com/team/UKTQDCJD8'
    },
    {
      name: 'Dipayan Bhattacharjee',
      email: 'dipayanbhattacharjee1997@gmail.com',
      linkedin: 'https://www.linkedin.com/in/dipayan-bhattacharjee-4156a1163',
      slack: 'https://devfest-19.slack.com/team/UL56Y3ZLG'
    },
    {
      name: 'Amit Rai',
      email: 'ardev472@gmail.com',
      linkedin: 'https://linkedin.com/in/amit-rai-412748170',
      slack: 'https://devfest-19.slack.com/team/UL56ZG6F2'
    },
    {
      name: 'Subhasis Das',
      email: 'subhasisdas125@gmail.com',
      linkedin: 'https://www.linkedin.com/in/subhasis-das-6a00aa172/',
      slack: 'https://devfest-19.slack.com/team/UKTS2CG4T'
    },
    {
      name: 'Ritika Pal',
      email: 'palritika71@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ritika-pal-13a373179/',
      slack: 'https://devfest-19.slack.com/team/UKTQPL30B'
    },
    {
      name: 'Sayantak Karar',
      email: 'sayantakkarar@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sayantak-karar-93870716b',
      slack: 'https://devfest-19.slack.com/team/UL72LQ3KR'
    },
    {
      name: 'Atri Das',
      email: 'babinsamrat123@gmail.com',
      linkedin: 'https://www.linkedin.com/in/atri-samrat-d-a64402104/',
      slack: 'https://devfest-19.slack.com/team/UKTQN8GV9'
    },
    {
      name: 'Anurag Singh',
      email: 'anurags228@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anurag-singh-997461163',
      slack: 'https://devfest-19.slack.com/team/UKZGFQ2FK'
    },
    {
      name: 'Debroop Gupta',
      email: 'debroop42@gmail.com',
      linkedin: 'www.linkedin.com/in/debroop-gupta',
      slack: 'https://devfest-19.slack.com/team/UKYS1SHSM'
    },
    {
      name: 'Aniket Kumar',
      email: 'kumaraniket1729@gmail.com',
      linkedin: 'https://www.linkedin.com/in/aniketjha1729/',
      slack: 'https://devfest-19.slack.com/team/UL4PH7J20'
    },
    {
      name: 'Rajwrita Nath',
      email: 'rajwritanath@gmail.com',
      linkedin: 'https://www.linkedin.com/in/rajwrita-nath/',
      slack: 'https://devfest-19.slack.com/team/UKTQWJZ51'
    },
    {
      name: 'Piyush Sinha',
      email: 'piyush.sinha24@gmail.com',
      linkedin: 'https://www.linkedin.com/in/dev-PS',
      slack: 'https://devfest-19.slack.com/team/UL7CXJQES'
    },
    {
      name: 'Soham Jana',
      email: 'janasoham11@gmail.com',
      linkedin: 'https://www.linkedin.com/in/soham-jana-407a27185/',
      slack: 'https://devfest-19.slack.com/team/UKYTE0DQR'
    },
    {
      name: 'Somdev Basu',
      email: 'somdevbasu100@gmail.com',
      linkedin: 'https://linkedin.com/in/bosecodes',
      slack: 'https://devfest-19.slack.com/team/UKTPF17EE'
    },
    {
      name: 'Arnab Chanda',
      email: 'arnabchanda964@gmail.com',
      linkedin: 'https://www.linkedin.com/in/arnab-chanda-aa671017a/',
      slack: 'https://devfest-19.slack.com/team/UL57SAGJ1'
    },
    {
      name: 'Yashashwee Chakrabarty',
      email: 'yashashwee99@gmail.com',
      linkedin: 'https://www.linkedin.com/in/yashashwee-chakrabarty-60a63416b/',
      slack: 'https://devfest-19.slack.com/team/UL4NV8YR2'
    },
    {
      name: 'Piyush Maheswari',
      email: 'piyushmaheswari29@gmail.com',
      linkedin: 'https://www.linkedin.com/in/piyush-maheswari-835424138/',
      slack: 'https://devfest-19.slack.com/team/UKYSQPMHP/'
    },
    {
      name: 'Ashmita Sen',
      email: 'iamashmitasen@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ashmita-sen-a0700617b',
      slack: 'https://devfest-19.slack.com/team/UKTQ6EF9Q'
    },
    {
      name: 'Anubhav Kumar Singh',
      email: 'anubhavkumar45aks@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anubhavkumar11/',
      slack: 'https://devfest-19.slack.com/team/UL57EJ2ER'
    },
    {
      name: 'Sayak Banerjee',
      email: 'sayakani1998@gmail.com',
      linkedin: 'http://linkedin.com/in/sayak-banerjee-09692a15b',
      slack: 'https://devfest-19.slack.com/team/UKTRYCKNX'
    },
    {
      name: 'Debmallya Bhattacharya',
      email: 'debmallyabhattacharya@gmail.com',
      linkedin: 'https://www.linkedin.com/in/debmallya-bhattacharya-a93507aa/',
      slack: 'https://devfest-19.slack.com/team/UKTRVKXK5'
    },
    {
      name: 'Ankita Prakash',
      email: 'ankita.prakash1998@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ankita-prakash-90668b177/',
      slack: 'https://devfest-19.slack.com/team/UL57B7F7F'
    },
    {
      name: 'Zaid Alam',
      email: 'zalam307@gmail.com',
      linkedin: 'https://www.linkedin.com/in/zaid-alam-00b176170/',
      slack: 'https://devfest-19.slack.com/team/UL72L6UVD'
    },
    {
      name: 'Diya Banerjee',
      email: 'diya17071999@gmail.com',
      linkedin: 'https://www.linkedin.com/in/diya-banerjee-79922b18b',
      slack: 'https://devfest-19.slack.com/messages/@UKVC43WUT'
    },
    {
      name: 'Pratyusha Mitra',
      email: 'pratyushamitra20@gmail.com',
      linkedin: 'https://www.linkedin.com/in/pratyusha-mitra-15a22b18b/',
      slack: 'https://devfest-19.slack.com/team/UKVA06XT4'
    },
    {
      name: 'Gaurav Prasad',
      email: 'gaurav.prasad.kol@gmail.com',
      linkedin: 'www.linkedin.com/in/gaurav-prasad-496500144',
      slack: 'https://devfest-19.slack.com/team/UL7B815DL'
    },
    {
      name: 'Arpit Das',
      email: 'arpitdas118@gmail.com',
      linkedin: 'https://www.linkedin.com/in/arpitdaskolkata/',
      slack: 'https://devfest-19.slack.com/team/UL4P81VD2'
    },
    {
      name: 'Swetank Raj',
      email: 'swetank@swetank.rocks',
      linkedin: 'https://www.linkedin.com/in/swetankraj/',
      slack: 'https://devfest-19.slack.com/team/UL7LK06PQ'
    },
    {
      name: 'Shreya Mallik',
      email: 'shreyamallik165@gmail.com',
      linkedin: 'https://www.linkedin.com/in/shreya-mallik-4b1138174',
      slack: 'https://devfest-19.slack.com/team/UL4NJN8F6'
    },
    {
      name: 'Mrinal Kanti Ghosh',
      email: 'ghosh.mrinalkanti382@gmail.com',
      linkedin: 'https://www.linkedin.com/in/mrinal-kanti-ghosh/',
      slack: 'https://devfest-19.slack.com/team/UKTQ5QCSE'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
