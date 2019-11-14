import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import hljs from 'highlight.js';
import { StateContext, DispatchContext } from '../context';
import { fetchArticle } from '../../utils/fetcher';
import { articleUpdate } from '../redux/action';
import './index.less';

function getSSRArticle(id: string) {
  if (__CLIENT__) {
    const node = document.getElementById(id);
    return node && node.innerHTML;
  }
  return '';
}

export default function(props: RouteComponentProps) {
  const { article } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const articleHTML = getSSRArticle('J_markdown');
  const articleTitleHTML = getSSRArticle('J_title');
  useEffect(() => {
    const { id } = props.match.params as { id: number };
    fetchArticle(id)
      .then(response => {
        dispatch(articleUpdate(response.data));
        document.title = `Ahungrynoob·${response.data.title}`;
        const codeList = document.querySelectorAll('.markdown-body pre code');
        codeList.forEach(dom => {
          if (dom.className.includes('language-')) {
            hljs.highlightBlock(dom);
          }
        });
      })
      .catch((e: Error) => {
        alert(e.message);
      });
    return () => {
      dispatch(articleUpdate({}));
    };
  }, []);
  return (
    <div>
      <h1 id="J_title">{article.title || articleTitleHTML}</h1>
      <div
        id="J_markdown"
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: article.body || articleHTML,
        }}
      />
    </div>
  );
}
