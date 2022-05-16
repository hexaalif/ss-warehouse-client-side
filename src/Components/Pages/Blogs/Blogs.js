import React from 'react';
import { Accordion } from 'react-bootstrap';
import questionANDanswer from "../../../Images/Q&A.jpg"

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center fw-bolder pt-5 pb-5'>Blogs</h1>
            <div className="container mb-5 pb-5">
                <div className="row">
                    <div className="col-md-6">
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                        <Accordion.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <p><b>Javascript</b></p>
                                <ul>
                                    <li>Javascript is written in C++, it is a upgraded version of ECMA script</li>
                                    <li>It focuses on Fronted Development</li>
                                    <li>It can administrate over html and DOM</li>
                                    <li>Brower is a way to see result of javascript</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p><b>Node js</b></p>
                                <ul>
                                    <li>Node js is written in C,C++ and Javascript</li>
                                    <li>It focuses on Backend Development</li>
                                    <li>It is not capable of administrate over html tags</li>
                                    <li>With the help of node js, we can run javascript outside</li>
                                </ul>
                            </div>
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Differences between sql and nosql databases</Accordion.Header>
                        <Accordion.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <p><b>SQL</b></p>
                                <ul>
                                    <li>SQL is known as Relational Database Management System</li>
                                    <li>Works like fixed or static way</li>
                                    <li>Not flexbible with hierarchical data storage</li>
                                    <li>Performs excellent in Complex queries</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p><b>NoSQL</b></p>
                                <ul>
                                    <li>NoSQL is known as Non-relational database system</li>
                                    <li>works like dynamic way</li>
                                    <li>Flexible with heirarchical data storage</li>
                                    <li>performs poor in complex queries</li>
                                </ul>
                            </div>
                        </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>When should we use NodeJS and when should we use MongoDB?</Accordion.Header>
                        <Accordion.Body>
                        NodeJs and MongoDB both works for different part of web server system. For NodeJs, it offers basic support to interpret code. Codes in javascript language, nodeJs is a great tool to interpret code output. For MongoDB, It works consistantly to update or query over database. so, If you are likely to update your data MongoDB like database is must.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={questionANDanswer} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;