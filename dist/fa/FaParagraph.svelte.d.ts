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
export type FaParagraphProps = typeof __propDef.props;
export type FaParagraphEvents = typeof __propDef.events;
export type FaParagraphSlots = typeof __propDef.slots;
export default class FaParagraph extends SvelteComponentTyped<FaParagraphProps, FaParagraphEvents, FaParagraphSlots> {
}
export {};
