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
export type GiBoliviaProps = typeof __propDef.props;
export type GiBoliviaEvents = typeof __propDef.events;
export type GiBoliviaSlots = typeof __propDef.slots;
export default class GiBolivia extends SvelteComponentTyped<GiBoliviaProps, GiBoliviaEvents, GiBoliviaSlots> {
}
export {};
