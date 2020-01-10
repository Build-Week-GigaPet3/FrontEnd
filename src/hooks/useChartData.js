const useChartData = (props) => {

    // const howManyToShow = 7;

    // const randomColors = () =>{
    //     let colors = []
    //     for(let i = 0; i < howManyToShow; i++){
    //         colors.push('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),) 
    //     }
    //     // console.log(colors)
    //     return colors
    // }

    const foodCategories = () =>{
      let names = []
      for (let i = 0; i < 7; i++){
        if (props === undefined){
            console.log('chartData props undefined!')
            return ''
        }else{
            names.push(props[i].name)
        }
    }
    // console.log(names)
    return names
    }

    const logsCount = () =>{
      let logs = []
      for (let i = 0; i < 7; i++){
          logs.push(props[i].date.length)
      }
    //   console.log(logs)
      return logs
  }

    const chartData = {
          labels: foodCategories(),
          datasets:[
            {
              label: 'Label Here',
              data: logsCount(),
              backgroundColor: [
                '#ff6666',
                '#ffcc80',
                '#ffff99',
                '#80ffaa',
                '#99ffff',
                '#99bbff',
                '#aa80ff',
              ],
              hoverBackgroundColor: [
                '#ffcccc',
                '#ffebcc',
                '#ffffcc',
                '#ccffdd',
                '#e6ffff',
                '#e6eeff',
                '#ddccff',
              ]
            }
          ]
        }

    // const [chartData] = useState(initialValue);

    return [chartData];
}

export default useChartData;