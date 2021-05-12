import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: '75%',
    padding: 16,
    marginLeft: 10
  },
  containerPost: {
    display: 'flex',
    width: '100%'
  },
  containerAvatar: {
    display: 'flex'
  },
  containerResponse: {
    display: 'flex',
    marginTop: 5,
    width: 50,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10
  }
});

// interface Props {
//   // eslint-disable-next-line react/require-default-props
//   label?: string;
// }

function Feed() {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <Paper className={classes.root}>
      <div>
        <Typography style={{ color: '#9e9e9e' }} variant="h6" gutterBottom>
          Perguntas em alta:
        </Typography>
      </div>
      <div>
        <div className={classes.containerPost}>
          <div className={classes.containerResponse}>
            <ThumbUpAltIcon style={{ color: '#bdbdbd' }} />
            <span>0</span>
            <QuestionAnswerIcon style={{ color: '#bdbdbd' }} />
            <span>0</span>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', width: '100%'
          }}
          >
            <div className={classes.containerAvatar}>
              <div style={{ marginTop: 5 }}>
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div style={{ marginLeft: 10 }}>
                <Typography style={{ marginBottom: 0 }} variant="h6" gutterBottom>
                  Nome vai ficar aqui
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Postado há 2hrs
                </Typography>
              </div>
            </div>
            <Divider style={{ margin: 5 }} />
            <Link style={{ fontSize: 18 }} href="#" onClick={preventDefault}>
              Aqui vai ficar alguma pergunta sobre um tipo específico.
              Aqui vai ficar alguma pergunta sobre um tipo específico.
              Aqui vai ficar alguma pergunta sobre um tipo específico.
            </Link>
            <span>
              Aqui vai ficar o entendimento da questão.
              Aqui vai ficar o entendimento da questão.
              Aqui vai ficar o entendimento da questão.
              Aqui vai ficar o entendimento da questão...
            </span>
          </div>
        </div>
        <Divider style={{ margin: 16 }} />
      </div>

      <div>
        <div className={classes.containerPost}>
          <div className={classes.containerResponse}>
            <ThumbUpAltIcon style={{ color: '#bdbdbd' }} />
            <span>0</span>
            <QuestionAnswerIcon style={{ color: '#bdbdbd' }} />
            <span>0</span>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'column', width: '100%'
          }}
          >
            <div className={classes.containerAvatar}>
              <div style={{ marginTop: 5 }}>
                <Avatar alt="Remy Sharp" src="" />
              </div>
              <div style={{ marginLeft: 10 }}>
                <Typography style={{ marginBottom: 0 }} variant="h6" gutterBottom>
                  Nome vai ficar aqui
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Postado há 2hrs
                </Typography>
              </div>
            </div>
            <Divider style={{ margin: 5 }} />
            <Link style={{ fontSize: 18 }} href="#" onClick={preventDefault}>
              Aqui vai ficar alguma pergunta sobre um tipo específico.
              Aqui vai ficar alguma pergunta sobre um tipo específico.
              Aqui vai ficar alguma pergunta sobre um tipo específico.
            </Link>
            <span>
              Aqui vai ficar o entendimento da questão.
              Aqui vai ficar o entendimento da questão.
              Aqui vai ficar o entendimento da questão.
              Aqui vai ficar o entendimento da questão...
            </span>
          </div>
        </div>
        <Divider style={{ margin: 16 }} />
      </div>
    </Paper>
  );
  // style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
}

export default Feed;