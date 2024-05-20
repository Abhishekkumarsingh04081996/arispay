import { title } from 'process';
import Container from '../Container';
import './roadmap.css';
import React, { ReactNode } from 'react';

const PhaseList = [
  {
    title: 'Phase I',
    active: true,
    subtitle: 'Conception and Planning',
    date: '(Jan 2024 - March 2024)',
    items: [
      {
        text: 'Market research and competitive analysis.',
        checked: true,
      },
      {
        text: 'Defining the value proposition of ARISPAY.',
        checked: true,
      },
      {
        text: 'Core team assembly.',
        checked: true,
      },
    ],
  },

  {
    title: 'Phase II',
    active: true,
    subtitle: 'Pre-Development and Token Launch',
    date: '(Apr 2024 - June 2024)',
    items: [
      {
        text: 'Technical architecture planning.',
        checked: true,
      },
      {
        text: 'Brand identity development.',
        checked: false,
      },
      {
        text: 'Security & Privacy Measures Planning.',
        checked: false,
      },
      {
        text: 'Initial Marketing Strategy Development.',
        checked: false,
      },
      {
        text: 'Development of Aris Website & App Prototype.',
        checked: false,
      },
      {
        text: 'Early Community Building and Engagement on Social Media and Forums.',
        checked: false,
      },
      {
        text: 'Funding Round to Support Early Development and Marketing.',
        checked: false,
      },
      {
        text: 'Aris Pay Token Launch $ARIS.',
        checked: false,
      },
      {
        text: 'Launch of Aris Wallet.',
        checked: false,
      },
      {
        text: 'Onboard Key Opinion Leaders.',
        checked: false,
      },
      {
        text: 'Partnership Announcements.',
        checked: false,
      },
    ],
  },
  {
    title: 'Phase III',
    subtitle: 'Development and Testing',
    date: '(Jul 2024 - Sept 2024)',
    active: false,
    items: [
      {
        text: 'Full-Scale Development of Aris Products.',
        checked: false,
      },
      {
        text: 'Iterative Testing and Feedback with Early Community Members.',
        checked: false,
      },
      {
        text: 'Launch Swap, Bridge and multi-currency support.',
        checked: false,
      },
      {
        text: 'Security Audits and Compliance Reviews.',
        checked: false,
      },
      {
        text: 'Strategic Partnerships.',
        checked: false,
      },
      {
        text: 'Establish Board of Advisors.',
        checked: false,
      },
      {
        text: 'Launch $ARIS Token on Multiple CEXs',
        checked: false,
      },
      {
        text: 'Mass Marketing and Global Expansion.',
        checked: false,
      },
    ],
  },
  {
    title: 'Phase IV',
    active: false,
    subtitle: 'Launch Preparation',
    date: '(Oct 2024 - Dec 2024)',
    items: [
      {
        text: 'Finalization of Aris Visa Card Partnerships and Integration.',
        checked: false,
      },
      {
        text: 'Launch Pre-Registration for Aris Rewards Program.',
        checked: false,
      },
      {
        text: 'Final Security Checks and Compliance Verifications.',
        checked: false,
      },
      {
        text: 'Marketing Campaigns to Announce Official Launch Date.',
        checked: false,
      },
      {
        text: 'Official Launch of Aris Visa Card.',
        checked: false,
      },
      {
        text: 'Official Launch of Aris App with gateway rate optimization.',
        checked: false,
      },
      {
        text: 'Distribution of Aris Visa Card to Pre-Registered Users.',
        checked: false,
      },
      {
        text: 'Further User Growth of Aris Pay Ecosystem.',
        checked: false,
      },
      {
        text: 'Top-Tier Collaborations and Partnerships.',
        checked: false,
      },
    ],
  },
  {
    title: 'Phase V',
    subtitle: 'Post-Launch and Scale-Up ',
    date: '(Jan 2025 - Mar 2025)',
    active: false,
    items: [
      {
        text: 'Monitor and Optimize Platform Based on User Feedback.',
        checked: false,
      },
      {
        text: 'Scale Up Marketing Efforts to Attract More Users.',
        checked: false,
      },
      {
        text: 'Introduce Additional Features and Services.',
        checked: false,
      },
      {
        text: 'Continuous Platform Improvements and Feature Updates.',
        checked: false,
      },
      {
        text: 'Expand Team to Support Growth.',
        checked: false,
      },
      {
        text: 'Explore and Establish New Partnerships.',
        checked: false,
      },
      {
        text: 'Regular Security and Compliance Updates.',
        checked: false,
      },
      {
        text: 'Explore and establish new partnerships to enhance the Aris Pay ecosystem.',
        checked: false,
      },
      {
        text: 'Regular security and compliance updates to adapt to new regulations and technologies.',
        checked: false,
      },
    ],
  },
];

export default function Roadmap() {
  return (
    <div className='relative bg-black'>
      <Container className=''>

        <div className='text-center mt-20'>
          <h1 className='text-white text-4xl font-normal'>Roadmap</h1>
          <h2 className='text-white text-2xl font-normal mb-10 mt-2'>
            Charting the Path to Success: Navigate the Journey <br /> with Our Roadmap
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-5'>
          {PhaseList.map((phase) => {
            return (
              <RoadmapCard
                date={phase.date}
                active={phase.active}
                subtitle={phase.subtitle}
                items={phase.items}
                title={phase.title}
              ></RoadmapCard>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

interface IListProps {
  items: {
    text: string;
    checked: boolean;
  }[];
  title: string;
  subtitle: string;
  active: boolean;
  date: string;
}

function RoadmapCard(props: IListProps) {
  return (
    <div
      className={'p-5 flex item-center flex-col  border-t border-opacity-70 border-gray-500 border-l border-r border-opacity-70 border-b border-opacity-30 mb-5 transition rounded-3xl backdrop-blur-xl'}
    >
      <div className='flex flex-row items-center gap-3'>
        <h2 className='text-blue-500 font-semibold text-2xl'>{props.title}</h2>
        <h4 className='text-white font-medium text-lg'>{props.date}</h4>
      </div>

      {props.items.map((item) => {
        return (
          <ul className='list-disc text-white'>
            <div className='mt-1'>
              <ul className="list-none">
                <li className="text-base before:bg-white before:rounded-full before:h-2 before:w-2 before:inline-block before:mr-2">{item.text}</li>
              </ul>
            </div>
          </ul>
        );
      })}

    </div>
  );
}
