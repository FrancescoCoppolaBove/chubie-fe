import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { generalFaqs, navTabs, supportFaqs, hostingFaqs, productFaqs } from '../../const/faqs';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ChubieAccordion from '../Accordion/ChubieAccordion';

const style = {
  faqSection: `py-[8rem]`,
  faqInner: `max-w-7xl mx-auto flex flex-col w-full`,
  faqTop: `max-w-[40rem] mb-[5rem]`,
  faqStage: `mb-[0.75rem] text-[0.75rem] leading-[1] font-bold uppercase text-[#777E90]`,
  faqTitle: `font-dm-sans mb-[1.25rem] text-[3rem] leading-[1.16667] font-bold tracking-tight`,
  faqInfo: `text-[#E6E8EC] text-[1rem] leading-[1.5]`,
  faqSupportLink: `font-medium text-[#3772FF] hover:text-[#044eff] text-[1rem] transition-all duration-200`,
  faqTabs: `flex`,
  faqCol: `first:shrink w-[10rem] last:grow last:pl-[14.063rem]`,
  faqNav: `flex flex-col items-start`,
  activeTab: `text-[#FCFCFD]`,
  faqLink: `text-[#777E90] hover:text-brand-light mb-[2.5rem] last:mb-0 flex items-center font-dm-sans text-[0.875rem] leading-[1.14286] font-bold cursor-pointer transition-all duration-200`
};

const Faq = () => {
  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [stateNav, setStateNav] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickNav = (event, index) => {
    setStateNav(index);
  };

  return (
    <>
      <section className={style.faqSection}>
        <div className={style.faqInner}>
          <div className={style.faqTop}>
            <div className={style.faqStage}>learn how to get started</div>
            <h1 className={style.faqTitle}>Frequently asked questions</h1>
            <div className={style.faqInfo}>
              Join Stacks community now to get free updates and also alot of freebies are waiting for you or{' '}
              <a className={style.faqSupportLink} href="#">
                Contact support
              </a>
            </div>
          </div>
          <div className={style.faqTabs}>
            <div className={style.faqCol}>
              <div className={style.faqNav}>
                {navTabs.map((item, index) => {
                  const className = stateNav === index ? 'activeTab' : null;
                  return (
                    <a
                      onClick={(e) => handleClickNav(e, index)}
                      key={index}
                      className={`${style.faqLink} ${style[className]}`}
                      href="#"
                    >
                      {item.icon}
                      {item.description}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className={style.faqCol}>
              {stateNav === 0 && (
                <div className={style.faqBox}>
                  {generalFaqs.map((faq, index) => {
                    return (
                      <ChubieAccordion
                        key={index}
                        panel={faq.id}
                        headerText={faq.headerText}
                        bodyText={faq.bodyText}
                      ></ChubieAccordion>
                    );
                  })}
                </div>
              )}
              {stateNav === 1 && (
                <div className={style.faqBox}>
                  {supportFaqs.map((faq, index) => {
                    return (
                      <ChubieAccordion
                        key={index}
                        panel={faq.id}
                        headerText={faq.headerText}
                        bodyText={faq.bodyText}
                      ></ChubieAccordion>
                    );
                  })}
                </div>
              )}
              {stateNav === 2 && (
                <div className={style.faqBox}>
                  {hostingFaqs.map((faq, index) => {
                    return (
                      <ChubieAccordion
                        key={index}
                        panel={faq.id}
                        headerText={faq.headerText}
                        bodyText={faq.bodyText}
                      ></ChubieAccordion>
                    );
                  })}
                </div>
              )}
              {stateNav === 3 && (
                <div className={style.faqBox}>
                  {productFaqs.map((faq, index) => {
                    return (
                      <ChubieAccordion
                        key={index}
                        panel={faq.id}
                        headerText={faq.headerText}
                        bodyText={faq.bodyText}
                      ></ChubieAccordion>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
