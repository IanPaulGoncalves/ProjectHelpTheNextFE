import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PostCard from '../../components/Post/PostCard';
import NavBar from './NavBar';

const useStyles = makeStyles({
  root: {
    width: '75%',
    marginLeft: 10,
    '@media(max-width: 700px)': {
      width: '100%',
      marginLeft: 0,
      marginBottom: 10
    }
  }
});

const post = [
  {
    id: 1,
    image: 'https://mixdeseries.com.br/wp-content/uploads/2018/07/will-smith-4-e1534947669898.jpg',
    name: 'Ian Paulo',
    time: '20:00',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda?',
    description: 'Descrição da pergunta. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 65,
    comment: 20,
    tags: [
      {
        id: 1,
        tag: '#Java',
        link: 'https://scshvbisbv'
      },
      {
        id: 2,
        tag: '#Python',
        link: 'https://ssbcusbwcw'
      },
      {
        id: 3,
        tag: '#Ruby',
        link: 'https://scsuyabciu'
      }
    ]
  },
  {
    id: 2,
    image: 'https://sismf.museudofutebol.org.br/anexos/imagem/515923/w:640/h:640/c:0',
    name: 'Ronaldinho Gaúcho',
    time: '20:15',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda?',
    description: 'Descrição da pergunta. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 51,
    comment: 10,
    tags: [
      {
        id: 1,
        tag: '#Futebol',
        link: 'https://scshvbisbv'
      },
      {
        id: 2,
        tag: '#Bruxo',
        link: 'https://ssbcusbwcw'
      },
      {
        id: 3,
        tag: '#Brasileiro',
        link: 'https://scsuyabciu'
      }
    ]
  },
  {
    id: 3,
    image: 'https://portalrapmais.com/wp-content/uploads/2020/12/neymar-jr-mexe-celular-meio-treino-instagram_376036_36.jpg',
    name: 'Neymar Jr',
    time: '12:00',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda?',
    description: 'Descrição da pergunta. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 50,
    comment: 30,
    tags: [
      {
        id: 1,
        tag: '#Futebol',
        link: 'https://scshvbisbv'
      },
      {
        id: 2,
        tag: '#Brasileiro',
        link: 'https://ssbcusbwcw'
      },
      {
        id: 3,
        tag: '#Menino ney',
        link: 'https://scsuyabciu'
      }
    ]
  },
  {
    id: 4,
    image: 'https://conteudo.imguol.com.br/c/noticias/e7/2021/02/27/cristiano-ronaldo-comemora-seu-gol-no-empate-por-1-a-1-da-juventus-com-o-hellas-verona-1614466167994_v2_1920x1280.jpg',
    name: 'Cristiano Ronaldo',
    time: '12:10',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda?',
    description: 'Descrição da pergunta. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 50,
    comment: 30,
    tags: [
      {
        id: 1,
        tag: '#Futebol',
        link: 'https://scshvbisbv'
      },
      {
        id: 2,
        tag: '#Teste',
        link: 'https://ssbcusbwcw'
      }
    ]
  },
  {
    id: 5,
    image: 'https://www.gazetaesportiva.com/wp-content/uploads/imagem/2021/04/01/Messi.jpg',
    name: 'Messi',
    time: '12:15',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda?',
    description: 'Descrição da pergunta. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 50,
    comment: 30,
    tags: [
      {
        id: 1,
        tag: '#Futebol',
        link: 'https://scshvbisbv'
      }, {
        id: 2,
        tag: '#Teste',
        link: 'https://ssbcusbwcw'
      },
      {
        id: 3,
        tag: '#ET',
        link: 'https://ssbcusbwcw'
      }
    ]
  }
];

function Feed() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <div>
          <Typography style={{ color: '#9e9e9e' }} variant="h6" gutterBottom>
            Perguntas em alta:
          </Typography>
        </div>
        {
        post !== undefined && post.length > 0
          ? post.map(item => {
            const myTags: any = item.tags !== undefined ? item.tags.map(tags => tags) : [];

            return (
              <PostCard
                key={item.id}
                image={item.image}
                name={item.name}
                time={item.time}
                question={item.question}
                description={item.description}
                like={item.likes}
                comment={item.comment}
                tag={myTags}
              />
            );
          })
          : ''
      }
      </div>
    </>
  );
}

export default Feed;