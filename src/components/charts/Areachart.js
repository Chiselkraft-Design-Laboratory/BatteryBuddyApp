import React, { Fragment } from 'react'
//carts
import { XYPlot, RadialChart, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, AreaSeries,makeWidthFlexible,DiscreteColorLegend } from 'react-vis';
import 'react-vis/dist/style.css';

//redux 
import { connect } from 'react-redux'


const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const WORDS = ['$10K','$20K','$40K','$60K','$80k']


function Areachart(props) {
    const x = 10;
   
    const styles = { 
        transform: `translateX(${x}px)` ,
        width:30
    };
 
    const myFormatter1=(v,i,s,t) =>{

    return (

    
      <tspan>
    <tspan dx=".15cm" dy="0.5em">{WORDS[i]}</tspan>

    </tspan>
    
    )
  }
console.log(props.data2)
    return (
        <>
        <FlexibleXYPlot height={220} width={props.width}>




        <LineSeries data={props.data}
              curve={'curveMonotoneX'}
              color={props.colorLine}
            />
                <AreaSeries
                  curve={'curveMonotoneX'}
               color={props.colorArea}
                  opacity={0.5}
                  getNull={(d) => d.y !== null} data={props.data}
                  
                  />
                  {props.data2?
             
                    <LineSeries data={props.data2}
                    curve={'curveMonotoneX'}
                    color={props.colorLine2}
                  />
  :null}  

{props.data2?


                   <AreaSeries
                  curve={'curveMonotoneX'}
               color={props.colorArea2}
                  opacity={0.5}
                  getNull={(d) => d.y !== null} data={props.data2}
                  
                  />
                 
  :null}  
              
                <YAxis />


              
              </FlexibleXYPlot>

              </>
    )
}




export default Areachart


