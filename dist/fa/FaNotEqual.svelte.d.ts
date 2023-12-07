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
export type FaNotEqualProps = typeof __propDef.props;
export type FaNotEqualEvents = typeof __propDef.events;
export type FaNotEqualSlots = typeof __propDef.slots;
export default class FaNotEqual extends SvelteComponentTyped<FaNotEqualProps, FaNotEqualEvents, FaNotEqualSlots> {
}
export {};
