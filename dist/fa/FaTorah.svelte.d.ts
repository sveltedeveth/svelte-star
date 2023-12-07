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
export type FaTorahProps = typeof __propDef.props;
export type FaTorahEvents = typeof __propDef.events;
export type FaTorahSlots = typeof __propDef.slots;
export default class FaTorah extends SvelteComponentTyped<FaTorahProps, FaTorahEvents, FaTorahSlots> {
}
export {};
