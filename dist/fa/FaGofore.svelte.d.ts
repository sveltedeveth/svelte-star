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
export type FaGoforeProps = typeof __propDef.props;
export type FaGoforeEvents = typeof __propDef.events;
export type FaGoforeSlots = typeof __propDef.slots;
export default class FaGofore extends SvelteComponentTyped<FaGoforeProps, FaGoforeEvents, FaGoforeSlots> {
}
export {};
