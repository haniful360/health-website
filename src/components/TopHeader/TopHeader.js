import React from 'react';
import { GoLocation } from 'react-icons/go';
import { IoIosCall } from 'react-icons/io';
import { AiOutlineMail, AiFillTwitterCircle ,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';

const TopHeader = () => {
    return (
        <div className='container py-2  '>
            <div className='row'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-2 align-items-center'>
                        <GoLocation className='text-primary'></GoLocation>
                        <small className='text-muted'>#block #c, road 10 :Mirpur Dhaka</small>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <IoIosCall className='text-primary'></IoIosCall>
                        <small className='text-muted'>any questions: ++125698455</small>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <AiOutlineMail className='text-primary'></AiOutlineMail>
                       <small className='text-muted'> kuddusali@gmail.com</small>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <BiTime className='text-primary'></BiTime>
                        <small className='text-muted'>Mon-Fri: 9.30am-4.30pm</small>
                        </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <a href="https://facebook.com" className='fs-5 text-muted'><BsFacebook></BsFacebook></a>
                        <a href="https://twitter.com" className='fs-5 text-muted'><AiFillTwitterCircle></AiFillTwitterCircle></a>
                        <a href="https://linkedin.com" className='fs-5 text-muted'><AiFillLinkedin></AiFillLinkedin></a>
                        <a href="https://youtube.com" className='fs-5 text-muted'><AiFillYoutube></AiFillYoutube></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;