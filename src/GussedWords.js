import React from 'react';
import PropTypes from 'prop-types';

const GussedWords = (props) => {
  let contents;
  if(props.guessedWords.length === 0) {
    contents = (
        <span data-test="guess-instructions">
            Try to guess the secret word!
        </span>
    )
  } else {
      const gussedWordsRow = props.gussedWords.map((word, index) => (
        <tr data-test="gussed-word" key={index}>
            <td>{word.gussedWord}</td>
            <td>{word.letterMatchCount}</td>
        </tr>
      ));

      contents = (
        <div data-test="gussed-words">
            <h3>Gussed Words</h3>
            <table>
                <thead>
                    <tr>
                        <th>Guess</th>
                        <th>Matching Letters</th>
                    </tr>
                </thead>
                <tbody>
                    {gussedWordsRow}
                </tbody>
            </table>
        </div>
      );
  }
  
    return (
    <div data-test="component-guessed-words">
        {contents}
    </div>
);
};

GussedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
          guessedWord: PropTypes.string.isRequired,
          letterMatchCount: PropTypes.number.isRequired,
        })
      ).isRequired,
};

export default GussedWords;
