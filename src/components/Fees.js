import React from 'react'
import { Container } from 'react-bootstrap'
import './CSS/Fees.css'

const Fees = () => {
    return (
        <div>
            <Container>
                <div className='F-title'><h4>please pay the match fees time to time.</h4></div>
                <div className='F-para'><p></p></div>
                <div className='F-table'>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <p>date</p>
                                </td>
                                <td>
                                    <p>Ground</p>
                                </td>
                                <td>
                                    <p>Type</p>
                                </td>
                                <td>
                                    <p>paid/unpaid</p>
                                </td>
                                <td>
                                    <p>price</p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div className='F-upi'>
                    <p>shubhamchikhale@icici
                    </p>
                </div>
                <div className='F-Qr'></div>


            </Container>
        </div>
    )
}

export default Fees
