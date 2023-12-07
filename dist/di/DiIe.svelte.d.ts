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
export type DiIeProps = typeof __propDef.props;
export type DiIeEvents = typeof __propDef.events;
export type DiIeSlots = typeof __propDef.slots;
export default class DiIe extends SvelteComponentTyped<DiIeProps, DiIeEvents, DiIeSlots> {
}
export {};
