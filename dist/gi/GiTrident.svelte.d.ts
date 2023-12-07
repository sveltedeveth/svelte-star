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
export type GiTridentProps = typeof __propDef.props;
export type GiTridentEvents = typeof __propDef.events;
export type GiTridentSlots = typeof __propDef.slots;
export default class GiTrident extends SvelteComponentTyped<GiTridentProps, GiTridentEvents, GiTridentSlots> {
}
export {};
