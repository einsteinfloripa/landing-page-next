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
    <div className="flex flex-col justify-center">
        {doacoes.map((doacao, index) => (
            <>
                <div className="flex gap-2 py-8" key={index}>
                    <p className="font-bold text-2xl">R${doacao.valor}</p>
                    <p>{doacao.descricao}</p>
                </div>
                <hr className="border-[#B7B7B7] "/>
            </>
        ))}
    </div>
  );
};
