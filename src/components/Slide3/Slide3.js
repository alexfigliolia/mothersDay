import React from 'react';

export default function Slide3(props) {
  return (
  	<div
  		className={props.classes}
			style={{
				background: props.color
			}}>
  		<div>
  			<p>I hope today you are surrounded by loved ones and great food. I am sorry I cannot be there to join you, but I am thinking about you a lot. I am so thankful for all your support. It is helping reach new heights!</p>
  			<p
  				style={{
  					marginTop: '0px',
  					textAlign: 'center'
  				}}>Love always,</p>
  			<div 
  				className='shape'
  				style={{
  					transition: 'transform 0.2s 0.0s, background 0.2s 0.2s'
  				}}>
  				<div style={{
  					transition: 'transform 0.2s 0.1s, background 0.2s 0.3s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.1s, background 0.2s 0.3s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.1s, background 0.2s 0.3s'
  				}}></div>
  			</div>
  			<div 
  				className='shape'
  				style={{
  					transition: 'transform 0.2s 0.05s, background 0.2s 0.25s'
  				}}>
  				<div style={{
  					transition: 'transform 0.2s 0.15s, background 0.2s 0.35s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.15s, background 0.2s 0.35s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.15s, background 0.2s 0.35s'
  				}}></div>
  			</div>
  			<div 
  				className='shape'
  				style={{
  					transition: 'transform 0.2s 0.1s, background 0.2s 0.3s'
  				}}>
  				<div style={{
  					transition: 'transform 0.2s 0.2s, background 0.2s 0.4s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.2s, background 0.2s 0.4s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.2s, background 0.2s 0.4s'
  				}}></div>
  			</div>
  			<div 
  				className='shape'
  				style={{
  					transition: 'transform 0.2s 0.15s, background 0.2s 0.35s'
  				}}>
  				<div style={{
  					transition: 'transform 0.2s 0.25s, background 0.2s 0.45s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.25s, background 0.2s 0.45s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.25s, background 0.2s 0.45s'
  				}}></div>
  			</div>
  			<div 
  				className='shape'
  				style={{
  					transition: 'transform 0.2s 0.3s, background 0.2s 0.4s'
  				}}>
  				<div style={{
  					transition: 'transform 0.2s 0.3s, background 0.2s 0.5s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.3s, background 0.2s 0.5s'
  				}}></div>
  				<div style={{
  					transition: 'transform 0.2s 0.3s, background 0.2s 0.5s'
  				}}></div>
  			</div>
  		</div>
  	</div>    
  );
}
