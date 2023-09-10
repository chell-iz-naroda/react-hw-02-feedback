import { Button, ButtonNeutral, ButtonBad } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => {
                return (
                    <Button
                        as="button"
                        type="button"
                        name={option}
                        variant={option}
                        key={option}
                        onClick={() => onLeaveFeedback(option)}
                    >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Button>
                    );
                })}
        </>
    );
}