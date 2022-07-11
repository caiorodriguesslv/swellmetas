import './styles.css'
import NotificationButton from '../NotificationButton'

function SalesCard() {
    return (
        <div className="swell-card">
            <h2 className="swell-sales-title">Vendas</h2>
            <div className="swell-form-control-container">
                <input className="swell-form-control" type="text" />
            </div>
            <div className="swell-form-control-container">
                <input className="swell-form-control" type="text" />
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