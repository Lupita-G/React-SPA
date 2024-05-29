import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navigationbar } from "../../../src/ui/components/Navigationbar";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navigationbar />', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Batman'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navigationbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Batman')).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando se hace el click en el boton', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navigationbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
    });
 })