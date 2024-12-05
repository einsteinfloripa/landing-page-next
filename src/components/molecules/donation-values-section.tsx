'use client'

const doacoes = [
    { valor: 5, descricao: 'Proporciona material didático para dois alunos por um mês' },
    { valor: 15, descricao: 'Proporciona material de aula para todos nossos professores e monitores por uma semana' },
    { valor: 25, descricao: 'Garante a participação de um aluno para todos os simulados ao longo do ano' },
    { valor: 60, descricao: 'Possibilita um mes de estudo para três alunos' },
    { valor: 100, descricao: 'Cobre todas as despesas de estudo de um aluno por meio ano letivo' }
  ];

export const DonationValuesSection = () => {
  return (
    <ul>
        {doacoes.map((doacao, index) => (
            <li key={doacao.valor}>
                <div className="flex gap-2 py-7" key={index}>
                    <p className="title-xl">R${doacao.valor}</p>
                    <p className="body-regular">{doacao.descricao}</p>
                </div>
                <hr className="border-app-blue-300 "/>
            </li>
        ))}
    </ul>
  );
};
