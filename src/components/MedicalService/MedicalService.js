import React from 'react';
import { TbDental } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';
import { GiMedicines } from 'react-icons/gi';


const MedicalService = () => {
    return (
        <section class="container mb-5">
            <h5 class="text-center mt-5">Departments</h5>
            <h1 class="text-center mb-5">Our Medicals Service</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col">   
                    <div class="card border-0 h-100 p-4 text-center shadow-lg">
                        <div class="card-body">
                        <TbDental className='fs-2'></TbDental>
                            <h5 class="card-title mt-2">Dental CAre</h5>
                            <p class="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque?</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 h-100 p-4 text-center shadow-lg">
                        <div class="card-body">
                            <AiOutlineEye className='fs-2'></AiOutlineEye>
                            <h5 class="card-title mt-2">Eye Care</h5>
                            <p class="px-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, quas!</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 h-100 p-4 text-center shadow-lg">
                        <div class="card-body">
                            <GiMedicines className='fs-2'></GiMedicines>
                            <h5 class="card-title mt-2">Medicine</h5>
                            <p class="px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MedicalService;