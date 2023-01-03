import React, { useState} from 'react'
import Button from '@mui/material/Button';
import {api} from "../constants";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Articles() {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(false)
  const [error, setError] = useState('')

  const getFetchArticles = async () => {
    setloading(true)
    setError('')
    try {
      const res = await fetch(api)
      if (res.ok) {
        const data = await res.json()
        setArticles(data)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setloading(false)
    }
  }

  return (
    <>
      <h1>Articles</h1>
      <Button
        variant="contained"
        color="success"
        onClick={getFetchArticles}
      >
        GET API
      </Button>
      {loading && (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress/>
        </Box>
      )}
      {!loading && articles.map((article) => (
        <Box sx={{display: 'flex', justifyContent: 'center'}} key={article.id}>
          <Card sx={{minWidth: '100%'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={article.imageUrl}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
      {error &&
        <div>
          <Button
            variant="contained"
            color="success"
            onClick={getFetchArticles}
          >
            Retry
          </Button>
          <p style={{color: 'red'}}>{error}</p>
        </div>}

    </>
  )
}