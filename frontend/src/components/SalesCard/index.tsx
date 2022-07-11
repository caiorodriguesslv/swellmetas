import './styles.css';
import NotificationButton from '../NotificationButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);


    return (
        <div className="swell-card">
            <h2 className="swell-sales-title">Vendas</h2>
            <div className="swell-form-control-container">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="swell-form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="swell-form-control-container">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="swell-form-control"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div>
                <table className="swell-sales-table">

                    <thead>
                        <tr>
                            <th className="s992">ID</th>
                            <th className="s576">Data</th>
                            <th>Vendedor</th>
                            <th className="s992">Visitas</th>
                            <th className="s992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="s992">#382</td>
                            <td className="s576">08/07/2022</td>
                            <td>Fernando</td>
                            <td className="s992">#15</td>
                            <td className="s992">11</td>
                            <td>R$ 20000.00</td>
                            <td>
                                <div className="swell-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="s992">#382</td>
                            <td className="s576">08/07/2022</td>
                            <td>Joana Darc</td>
                            <td className="s992">#15</td>
                            <td className="s992">11</td>
                            <td>R$ 54000.00</td>
                            <td>
                                <div className="swell-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="s992">#382</td>
                            <td className="s576">08/07/2022</td>
                            <td>Guilherme</td>
                            <td className="s992">#15</td>
                            <td className="s992">11</td>
                            <td>R$ 34000.00</td>
                            <td>
                                <div className="swell-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default SalesCard