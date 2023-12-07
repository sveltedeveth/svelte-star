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
export type FaQuestionCircleProps = typeof __propDef.props;
export type FaQuestionCircleEvents = typeof __propDef.events;
export type FaQuestionCircleSlots = typeof __propDef.slots;
export default class FaQuestionCircle extends SvelteComponentTyped<FaQuestionCircleProps, FaQuestionCircleEvents, FaQuestionCircleSlots> {
}
export {};
