import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Mail, Phone, MapPin, BookOpen, Zap, Users, Settings, Headphones, Monitor } from 'lucide-react'
import tecnojanLogo from './assets/tecnojan-logo.png'
import capaEducacaoAntirracista from './assets/capa_educacao_antirracista.jpg'
import capaEducacaoFinanceira from './assets/capa_educacao_financeira.png'
import capaAlemDoClick from './assets/capa_alem_do_click.png'
import './App.css'

// Dados fixos dos livros
const livrosFixos = [
  {
    id: 1,
    titulo: "Educação Antirracista",
    subtitulo: "O que ainda temos que aprender",
    autor: "Washington Evangelista do Santos e Jorge Assaf Netto",
    faixaEtaria: "13 a 18 anos",
    paginas: "219 páginas",
    preco: "R$ 220,00",
    imagem: capaEducacaoAntirracista,
    detalhes: "Em uma linguagem direta e voltada para adolescentes, este livro aborda questões fundamentais sobre racismo, diversidade e inclusão. Uma obra essencial para formar cidadãos conscientes e combater o preconceito desde cedo."
  },
  {
    id: 2,
    titulo: "Além do Click",
    subtitulo: "Pensamento crítico e combate às fake News",
    autor: "Washington Evangelista do Santos e Jorge Assaf Netto",
    faixaEtaria: "13 a 18 anos",
    paginas: "200 páginas",
    preco: "R$ 190,00",
    imagem: capaAlemDoClick,
    detalhes: "Em um mundo onde um simples clique pode espalhar informações falsas, este livro ensina jovens a desenvolver pensamento crítico e identificar fake news. Uma ferramenta indispensável para navegar com segurança no mundo digital."
  },
  {
    id: 3,
    titulo: "Educação Financeira e Inteligência Emocional para Jovens",
    subtitulo: "Como gastar com sabedoria, investir e fugir das dívidas",
    autor: "Washington Evangelista do Santos e Jorge Assaf Netto",
    faixaEtaria: "13 a 18 anos",
    paginas: "200 páginas",
    preco: "R$ 200,00",
    imagem: capaEducacaoFinanceira,
    detalhes: "Você já pensou em como suas emoções influenciam suas decisões financeiras? Este livro combina educação financeira com inteligência emocional, ensinando jovens a tomar decisões conscientes sobre dinheiro e construir um futuro próspero."
  }
]

// Configuração do site
const siteConfig = {
  hero: {
    titulo: "Tecnojan",
    descricao: "Transformando o futuro através da educação, tecnologia e sustentabilidade",
    botaoPrimario: "Conheça nossos produtos",
    botaoSecundario: "Saiba mais sobre nós"
  },
  sobre: {
    titulo: "Sobre a Tecnojan",
    historia: {
      titulo: "Nossa História",
      paragrafo1: "A Tecnojan é fruto de uma trajetória de inovação que começou com a Senior Informática Ltda., empresa pioneira no desenvolvimento de soluções tecnológicas para atendimento ao público.",
      paragrafo2: "Fomos pioneiros em soluções omnichannel para atendimento ao público, integrando plataformas presenciais, totens de autoatendimento e sistemas web aos ambientes corporativos de nossos clientes (como SAP, CRM, ERP e CGO). Nossa tecnologia já foi adotada por grandes empresas e instituições, incluindo Telebahia, Vivo, Brasil Telecom/Oi, Prefeitura de Salvador, Governo da Bahia e Receita Federal."
    },
    areas: {
      titulo: "Nossas Áreas de Atuação",
      lista: [
        "Editora especializada em conteúdos educacionais para o empoderamento de adolescentes, para promover desenvolvimento pessoal e transformação social.",
        "Desenvolvimento e integração de sistemas e projetos de inclusão digital urbana e rural",
        "Gestão documental inteligente: digitalização de documentos com OCR, ICR e Inteligência Artificial."
      ]
    },
    missao: {
      titulo: "Missão",
      texto: "Promover a transformação social através da educação transformadora, soluções tecnológicas inovadoras e práticas sustentáveis concretas."
    },
    visao: {
      titulo: "Visão",
      texto: "Ser referência em editora educacional para adolescentes e em soluções tecnológicas sustentáveis."
    },
    valores: {
      titulo: "Valores",
      texto: "Pautar nossas ações por: Inovação disruptiva, Inclusão efetiva, Sustentabilidade real e prática, Excelência operacional e Ética inegociável."
    }
  },
  produtos: {
    titulo: "Nossos Produtos",
    subtitulo: "Soluções completas em duas áreas principais",
    categorias: {
      editora: {
        nome: "📚 Editora",
        titulo: "Catálogo de Livros Educacionais",
        descricao: "Livros especializados para adolescentes de 13 a 18 anos"
      },
      tecnologia: {
        nome: "💻 Tecnologia e Inovação"
      }
    }
  },
  tecnologia: {
    titulo: "Soluções Tecnológicas Inovadoras",
    subtitulo: "Desenvolvemos sistemas integrados para transformação digital",
    sistemas: {
      atendimento: {
        titulo: "Sistemas de Atendimento",
        descricao: "Plataformas omnichannel para atendimento ao público",
        itens: [
          "Integração com SAP, CRM, ERP e CGO",
          "Totens de autoatendimento inteligentes",
          "Plataformas web responsivas",
          "Soluções presenciais integradas"
        ]
      },
      integracao: {
        titulo: "Integração e Digitalização",
        descricao: "Gestão documental inteligente e inclusão digital",
        itens: [
          "Digitalização com OCR e ICR",
          "Inteligência Artificial aplicada",
          "Projetos de inclusão digital urbana e rural",
          "Sistemas de gestão documental"
        ]
      }
    }
  },
  contato: {
    titulo: "Contato",
    subtitulo: "Entre em contato conosco",
    informacoes: {
      email: "contato@tecnojan.com.br",
      telefone: "Telefone (71) 98721-7849",
      website: "www.tecnojan.com.br"
    }
  }
}

