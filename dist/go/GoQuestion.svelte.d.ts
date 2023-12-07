import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GoQuestionProps = typeof __propDef.props;
export type GoQuestionEvents = typeof __propDef.events;
export type GoQuestionSlots = typeof __propDef.slots;
export default class GoQuestion extends SvelteComponentTyped<GoQuestionProps, GoQuestionEvents, GoQuestionSlots> {
}
export {};
