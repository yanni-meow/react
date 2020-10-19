import React, { useState } from 'react';
import { ReactComponent as Leaf } from './marijuana.svg'

const Select = ({fullData, emptyAlert='jopa kota', keys, options}) => {

    const [allItemsList, setAllItemsList] = useState(fullData);

    const [isOpen, openList] = useState(false);
    const [textS, setTextS] = useState({[keys]:'default', [options]: 'choose smthg'});
    const [inputValue, setInputValue] = useState(''); 

    const chooseListItem = (element) => {
        
        setTextS(element);
        setInputValue(element.name);
        openList(!isOpen);

        if(textS.numericCode === element.numericCode) {
            setTextS({[options]: 'choose smthg'});
            setInputValue('');
            setAllItemsList(fullData);
        }
    }
 
    const createListItem = () => {
        if(allItemsList.length == 0) {
            return(
                <div className='listItem'>
                    {emptyAlert}
                </div>
            )
        } else {
        return(
            allItemsList.map(element => {
                return(
                    <div 
                        className='listItem' 
                        onClick={()=>chooseListItem(element)}
                        key={element[keys]} 
                        style={{borderBottom: textS.numericCode === element.numericCode && '3px solid rgba(200, 200, 200, .5)'}}
                        >
                        {element[options]}
                    </div>
                )
            })
        )
    }}

    const findListItem = (event) => {
        console.log('event.target.value === ', event.target.value);
        const filtredList = fullData.filter(element => element[options].toLowerCase().includes(event.target.value.toLowerCase()));
        setInputValue(event.target.value);
        setAllItemsList(filtredList);
        openList(true);
    }
    
    return(
        <div className='selectBox'>
            <div 
                className='selectDefault' 
                onClick={() => {openList(!isOpen)}}>
                    <input type='text'
                        className='defaultListItem'
                        onChange={findListItem}
                        placeholder={ textS[options] }
                        value={ inputValue }
                    />
                            
                    <div> 
                        <Leaf style={{height: '2vw', width: '2vw', margin:'5px', transform: isOpen && 'rotate(230deg)'}} /> 
                    </div>
            </div>
            <div 
                className='selectList'
                style={{display: isOpen ? 'block' : 'none'}}>
                    {createListItem()}
            </div>
        </div>
    )
}

export default Select;