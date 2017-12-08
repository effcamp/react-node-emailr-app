import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { submitSurvey } from '../../actions';
import { withRouter } from 'react-router';

const SurveyFormReview = props => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {formFields.map(field => (
        <div key={field.name}>
          {' '}
          <label>{field.label}</label>
          <div>{props.formValues[field.name]}</div>{' '}
        </div>
      ))}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={props.onSurveyBack}
      >
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => props.submitSurvey(props.formValues, props.history)}
      >
        Send
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
