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
export type FaChairProps = typeof __propDef.props;
export type FaChairEvents = typeof __propDef.events;
export type FaChairSlots = typeof __propDef.slots;
export default class FaChair extends SvelteComponentTyped<FaChairProps, FaChairEvents, FaChairSlots> {
}
export {};
