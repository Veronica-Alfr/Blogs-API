<main>
  <h1 align="center">Blogs API</h1>

  <p>
  A utilização da API de Blogs permite o gerenciamento do seu banco de dados para criação do metódo CRUD, ao qual o usuário é capaz de entrar em seu perfil para criar,   deletar e editar seus posts.
  
  The use of the Blogs API allows the management of your database for the creation of the CRUD method, which the user is able to enter in his profile to create, delete   and edit his posts.
  </p>

  <h3>Status do Projeto</h3>
  
    Finalizado ✅🚀
  
  <details>
    <summary><h3>Documentação</h3></summary>
    
    A documentação da API está disponível no site do Postman. Para acessar a documentação, siga estes passos:

  - Acesse a <a href="https://www.postman.com/veronica-alves/workspace/blogs-api/api/9c24b6d9-c492-4e9d-a0d5-59b927207933/documentation/21412246-19298d73-2497-4af2-b606-cbe07f9ad971">documentação</a>.
  - Se você não tiver uma conta no Postman, será necessário criar uma para acessá-la.
  - Depois de acessar a documentação, revise as solicitações, corpos e respostas para entender melhor como usar a API.

  </details>
 
  <details>
    <summary><h3>🐋 Rodando no Docker vs Localmente</h3></summary>
  
  ## 👉 Com Docker
 
  :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm lint, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto que podem gerar conflitos.

  - ✨ **Dica:** A extensão `Remote - Containers` é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto que podem gerar conflitos.

  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - **✨ Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

    <br/>
  </details>

  <h3>🛠 Tecnologias</h3>
  
  <p>As tecnologias usadas foram Node.js, Docker, JWT, Sequelize, MySQL, Eslint, Joi, Async Express Errors e Postman.</p>

