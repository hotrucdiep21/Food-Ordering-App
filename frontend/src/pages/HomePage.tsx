import appDownload from "../assets/appDownload.png"
import landing from "../assets/landing.png"

const HomePage = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className='bg-white rounded-lg shadow-md py-8 flex flex-col text-center -mt-16'>
                <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
                    Tuck into away today
                </h1>
                <span className='text-xl'>
                    Food is just a click away!
                </span>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                <img src={landing} alt="" />
                <div className="flex flex-col items-center gap-4 justify-center text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeaway even faster!
                    </span>
                    <span>Download the Ordering.comm App for faster ordering and personalised recommendations</span>
                    <img src={appDownload} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage