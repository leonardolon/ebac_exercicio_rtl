import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve permitir adicionar dois comentários', () => {
        render(<PostComment/>);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.submit(screen.getByText('Comentar'));

        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.submit(screen.getByText('Comentar'));

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});