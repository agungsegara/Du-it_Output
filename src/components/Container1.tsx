import { FunctionComponent } from "react";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[960px] flex flex-col items-center justify-start gap-[24px] min-w-[480px] max-w-full text-center text-5xl text-gray-100 font-ibm-plex-mono ${className}`}
    >
      <img
        className="w-[136px] h-[175.3px] relative object-contain"
        loading="lazy"
        alt=""
        src="/clip-path-group1@2x.png"
      />
      <div className="self-stretch flex flex-col items-center justify-start py-6 px-5 box-border gap-[24px] max-w-full">
        <h2 className="m-0 w-[480px] relative text-inherit leading-[130%] font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[25px]">
          Achieving Your Mazda Dream on a Rp 4 Juta/Month Salary
        </h2>
        <button className="cursor-pointer [border:none] py-2 px-6 bg-lightseagreen-200 rounded-3xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumturquoise">
          <div className="relative text-sm leading-[150%] font-medium font-ibm-plex-mono text-lightseagreen-100 text-center inline-block min-w-[110px]">
            Powered by AI
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-left text-sm text-d-colors-base-neutral">
        <div className="flex-1 [backdrop-filter:blur(120px)] rounded-2xl bg-gray-200 flex flex-col items-center justify-start p-6 box-border relative gap-[24px] min-w-[304px] max-w-full">
          <button className="cursor-pointer [border:none] py-3 px-6 bg-lightseagreen-200 rounded-3xl flex flex-row items-center justify-center gap-[10px] whitespace-nowrap hover:bg-mediumturquoise">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/mingcutetask2fill.svg"
            />
            <div className="relative text-sm leading-[150%] font-medium font-ibm-plex-mono text-lightseagreen-100 text-center inline-block min-w-[110px]">
              Actions to Do
            </div>
          </button>
          <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:97] [-webkit-box-orient:vertical]">
            <p className="m-0">
              *Step 1: Determine Your Target Mazda Model and Price*
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">{`* *Research:*  First, you need to decide on the specific Mazda model you want.  Browse Mazda's website or visit a dealership to get an idea of prices for different models and trim levels. `}</p>
            <p className="m-0 whitespace-pre-wrap">{`* *Set a Realistic Budget:* Consider your budget constraints.  Do you want a brand-new Mazda, or are you open to a used model?  `}</p>
            <p className="m-0 whitespace-pre-wrap">
              * *Factor in Additional Costs:* Remember to include registration
              fees, insurance, taxes, and any potential modifications or
              upgrades in your overall budget.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              *Step 2: Assess Your Current Savings and Monthly Budget*
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              * *Calculate Your Monthly Savings:* Determine how much you can
              realistically save each month on top of your existing expenses.
              This will be your "contribution" towards your Mazda goal.
            </p>
            <p className="m-0">
              * *Estimate Your Current Expenses:* Make a detailed list of your
              monthly expenses (rent/mortgage, utilities, food, transportation,
              etc.). This will help you identify areas where you might be able
              to cut back and increase your savings.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              *Step 3: Create a Savings Plan and Timeline*
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              * *Calculate the Total Savings Needed:* Subtract your current
              savings (Rp 5,000,000) from the target price of your desired Mazda
              model.
            </p>
            <p className="m-0 whitespace-pre-wrap">
              * *Determine Your Monthly Contribution:* Divide the total savings
              needed by the number of months you want to save for the car. This
              will give you your required monthly contribution.
            </p>
            <p className="m-0">
              * *Set a Savings Goal:* You can use a spreadsheet, budgeting app,
              or online calculator to track your progress.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              *Step 4: Explore Financing Options*
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              * *Mazda Financing:* Most dealerships offer financing options
              through their partners. Explore their terms, interest rates, and
              repayment schedules.
            </p>
            <p className="m-0 whitespace-pre-wrap">
              * *Bank Loans:* You can also inquire about auto loans from banks.
              Compare different loan options to get the best interest rate and
              repayment terms.
            </p>
            <p className="m-0">
              * *Personal Loans:* In some cases, a personal loan might be an
              option, but interest rates are usually higher.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              *Step 5: Optimize Your Finances*
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              * *Reduce Expenses:* Review your monthly expenses and identify
              areas where you can reduce spending. This could include dining out
              less, finding cheaper alternatives for entertainment, or
              negotiating lower rates for utilities.
            </p>
            <p className="m-0">{`* *Increase Income:* Consider taking on a side hustle or exploring opportunities to increase your income. `}</p>
            <p className="m-0 whitespace-pre-wrap">
              * *Invest Wisely:* If you have any surplus funds after meeting
              your monthly expenses and savings goals, consider investing in a
              diversified portfolio to grow your savings over time.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">*Remember:*</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">{`* Be realistic about your savings goals and timeline.  `}</p>
            <p className="m-0">
              * Don't sacrifice your financial well-being by stretching yourself
              too thin.
            </p>
            <p className="m-0 whitespace-pre-wrap">
              * Prioritize building a good credit score. This will give you
              better loan terms in the future.
            </p>
            <p className="m-0 whitespace-pre-wrap">
              * Plan and save diligently! With a consistent plan and smart
              financial decisions, you can achieve your dream of owning a Mazda.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">*Additional Tip:*</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              * Consider purchasing a slightly older model of the Mazda. This
              can significantly lower your initial cost and help you achieve
              your goal faster.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              *Remember, I am not a certified financial advisor. This is just a
              general guide. It's always best to consult with a qualified
              financial advisor for personalized advice tailored to your
              specific situation.*
            </p>
          </div>
          <div className="w-72 !m-[0] absolute top-[72px] left-[24px] hidden flex-row items-center justify-between py-t-spacing-21 px-t-spacing-1 box-border gap-[-280px] z-[2] text-xs font-daisyui-text-xs">
            <div className="h-4 w-[280px] relative leading-[16px] inline-block shrink-0 opacity-[0.8]">
              Bottom Left label
            </div>
            <div className="w-[280px] relative leading-[16px] text-right hidden opacity-[0.8]">
              Bottom Right label
            </div>
          </div>
        </div>
        <div className="flex-1 [backdrop-filter:blur(120px)] rounded-2xl bg-gray-200 flex flex-col items-center justify-start p-6 box-border relative gap-[24px] min-w-[304px] max-w-full">
          <button className="cursor-pointer [border:none] py-3 px-6 bg-lightseagreen-200 rounded-3xl flex flex-row items-center justify-center gap-[10px] whitespace-nowrap hover:bg-mediumturquoise">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/streamlineaitechnologysparksolid.svg"
            />
            <div className="relative text-sm leading-[150%] font-medium font-ibm-plex-mono text-lightseagreen-100 text-center">
              AI Recommendation
            </div>
          </button>
          <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:97] [-webkit-box-orient:vertical]">
            <p className="m-0">*Remember:*</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">{`* Be realistic about your savings goals and timeline.  `}</p>
            <p className="m-0">
              * Don't sacrifice your financial well-being by stretching yourself
              too thin.
            </p>
            <p className="m-0 whitespace-pre-wrap">
              * Prioritize building a good credit score. This will give you
              better loan terms in the future.
            </p>
            <p className="m-0 whitespace-pre-wrap">
              * Plan and save diligently! With a consistent plan and smart
              financial decisions, you can achieve your dream of owning a Mazda.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">*Additional Tip:*</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 whitespace-pre-wrap">
              * Consider purchasing a slightly older model of the Mazda. This
              can significantly lower your initial cost and help you achieve
              your goal faster.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              *Remember, I am not a certified financial advisor. This is just a
              general guide. It's always best to consult with a qualified
              financial advisor for personalized advice tailored to your
              specific situation.*
            </p>
          </div>
          <div className="w-72 !m-[0] absolute top-[72px] left-[24px] hidden flex-row items-center justify-between py-t-spacing-21 px-t-spacing-1 box-border gap-[-280px] z-[2] text-xs font-daisyui-text-xs">
            <div className="h-4 w-[280px] relative leading-[16px] inline-block shrink-0 opacity-[0.8]">
              Bottom Left label
            </div>
            <div className="w-[280px] relative leading-[16px] text-right hidden opacity-[0.8]">
              Bottom Right label
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
