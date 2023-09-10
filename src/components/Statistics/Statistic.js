import { SpanGood, SpanNeutral, SpanBad, SpanTotal, SpanPercent } from "./Statistic.styled";

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <SpanGood>Good: {good}</SpanGood>
            <SpanNeutral>Neutral: {neutral}</SpanNeutral>
            <SpanBad>Bad: {bad}</SpanBad>
            <SpanTotal>Total: {total}</SpanTotal>
            <SpanPercent>Positive feedback: {positivePercentage}%</SpanPercent>
        </>
    );
}