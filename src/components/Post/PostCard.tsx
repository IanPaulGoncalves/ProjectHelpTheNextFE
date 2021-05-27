import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
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
  },
  cardAction: {
    display: 'flex',
    padding: 5,
    alignItems: 'center'
  },
  containderAction: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
  tag: Array<object>;
  onClick?: any;
  type?: string;
}

function PostCard(props: Props) {
  const classes = useStyles();

  return (
    <Paper style={{ padding: 10, marginBottom: 10 }}>
      <div className={classes.containerPost}>
        {props.type === 'feed' && (
        <div className={classes.containerResponse}>
          <CardActions className={classes.cardAction}>
            <div className={classes.containderAction}>
              <IconButton aria-label="like" style={{ padding: 4 }}>
                <ThumbUpAltIcon style={{ color: '#bdbdbd' }} />
              </IconButton>
              <Typography color="textSecondary" variant="body2">{props.like}</Typography>
            </div>
          </CardActions>
          <CardActions className={classes.cardAction}>
            <div className={classes.containderAction}>
              <IconButton aria-label="comment" style={{ padding: 4 }}>
                <QuestionAnswerIcon style={{ color: '#bdbdbd' }} />
              </IconButton>
              <Typography color="textSecondary" variant="body2">{props.comment}</Typography>
            </div>
          </CardActions>
        </div>
        )}
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
          {props.type === 'feed'
            ? (
              <Link style={{ fontSize: 18, cursor: 'pointer' }} onClick={props.onClick}>
                {props.question}
              </Link>
            ) : (
              <span style={{ fontSize: 18 }}>
                {props.question}
              </span>
            )}
          <span>
            {props.description}
          </span>
        </div>
      </div>
      <Divider style={{
        marginTop: 15,
        marginBottom: 10
      }}
      />
      <div>
        {props.tag !== undefined && props.tag.length > 0
          ? (
            <>
              <span>Tags:</span>
              {props.tag.map((item: any) => (
                <span style={{ marginLeft: 10 }}>
                  <Link
                    key={item.id}
                    style={{ fontSize: 14 }}
                    href={`/search/${item.link}`}
                  >
                    {item.tag}
                  </Link>
                </span>
              ))}
            </>
          ) : ''}
      </div>
    </Paper>
  );
}

export default PostCard;