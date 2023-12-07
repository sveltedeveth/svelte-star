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
export type DiNodejsProps = typeof __propDef.props;
export type DiNodejsEvents = typeof __propDef.events;
export type DiNodejsSlots = typeof __propDef.slots;
export default class DiNodejs extends SvelteComponentTyped<DiNodejsProps, DiNodejsEvents, DiNodejsSlots> {
}
export {};
