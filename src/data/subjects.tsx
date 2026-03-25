import {
  BookOpen,
  FlaskConical,
  Atom,
  Beaker,
  Palette,
  Dumbbell,
  Languages,
  BookText,
  Globe,
  Landmark,
  PenLine,
  Calculator,
  Users,
  Lightbulb,
} from "lucide-react";

export interface Assessment {
  type: "trabalho" | "tema" | "prova";
  date: string;
  title: string;
  description: string;
  points: string;
  status: "pending" | "done";
}

export interface Subject {
  name: string;
  professor: string;
  icon: React.ReactNode;
  color: string;
  assessments: Assessment[];
}

export const subjectsData: Subject[] = [
  {
    name: "Matemática",
    professor: "Prof. Marcia",
    icon: <Calculator className="w-5 h-5" />,
    color: "from-violet-500 to-indigo-600",
    assessments: [
      {
        type: "trabalho",
        date: "13/03",
        title: "Teste Geometria Plana",
        description: "Questões de geometria plana com foco nas Áreas",
        points: "2",
        status: "done",
      },
    ],
  },
  {
    name: "Biologia",
    professor: "Prof. Josiane",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-600",
    assessments: [
      {
        type: "trabalho",
        date: "05/03",
        title: "Atividade sobre Hereditariedade",
        description:
          "Completar a tabela com as informações e criar um 'filho' com características hereditárias",
        points: "1",
        status: "done",
      },
    ],
  },
  {
    name: "Física",
    professor: "Prof. Lielei",
    icon: <Atom className="w-5 h-5" />,
    color: "from-sky-500 to-blue-600",
    assessments: [],
  },
  {
    name: "Química",
    professor: "Prof. Suéli",
    icon: <Beaker className="w-5 h-5" />,
    color: "from-amber-500 to-orange-600",
    assessments: [
      {
        type: "trabalho",
        date: "01/04 ",
        title: "Trabalho em Grupo (jujubas)",
        description:
          "Trabalho com  gomas e palitos de dente em grupos de 3 a 4 pessoas",
        points: "2",
        status: "pending",
      },
      {
        type: "trabalho",
        date: "18/03 ",
        title: "Pesquisa Química Orgânica (caderno)",
        description:
          "Pesquisar história, subdivisões, aplicações, importância e diferença entre Orgânica e Inorgânica",
        points: "1",
        status: "done",
      },
    ],
  },
  {
    name: "Artes",
    professor: "Prof. Maria Luiza",
    icon: <Palette className="w-5 h-5" />,
    color: "from-yellow-600 to-yellow-900",
    assessments: [
      {
        type: "trabalho",
        date: "sem data",
        title: "Desenho seguindo um dos gêneros artísticos",
        description:
          "Fazer um desenho entre uma das opções: histórico, de gênero (cotidiano), retrato, paisagem, natureza-morta, abstração ou nu artístico",
        points: "?",
        status: "pending",
      },
    ],
  },
  {
    name: "Filosofia",
    professor: "Prof. Camilo",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "from-yellow-300 to-yellow-500",
    assessments: [
      {
        type: "trabalho",
        date: "24/03",
        title: "Apresentação dos Mitos",
        description:
          "(Copiar no caderno) Apresentar e contar a história do mito escolhido.",
        points: "1 - 3",
        status: "done",
      },
    ],
  },
  {
    name: "Sociologia",
    professor: "Prof. Camilo",
    icon: <Users className="w-5 h-5" />,
    color: "from-amber-200 to-amber-600",
    assessments: [],
  },
  {
    name: "Ed. Física",
    professor: "Prof. Luís Simão",
    icon: <Dumbbell className="w-5 h-5" />,
    color: "from-lime-500 to-green-600",
    assessments: [
      {
        type: "trabalho",
        date: "04/03",
        title: "Prova prática de handebol",
        description: "Efetuar o percurso com arremosos em trios",
        points: "1",
        status: "done",
      },
    ],
  },
  {
    name: "Inglês",
    professor: "Prof. Matheus",
    icon: <Languages className="w-5 h-5" />,
    color: "from-cyan-500 to-teal-600",
    assessments: [],
  },
  {
    name: "Português",
    professor: "Prof. Isis",
    icon: <BookText className="w-5 h-5" />,
    color: "from-fuchsia-500 to-purple-600",
    assessments: [
      {
        type: "trabalho",
        date: "30/03 - 03/04",
        title: "Teste sobre tipos de sujeito",
        description:
          "Questões avaliativas sobre os diversos tipos de sujeito (simples, composto, oculto, inexistente, etc.)",
        points: "?",
        status: "pending",
      },
    ],
  },
  {
    name: "Literatura",
    professor: "Prof. Claudia",
    icon: <BookOpen className="w-5 h-5" />,
    color: "from-rose-500 to-pink-600",
    assessments: [],
  },
  {
    name: "Geografia",
    professor: "Prof. Luís Girardon",
    icon: <Globe className="w-5 h-5" />,
    color: "from-teal-500 to-emerald-600",
    assessments: [
      {
        type: "trabalho",
        date: "13/03",
        title: "Pesquisa do Dia Mundial da Água",
        description:
          "Deve conter: capa, desenvolvimento, conclusão e referências bibliograficas.",
        points: "3",
        status: "done",
      },
    ],
  },
  {
    name: "História",
    professor: "Prof. Ariane",
    icon: <Landmark className="w-5 h-5" />,
    color: "from-yellow-500 to-amber-600",
    assessments: [],
  },
  {
    name: "Redação",
    professor: "Prof. Isis",
    icon: <PenLine className="w-5 h-5" />,
    color: "from-indigo-500 to-violet-600",
    assessments: [],
  },
  {
    name: "Res. de Prob.",
    professor: "Prof. Marcos",
    icon: <Calculator className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    assessments: [],
  },
];

export const getTotalPending = () => {
  return subjectsData.reduce((total, subject) => {
    // Filtra apenas as avaliações pendentes e soma ao total
    const pendingCount = subject.assessments.filter(
      (assessment) => assessment.status === "pending",
    ).length;

    return total + pendingCount;
  }, 0);
};
