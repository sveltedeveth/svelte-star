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
export type FaMixProps = typeof __propDef.props;
export type FaMixEvents = typeof __propDef.events;
export type FaMixSlots = typeof __propDef.slots;
export default class FaMix extends SvelteComponentTyped<FaMixProps, FaMixEvents, FaMixSlots> {
}
export {};
