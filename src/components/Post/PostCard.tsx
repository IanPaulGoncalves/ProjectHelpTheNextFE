import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React from 'react';

const useStyles = makeStyles({
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

interface Props {
  image: string;
  name: string;
  time: string;
  question: string;
  description: string;
  comment: number;
  like: number;
}

function PostCard(props: Props) {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <div>
      <div className={classes.containerPost}>
        <div className={classes.containerResponse}>
          <ThumbUpAltIcon style={{ color: '#bdbdbd' }} />
          <span>{props.like}</span>
          <QuestionAnswerIcon style={{ color: '#bdbdbd' }} />
          <span>{props.comment}</span>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', width: '100%'
        }}
        >
          <div className={classes.containerAvatar}>
            <div style={{ marginTop: 5 }}>
              <Avatar alt="Remy Sharp" src={props.image} />
            </div>
            <div style={{ marginLeft: 10 }}>
              <Typography style={{ marginBottom: 0 }} variant="h6" gutterBottom>
                {props.name}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {`Postado há ${props.time}hrs`}
              </Typography>
            </div>
          </div>
          <Divider style={{ margin: 5 }} />
          <Link style={{ fontSize: 18 }} href="#/app" onClick={preventDefault}>
            {props.question}
          </Link>
          <span>
            {props.description}
          </span>
        </div>
      </div>
      <Divider style={{ margin: 16 }} />
    </div>
  );
}

export default PostCard;