import React, { Fragment } from 'react'
//carts
import { XYPlot, RadialChart, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, AreaSeries,makeWidthFlexible,DiscreteColorLegend } from 'react-vis';
import 'react-vis/dist/style.css';

//redux 



const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const WORDS = ['$10K','$20K','$40K','$60K','$80k']


function Barchart(props) {
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

    return (
        <Fragment>
              <FlexibleXYPlot height={props.height} width={props.width}  >
            
            <VerticalBarSeries
              color='#29a19c'
              data={props.data}
              className='bartransform'
              style={styles}
            />
            {props.isLine?
            <LineSeries data={props.data}
              curve={'curveMonotoneX'}
              color='#58d39a'
            />
            :null}
            {/* <VerticalGridLines
            tickTotal={6}
         
            /> */}
            {/* <HorizontalGridLines /> */}
            <YAxis  
            // tickFormat={(v,i,s,t)=>myFormatter1(v,i,s,t)}
            
            // style={{
            //   line: {stroke: '#ADDDE1'},
            //   ticks: {stroke: '#ADDDE1'},
            //   text: {stroke: '#a6b8c9',  fontSize:12,fontWeight:300,letterSpacing:1,}
            // }} 
      
            />
            <YAxis />
            {/* <YAxis orientation="right"
               tickFormat={(v,i,s,t)=>myFormatter1(v,i,s,t)}
             
   
            /> */}

          </FlexibleXYPlot>
          
        </Fragment>
    )
}




export default Barchart


