import {gql} from '@apollo/client';

const Headlines = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?country=us&category=technology"
      ) {
      totalResults
      articles @type(name: "ArticlePayload") {
        title

        source @type(name: "SourcePayload") {
          name
        }
      }
    }
  }
`;

export default Headlines;