function App() {
  const [activeProductCategory, setActiveProductCategory] = useState('editora')
  const [selectedLivro, setSelectedLivro] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openLivroModal = (livro) => {
    setSelectedLivro(livro)
    setIsModalOpen(true)
  }

  const closeLivroModal = () => {
    setSelectedLivro(null)
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src={tecnojanLogo} 
                alt="Tecnojan" 
                className="h-12 w-auto border-2 border-amber-500 rounded-md shadow-md shadow-amber-500/30"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Button variant="ghost" className="text-amber-600 hover:text-amber-700" onClick={() => scrollToSection('hero')}>Início</Button>
              <Button variant="ghost" className="hover:text-amber-600" onClick={() => scrollToSection('sobre')}>Sobre Nós</Button>
              <Button variant="ghost" className="hover:text-amber-600" onClick={() => scrollToSection('produtos')}>Produtos</Button>
              <Button variant="ghost" className="hover:text-amber-600" onClick={() => scrollToSection('contato')}>Contato</Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src={tecnojanLogo} 
              alt={siteConfig.hero.titulo}
              className="h-80 w-auto mx-auto mb-8 max-w-full border-4 border-amber-500 rounded-lg shadow-lg shadow-amber-500/50"
            />
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {siteConfig.hero.descricao}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3" onClick={() => scrollToSection('produtos')}>
              {siteConfig.hero.botaoPrimario}
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3" onClick={() => scrollToSection('sobre')}>
              {siteConfig.hero.botaoSecundario}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {siteConfig.sobre.titulo}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-6">{siteConfig.sobre.historia.titulo}</h3>
              <p className="text-gray-600 mb-4">
                {siteConfig.sobre.historia.paragrafo1}
              </p>
              <p className="text-gray-600">
                {siteConfig.sobre.historia.paragrafo2}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-6">{siteConfig.sobre.areas.titulo}</h3>
              <div className="space-y-4">
                {siteConfig.sobre.areas.lista.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {index === 0 && <BookOpen className="h-6 w-6 text-amber-600" />}
                    {index === 1 && <Users className="h-6 w-6 text-amber-600" />}
                    {index === 2 && <Zap className="h-6 w-6 text-amber-600" />}
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-amber-600">{siteConfig.sobre.missao.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {siteConfig.sobre.missao.texto}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-amber-600">{siteConfig.sobre.visao.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {siteConfig.sobre.visao.texto}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-amber-600">{siteConfig.sobre.valores.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {siteConfig.sobre.valores.texto}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{siteConfig.produtos.titulo}</h2>
            <p className="text-gray-600">
              {siteConfig.produtos.subtitulo}
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <Button
              variant={activeProductCategory === 'editora' ? 'default' : 'outline'}
              className={activeProductCategory === 'editora' ? 'bg-amber-600 hover:bg-amber-700' : 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'}
              onClick={() => setActiveProductCategory('editora')}
            >
              {siteConfig.produtos.categorias.editora.nome}
            </Button>
            <Button
              variant={activeProductCategory === 'tecnologia' ? 'default' : 'outline'}
              className={activeProductCategory === 'tecnologia' ? 'bg-amber-600 hover:bg-amber-700' : 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'}
              onClick={() => setActiveProductCategory('tecnologia')}
            >
              {siteConfig.produtos.categorias.tecnologia.nome}
            </Button>
          </div>

          {/* Editora Content */}
          {activeProductCategory === 'editora' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">{siteConfig.produtos.categorias.editora.titulo}</h3>
                <p className="text-gray-600">{siteConfig.produtos.categorias.editora.descricao}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {livrosFixos.map((livro) => (
                  <Card key={livro.id} className="overflow-hidden">
                    <div className="aspect-[3/4] bg-gray-200">
                      <img 
                        src={livro.imagem} 
                        alt={livro.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-gray-900 mb-2">{livro.titulo}</h4>
                      <p className="text-sm text-gray-600 mb-2">{livro.subtitulo}</p>
                      <p className="text-sm text-amber-600 mb-1">por {livro.autor}</p>
                      <p className="text-xs text-gray-500 mb-2">{livro.faixaEtaria} • {livro.paginas}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-amber-600">{livro.preco}</span>
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700" onClick={() => openLivroModal(livro)}>
                          Ver mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => scrollToSection('contato')}>
                  Entre em contato
                </Button>
              </div>
            </div>
          )}

          {/* Tecnologia Content */}
          {activeProductCategory === 'tecnologia' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">{siteConfig.tecnologia.titulo}</h3>
                <p className="text-gray-600">{siteConfig.tecnologia.subtitulo}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Headphones className="h-8 w-8 text-amber-600" />
                      <CardTitle className="text-amber-600">{siteConfig.tecnologia.sistemas.atendimento.titulo}</CardTitle>
                    </div>
                    <CardDescription>{siteConfig.tecnologia.sistemas.atendimento.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      {siteConfig.tecnologia.sistemas.atendimento.itens.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Monitor className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Settings className="h-8 w-8 text-amber-600" />
                      <CardTitle className="text-amber-600">{siteConfig.tecnologia.sistemas.integracao.titulo}</CardTitle>
                    </div>
                    <CardDescription>{siteConfig.tecnologia.sistemas.integracao.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      {siteConfig.tecnologia.sistemas.integracao.itens.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Settings className="h-4 w-4 text-amber-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => scrollToSection('contato')}>
                  Entre em contato
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{siteConfig.contato.titulo}</h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-8">{siteConfig.contato.subtitulo}</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-amber-600" />
                <span className="text-gray-700 text-lg">{siteConfig.contato.informacoes.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-amber-600" />
                <span className="text-gray-700 text-lg">{siteConfig.contato.informacoes.telefone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 text-amber-600" />
                <span className="text-gray-700 text-lg">{siteConfig.contato.informacoes.website}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Detalhes do Livro */}
      {isModalOpen && selectedLivro && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{selectedLivro.titulo}</h3>
              <Button variant="ghost" onClick={closeLivroModal}>X</Button>
            </div>
            <img 
              src={selectedLivro.imagem} 
              alt={selectedLivro.titulo}
              className="w-full max-h-96 object-contain mb-4 rounded-md"
            />
            <p className="text-gray-700 mb-4">{selectedLivro.detalhes}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Subtítulo:</strong> {selectedLivro.subtitulo}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Autor:</strong> {selectedLivro.autor}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Faixa Etária:</strong> {selectedLivro.faixaEtaria}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Páginas:</strong> {selectedLivro.paginas}</p>
            <p className="text-lg font-bold text-amber-600"><strong>Preço:</strong> {selectedLivro.preco}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
