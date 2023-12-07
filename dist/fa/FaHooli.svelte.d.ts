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
export type FaHooliProps = typeof __propDef.props;
export type FaHooliEvents = typeof __propDef.events;
export type FaHooliSlots = typeof __propDef.slots;
export default class FaHooli extends SvelteComponentTyped<FaHooliProps, FaHooliEvents, FaHooliSlots> {
}
export {};
