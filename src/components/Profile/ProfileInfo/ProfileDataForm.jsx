import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import s from "../../common/FormsControls/FormsControls.module.css"

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <div><button>save</button></div>

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full Name: </b>{createField("Full name", "fullName", [], Input)}
            </div>

            <div>
                <b>Looking for a job: </b>
                {createField("", "lookingForAJob", [], "input", { type: "checkbox" })}
            </div>

            <div>
                <b>My professional skill: </b>
                {createField("My professional skill", "lookingForAJobDescription", [], Textarea)}
            </div>

            <div>
                <b>About me: </b>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>

            <div>
                <b>Contacts </b>:  {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                })}
            </div>

        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;