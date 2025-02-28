import React from 'react';
import Card from './Card/Card';

const list = [1, 2, 3, 4]

function ProyectSection(){
    
    return (
        <section className="flex justify-center flex-wrap gap-10">
            {list.map(item => {
                return <Card />
            })}
        </section>
    )
}

export default ProyectSection;