import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Pruebas en <PubllicRoute />', () => { 
    
    test('Si no esta autenticado debe mostrar el children', () => { 

        const contextValue = {
            logged: false
        }
        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

       // screen.debug();
        expect(screen.getByText('Ruta Pública')).toBeTruthy();

    });

    test('Debe de navegar si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Strider'
            }
        }
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={ <h1>Página de Marvel</h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página de Marvel')).toBeTruthy();

        //screen.debug();

    });
 })


