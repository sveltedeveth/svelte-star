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
export type DiNodejsSmallProps = typeof __propDef.props;
export type DiNodejsSmallEvents = typeof __propDef.events;
export type DiNodejsSmallSlots = typeof __propDef.slots;
export default class DiNodejsSmall extends SvelteComponentTyped<DiNodejsSmallProps, DiNodejsSmallEvents, DiNodejsSmallSlots> {
}
export {};
