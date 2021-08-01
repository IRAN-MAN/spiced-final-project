import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";
import Button from "../Button";

export default function CookbookForm() {
    const [inputValues, handleChange] = useStatefulFields();

    return (
        <div className="formWrapper">
            <label htmlFor="cookbook_name" value="First Name">
                Your Cookbook Name
                <input
                    type="text"
                    name="cookbook_name"
                    placeholder="Cookbook Name"
                    required
                    onChange={handleChange}
                />
            </label>
            <Button
                labeltext="Create Cookbook"
                type="submit"
                classNames="button submit-button"
                icon="send"
            />
        </div>
    );
}
