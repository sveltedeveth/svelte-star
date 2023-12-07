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
export type FaExclamationProps = typeof __propDef.props;
export type FaExclamationEvents = typeof __propDef.events;
export type FaExclamationSlots = typeof __propDef.slots;
export default class FaExclamation extends SvelteComponentTyped<FaExclamationProps, FaExclamationEvents, FaExclamationSlots> {
}
export {};
