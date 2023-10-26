import { useState } from 'react';

const Header = () => {
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
  });

  const handleButtonClick = (buttonName) => {
    setButtonStates({
      ...buttonStates,
      [buttonName]: !buttonStates[buttonName],
    });
  };

  return (
    <div className="">
      <div className="bg-white pl-52 py-5 w-screen h-fit">
        <img
          className="w-[300px] "
          src="https://res.cloudinary.com/dutvrzezk/image/upload/v1698321274/anera1-logo_qehysl.svg"
          alt="anera"
        />
      </div>

      <div className="bg-white h-full  ml-32 p-10 gap-2 flex flex-col mt-10  justify-center items-center w-[40%]">
        <h1 className="text-3xl font-semibold">
          Provide urgent humanitarian aid to Palestinians
        </h1>
        <h1 className="text-2xl">
          Anera is responding to the <strong>large humanitarian need</strong> in
          Gaza, the West Bank and East Jerusalem.{' '}
        </h1>
        <h1>
          Here's how <strong>you</strong> can make an{' '}
          <strong>immediate impact:</strong>
        </h1>
        <ul className="list-disc">
          {' '}
          <li>
            <strong>
              {' '}
              $30 can provide the Central Blood Bank Society in Gaza with 16
              blood bags
            </strong>{' '}
            - blood bags are a vital element in ensuring patient survival during
            a crisis
          </li>
          <li>
            <strong>$50 can feed 33 adults</strong> with a hearty meal of
            chicken and rice
          </li>
          <li>
            $80 can provide a hygiene kit to two displaced families - these kits
            include hand soap, shampoo, toilet paper, laundry detergent,
            toothpaste, and more
          </li>
          <li>
            <strong>
              {' '}
              $100 can provide a displaced family with a food parcel that will
              meet their nutritional needs for 5 days
            </strong>{' '}
            - these food parcels include canned meat, cheese, kidney beans, jam,
            za'atar, and more
          </li>
          <li>
            <strong>
              {' '}
              $200 can provide two displaced families with food parcels to meet
              their nutritional needs
            </strong>
          </li>
        </ul>
        <div className="flex text-xs bg-[#eee] py-2 px-5 w-full justify-between">
          <div>
            {' '}
            <h1>Take future action with a single click.</h1>
            <p>
              {' '}
              <strong>Log in</strong> or <strong>Sign up</strong> for{' '}
              <strong>FastAction</strong>
            </p>
          </div>
          <img
            className="w-[100px]"
            src="//static.everyaction.com/ea-actiontag/assets/images/fast-action.svg"
          />
        </div>

        <h1 className="text-2xl text-start w-full ">
          Contribution Information
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-6  w-full">
          <button
            onClick={() => handleButtonClick('button1')}
            className={` ${
              buttonStates.button1 ? 'bg-[#ff9012]' : 'bg-[#0096aa]'
            }  py-3 rounded-md text-white text-2xl font-bold`}
          >
            $40
          </button>
          <button
            onClick={() => handleButtonClick('button2')}
            className={` ${
              buttonStates.button2 ? 'bg-[#ff9012]' : 'bg-[#0096aa]'
            }  py-3 rounded-md text-white text-2xl font-bold`}
          >
            $80
          </button>
          <button
            onClick={() => handleButtonClick('button3')}
            className={` ${
              buttonStates.button3 ? 'bg-[#ff9012]' : 'bg-[#0096aa]'
            }  py-3 rounded-md text-white text-2xl font-bold`}
          >
            $100
          </button>
          <button
            onClick={() => handleButtonClick('button4')}
            className={` ${
              buttonStates.button4 ? 'bg-[#ff9012]' : 'bg-[#0096aa]'
            }  py-3 rounded-md text-white text-2xl font-bold`}
          >
            $200
          </button>
          <button
            onClick={() => handleButtonClick('button5')}
            className={` ${
              buttonStates.button5 ? 'bg-[#ff9012]' : 'bg-[#0096aa]'
            }  py-3 rounded-md text-white text-2xl font-bold`}
          >
            $500
          </button>
          <button
            onClick={() => handleButtonClick('button6')}
            className={` ${
              buttonStates.button6 ? 'bg-[#ff9012]' : 'bg-[#0096aa]'
            }  py-3 rounded-md text-white text-2xl font-bold`}
          >
            $1000
          </button>
        </div>
        <input
          type="value"
          placeholder="$0.00"
          className="w-full bg-[#ff9012] py-2 text-white border-hidden"
        />
      </div>
      <div className=" text-[#1e242b] h-fit bg-white w-screen flex justify-center items-center mt-6">
        <div className="flex px-80 flex-col items-center gap-10 pt-7 pb-14 justify-center">
          <h1>Your donation is 100% secure and tax-deductible</h1>
          <h1>
            Having trouble donating?{' '}
            <a
              href=""
              className="font-bold text-[#0096aa]"
            >
              Send an email to anera@anera.org.
            </a>
          </h1>
          <div className="flex items-center gap-10">
            <a href="https://www.charitynavigator.org/ein/520882226">
              {' '}
              <img
                className="w-[110px] "
                src="https://nvlupin.blob.core.windows.net/images/van/EA/EA005/1/77570/images/Four-Star%20Rating%20Badge%20-%20Full%20Color.png"
              />
            </a>

            <a href="https://www.guidestar.org/profile/52-0882226">
              {' '}
              <img
                className="w-[110px]"
                src="https://prod.cdn.everyaction.com/images/van/EA/EA005/1/77570/images/GuideStar_Platinum_seal-LG.png"
              />
            </a>
            <a href="https://www.charitywatch.org/charities/american-near-east-refugee-aid-anera">
              {' '}
              <img
                className="w-[110px]"
                src="https://nvlupin.blob.core.windows.net/images/van/EA/EA005/1/77570/images/CharityWatch_Seal_RGB_WEB_hi-res.jpg"
              />
            </a>
            <a href="https://give.org/charity-reviews/national/relief-and-development/anera-in-washington-dc-991%22">
              {' '}
              <img
                className="w-[110px]"
                src="https://nvlupin.blob.core.windows.net/images/van/EA/EA005/1/77570/images/accredited-charity-seal.png"
              />
            </a>
          </div>

          <p className="text-center ">
            Anera is a 501(c)(3) nonprofit organization (tax-ID number
            52-0882226). Your gift is secure and tax deductible to the extent
            allowed by law.
          </p>
          <p className=" text-center text-xs">
            By policy, unless otherwise stated, donations under $5,000 to Anera
            cannot be restricted and are used for our overall purpose to create
            opportunity and hope for refugees and poor families in Palestine,
            Lebanon and Jordan by improving health care and education and
            stimulating job creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
