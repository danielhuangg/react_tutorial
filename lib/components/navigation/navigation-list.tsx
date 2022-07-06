import { IconHome, IconUserCircle, IconNotification, IconPackage } from '@tabler/icons'
import { useState, useRef } from 'react'



export function NavigationList( { setModule, module } ){
    function handleChangeModule(value){
        if (value !== module) {
            setModule(value);
        }
    }

    return (
        <>
          <div className={`h-16 flex flex-col items-center justify-center ease-in-out duration-200  ${module === 'home' ? 'text-teal-900' : 'text-gray-400'}`} onClick={ () => handleChangeModule('home') }>
            <IconHome className=""/>
            <span className="text-sm">Home</span>
          </div>
          <div className={`h-16 flex flex-col items-center justify-center ease-in-out duration-200 ${module === 'product' ? 'text-teal-900' : 'text-gray-400'}`} onClick={ () => handleChangeModule('product') }>
            <IconPackage className=""/>
            <span className="text-sm">Product</span>
          </div>
          <div className="h-16 flex flex-col items-center justify-center ease-in-out duration-200 text-gray-400">
            <IconNotification className=""/>
            <span className="text-sm">Announce</span>
          </div>
          <div className={`h-16 flex flex-col items-center justify-center ease-in-out duration-200 ${module === 'profile' ? 'text-teal-900' : 'text-gray-400'}`} onClick={ () => setModule('profile') }>
            <IconUserCircle className=""/>
            <span className="text-sm">Me</span>
          </div>
        </>
    )
}

export default NavigationList