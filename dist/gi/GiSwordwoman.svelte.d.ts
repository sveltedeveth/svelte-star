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
export type GiSwordwomanProps = typeof __propDef.props;
export type GiSwordwomanEvents = typeof __propDef.events;
export type GiSwordwomanSlots = typeof __propDef.slots;
export default class GiSwordwoman extends SvelteComponentTyped<GiSwordwomanProps, GiSwordwomanEvents, GiSwordwomanSlots> {
}
export {};
