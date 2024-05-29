import { LoginPage, authReducer, types  } from "../../../src/auth";




describe('Pruebas en authReducer', () => { 

    const initialState = {
        logged: false
    }
    test('Debe de retornar el estado por defecto', () => {  

        const state = authReducer(initialState, {});
        expect( state ).toEqual(initialState);

    });

    test('Debe (login) llamar el login autenticar y establecer el user', () => {  
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '124'
            }
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    });

    test('Debe (logout) borrar el name del usuario y logged en false', () => {  
        const state = {
            logged: true,
            user: {
                id:'156',
                name:'Juan'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action);
        expect(newState).toEqual(initialState);
    });
})