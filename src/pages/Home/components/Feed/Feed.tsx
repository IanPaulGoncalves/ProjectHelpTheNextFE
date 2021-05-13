import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PostCard from '../../../../components/Post/PostCard';

const useStyles = makeStyles({
  root: {
    width: '75%',
    padding: 16,
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
    likes: 5,
    comment: 10
  },
  {
    id: 2,
    image: 'https://sismf.museudofutebol.org.br/anexos/imagem/515923/w:640/h:640/c:0',
    name: 'Ronaldinho Gaúcho',
    time: '20:15',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda?',
    description: 'Descrição da pergunta. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 5,
    comment: 10
  }
];

function Feed() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div>
        <Typography style={{ color: '#9e9e9e' }} variant="h6" gutterBottom>
          Perguntas em alta:
        </Typography>
      </div>
      {
        post !== undefined && post.length > 0
          ? post.map(item => (
            <PostCard
              key={item.id}
              image={item.image}
              name={item.name}
              time={item.time}
              question={item.question}
              description={item.description}
              like={item.likes}
              comment={item.comment}
            />
          ))
          : ''
      }
    </Paper>
  );
}

export default Feed;