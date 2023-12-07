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
export type FaSpinnerProps = typeof __propDef.props;
export type FaSpinnerEvents = typeof __propDef.events;
export type FaSpinnerSlots = typeof __propDef.slots;
export default class FaSpinner extends SvelteComponentTyped<FaSpinnerProps, FaSpinnerEvents, FaSpinnerSlots> {
}
export {};
