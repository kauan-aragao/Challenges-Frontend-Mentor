function App(){
    let res = useFetch('data.json')
    const [active,setActive] = React.useState('daily')
   
    if(res != null){
        if(active =='daily' || active == 'weekly' || active =='monthly'){
            var hours = []
            for(let i=0;i<6;i++ ){
                hours.push(res[i]['timeframes'][active])    
            }
        }
        function changeChoice(param){

            if(param == 'daily' ){
                document.getElementById('daily').classList.replace('text-gray-500','text-white')
                document.getElementById('weekly').classList.replace('text-white','text-gray-500')
                document.getElementById('monthly').classList.replace('text-white','text-gray-500')
            }
            if(param == 'weekly' ){
                document.getElementById('daily').classList.replace('text-white','text-gray-500')
                document.getElementById('weekly').classList.replace('text-gray-500','text-white')
                document.getElementById('monthly').classList.replace('text-white','text-gray-500')
            }
            if(param == 'monthly' ){
                document.getElementById('daily').classList.replace('text-white','text-gray-500')
                document.getElementById('weekly').classList.replace('text-white','text-gray-500')
                document.getElementById('monthly').classList.replace('text-gray-500','text-white')
            }
        }

    return (
        <div className="mx-4 mt-12 block lg:grid   lg:grid-cols-4 lg:grid-rows-2 lg:gap-7">
            <div  className="  color-main rounded-2xl lg:row-span-2 ">
                <User/>
                <div className="lg:flex  lg:flex-col grid grid-cols-3 px-5 py-6 lg:pl-6 lg:mb-8">
                <a onClick={()=>{setActive('daily')
                                changeChoice('daily')
                                }} id="daily" className=" text-gray-500 text-center lg:text-start lg:text-lg lg:py-2 hover:text-white" href="#">Daily</a>
                <a onClick={()=>{setActive('weekly')
                                changeChoice('weekly')
                                }} id="weekly" className=" text-gray-500 text-center lg:text-start lg:text-lg lg:py-2 hover:text-white" href="#">Weekly</a>
                <a onClick={()=>{setActive('monthly')
                                changeChoice('monthly')
                                }} id="monthly" className=" text-gray-500 text-center lg:text-start lg:text-lg lg:py-2 hover:text-white" href="#">Monthly</a>
            </div>
        </div>  
            <Data id="work" content="Work" src="images/icon-work.svg" alt="work-image" hours={hours[0]['current']} last={hours[0]['previous']}/>
            <Data id="play" content="Play" src="images/icon-play.svg" alt="play-image" hours={hours[1]['current']} last={hours[1]['previous']}/>
            <Data id="study" content="Study" src="images/icon-study.svg" alt="study-image" hours={hours[2]['current']} last={hours[2]['previous']}/>
            <Data id="exercise" content="Exercise" src="images/icon-exercise.svg" alt="exercise-image" hours={hours[3]['current']} last={hours[3]['previous']}/>
            <Data id="social" content="Social" src="images/icon-social.svg" alt="social-image" hours={hours[4]['current']} last={hours[4]['previous']}/>
            <Data id="self" content="Self Care" src="images/icon-self-care.svg" alt="self-care-image" hours={hours[5]['current']} last={hours[5]['previous']}/>
        </div>
    );}
}

function User(){
    
    return(
        <>
            <div id="user" className=" lg:h-2/3 lg:block flex rounded-2xl py-7 px-8 lg:px-5 ">
                <img  className="rounded-full border-2 w-16 h-16 lg:w-20 lg:h-20 " src="images/image-jeremy.png" alt="user-image" />
                <div className="ml-4">
                    <h1 className=" text-sm text-gray-400 lg:-ml-2 lg:mt-8 lg:text-md lg:mb-2">Report for </h1>
                    <h2 className="text-gray-200 text-2xl lg:-ml-2 lg:text-5xl font-light lg:pr-4">Jeremy Robson</h2>
                </div>
            </div>     
        </>
    );}

function Data(props){
   
    return(    
        <div id={props.id} className=" my-4 rounded-2xl lg:my-0 ">
            <div  className="h-10 flex justify-end overflow-hidden  ">
                <img  className="-mt-2 mr-3" src={props.src} alt={props.alt} />
            </div>
            <div className=" data color-main flex rounded-2xl justify-between   pb-2">
                <div className="py-6 pl-5">
                    <h1 className="text-white text-lg pb-1 lg:text-xl lg:pb-6">{props.content}</h1>
                    <h2 className="text-white text-3xl font-light lg:text-5xl ">{props.hours}hrs</h2>
                    <h3 className="text-gray-400 text-md pt-3 hidden lg:block lg:pb-2 ">Last week - {props.last}hrs</h3>
                </div>
                <div className="py-3 pr-5">
                    <div className="flex justify-end pb-1"><h3 className="text-gray-300 text-3xl hover:text-white cursor-pointer">...</h3></div>
                    <h4 className="text-gray-400 text-md pt-3 lg:hidden ">Last week - {props.last}hrs</h4>
                </div>
            </div>
        </div>
    );}

const useFetch = (url)=>{
    const [response, setResponse] = React.useState(null)
    const [error,setError] = React.useState(null)
    React.useEffect(()=>{
        const doFetch = async ()=>{
            try{
                const res = await fetch(url)
                const json = await res.json()
                setResponse(json)
        } catch(e){
            setError(e)
        }
    }
        doFetch()
    },[])
    console.log(response)
    return response
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
