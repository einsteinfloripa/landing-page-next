#!/bin/bash
# Este script gera definições de tipos TypeScript para os componentes do Storyblok no espaço especificado.

# 1. Carregar o arquivo .env e exportar todas as variáveis (apenas para o shell atual, por isso `set -a` e `set +a`)
set -a
source .env
set +a

# 2. Verificar se as variáveis de ambiente necessárias estão definidas
if [ -z "$STORYBLOK_PERSONAL_ACCESS_TOKEN" ]; then
    echo "STORYBLOK_PERSONAL_ACCESS_TOKEN não está definido. Por favor, defina-o ou atualize o arquivo .env."
    echo "Vá para https://app.storyblok.com/#/me/account?tab=token para obter seu token de acesso pessoal"
    exit 1
fi

if [ -z "$STORYBLOK_SPACE_ID" ]; then
    echo "STORYBLOK_SPACE_ID não está definido. Por favor, defina-o ou atualize o arquivo .env."
    exit 1
fi

# 3. Fazer login no Storyblok
storyblok logout
storyblok login --token ${STORYBLOK_PERSONAL_ACCESS_TOKEN} --region us

# 4. Puxar os componentes mais recentes do Storyblok
storyblok pull-components --space ${STORYBLOK_SPACE_ID}

# 5. Gerar definições de tipos TypeScript para os componentes
storyblok generate-typescript-typedefs \
    --sourceFilePaths ./components.${STORYBLOK_SPACE_ID}.json \
    --destinationFilePath ./src/utils/storyblok-types.generated.ts \
    --titlePrefix Storyblok \
    --titleSuffix ''

# 6. Remover o arquivo temporário de componentes
# Este arquivo é gerado pelo comando `pull-components` e não é necessário após a geração das definições de tipo.
rm ./components.${STORYBLOK_SPACE_ID}.json