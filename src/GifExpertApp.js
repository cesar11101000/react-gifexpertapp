import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GifGrid';

const GiftExpertApp = () => {

    const [categorias, setCategory] = useState(['OnePunch']);
    //contiene todos los valores retornados de AddCategory y los envia a index
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory = { setCategory }/>
            <hr/> 
            <ol>
                { 
                    categorias.map( category => (
                        <GiftGrid 
                        key = { category }
                        category ={ category } 
                        /> 
                    ))
                }
            </ol>
        </>
    );
}

export default GiftExpertApp;