### Autor

  <a href='https://github.com/Veronica-Alfr'>Verônica Alves</a>

  <details>
    <summary><h3>📜 Licença</summary>
 

      TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

      1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction, and
      distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by the copyright
      owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all other entities
      that control, are controlled by, or are under common control with that entity.
      For the purposes of this definition, "control" means (i) the power, direct or
      indirect, to cause the direction or management of such entity, whether by
      contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity exercising
      permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications, including
      but not limited to software source code, documentation source, and configuration
      files.

      "Object" form shall mean any form resulting from mechanical transformation or
      translation of a Source form, including but not limited to compiled object code,
      generated documentation, and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or Object form, made
      available under the License, as indicated by a copyright notice that is included
      in or attached to the work (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object form, that
      is based on (or derived from) the Work and for which the editorial revisions,
      annotations, elaborations, or other modifications represent, as a whole, an
      original work of authorship. For the purposes of this License, Derivative Works
      shall not include works that remain separable from, or merely link (or bind by
      name) to the interfaces of, the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including the original version
      of the Work and any modifications or additions to that Work or Derivative Works
      thereof, that is intentionally submitted to Licensor for inclusion in the Work
      by the copyright owner or by an individual or Legal Entity authorized to submit
      on behalf of the copyright owner. For the purposes of this definition,
      "submitted" means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems, and
      issue tracking systems that are managed by, or on behalf of, the Licensor for
      the purpose of discussing and improving the Work, but excluding communication
      that is conspicuously marked or otherwise designated in writing by the copyright
      owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity on behalf
      of whom a Contribution has been received by Licensor and subsequently
      incorporated within the Work.

      2. Grant of Copyright License.

      Subject to the terms and conditions of this License, each Contributor hereby
      grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
      irrevocable copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the Work and such
      Derivative Works in Source or Object form.

      3. Grant of Patent License.

      Subject to the terms and conditions of this License, each Contributor hereby
      grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
      irrevocable (except as stated in this section) patent license to make, have
      made, use, offer to sell, sell, import, and otherwise transfer the Work, where
      such license applies only to those patent claims licensable by such Contributor
      that are necessarily infringed by their Contribution(s) alone or by combination
      of their Contribution(s) with the Work to which such Contribution(s) was
      submitted. If You institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work or a
      Contribution incorporated within the Work constitutes direct or contributory
      patent infringement, then any patent licenses granted to You under this License
      for that Work shall terminate as of the date such litigation is filed.

      4. Redistribution.

      You may reproduce and distribute copies of the Work or Derivative Works thereof
      in any medium, with or without modifications, and in Source or Object form,
      provided that You meet the following conditions:

      You must give any other recipients of the Work or Derivative Works a copy of
      this License; and
      You must cause any modified files to carry prominent notices stating that You
      changed the files; and
      You must retain, in the Source form of any Derivative Works that You distribute,
      all copyright, patent, trademark, and attribution notices from the Source form
      of the Work, excluding those notices that do not pertain to any part of the
      Derivative Works; and
      If the Work includes a "NOTICE" text file as part of its distribution, then any
      Derivative Works that You distribute must include a readable copy of the
      attribution notices contained within such NOTICE file, excluding those notices
      that do not pertain to any part of the Derivative Works, in at least one of the
      following places: within a NOTICE text file distributed as part of the
      Derivative Works; within the Source form or documentation, if provided along
      with the Derivative Works; or, within a display generated by the Derivative
      Works, if and wherever such third-party notices normally appear. The contents of
      the NOTICE file are for informational purposes only and do not modify the
      License. You may add Your own attribution notices within Derivative Works that
      You distribute, alongside or as an addendum to the NOTICE text from the Work,
      provided that such additional attribution notices cannot be construed as
      modifying the License.
      You may add Your own copyright statement to Your modifications and may provide
      additional or different license terms and conditions for use, reproduction, or
      distribution of Your modifications, or for any such Derivative Works as a whole,
      provided Your use, reproduction, and distribution of the Work otherwise complies
      with the conditions stated in this License.

      5. Submission of Contributions.

      Unless You explicitly state otherwise, any Contribution intentionally submitted
      for inclusion in the Work by You to the Licensor shall be under the terms and
      conditions of this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify the terms of
      any separate license agreement you may have executed with Licensor regarding
      such Contributions.

      6. Trademarks.

      This License does not grant permission to use the trade names, trademarks,
      service marks, or product names of the Licensor, except as required for
      reasonable and customary use in describing the origin of the Work and
      reproducing the content of the NOTICE file.

      7. Disclaimer of Warranty.

      Unless required by applicable law or agreed to in writing, Licensor provides the
      Work (and each Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied,
      including, without limitation, any warranties or conditions of TITLE,
      NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are
      solely responsible for determining the appropriateness of using or
      redistributing the Work and assume any risks associated with Your exercise of
      permissions under this License.

      8. Limitation of Liability.

      In no event and under no legal theory, whether in tort (including negligence),
      contract, or otherwise, unless required by applicable law (such as deliberate
      and grossly negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special, incidental,
      or consequential damages of any character arising as a result of this License or
      out of the use or inability to use the Work (including but not limited to
      damages for loss of goodwill, work stoppage, computer failure or malfunction, or
      any and all other commercial damages or losses), even if such Contributor has
      been advised of the possibility of such damages.

      9. Accepting Warranty or Additional Liability.

      While redistributing the Work or Derivative Works thereof, You may choose to
      offer, and charge a fee for, acceptance of support, warranty, indemnity, or
      other liability obligations and/or rights consistent with this License. However,
      in accepting such obligations, You may act only on Your own behalf and on Your
      sole responsibility, not on behalf of any other Contributor, and only if You
      agree to indemnify, defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason of your
      accepting any such warranty or additional liability.

      END OF TERMS AND CONDITIONS

      APPENDIX: How to apply the Apache License to your work

      To apply the Apache License to your work, attach the following boilerplate
      notice, with the fields enclosed by brackets "{}" replaced with your own
      identifying information. (Don't include the brackets!) The text should be
      enclosed in the appropriate comment syntax for the file format. We also
      recommend that a file or class name and description of purpose be included on
      the same "printed page" as the copyright notice for easier identification within
      third-party archives.

         Copyright 2023 Verônica Alves

         Licensed under the Apache License, Version 2.0 (the "License");
         you may not use this file except in compliance with the License.
         You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing, software
         distributed under the License is distributed on an "AS IS" BASIS,
         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         See the License for the specific language governing permissions and
         limitations under the License.
  
  </details>
    
</main>


