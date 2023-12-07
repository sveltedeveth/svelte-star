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
export type FaCogsProps = typeof __propDef.props;
export type FaCogsEvents = typeof __propDef.events;
export type FaCogsSlots = typeof __propDef.slots;
export default class FaCogs extends SvelteComponentTyped<FaCogsProps, FaCogsEvents, FaCogsSlots> {
}
export {};
