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
export type FaCopyProps = typeof __propDef.props;
export type FaCopyEvents = typeof __propDef.events;
export type FaCopySlots = typeof __propDef.slots;
export default class FaCopy extends SvelteComponentTyped<FaCopyProps, FaCopyEvents, FaCopySlots> {
}
export {};
