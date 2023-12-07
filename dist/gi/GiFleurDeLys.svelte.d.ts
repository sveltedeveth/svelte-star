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
export type GiFleurDeLysProps = typeof __propDef.props;
export type GiFleurDeLysEvents = typeof __propDef.events;
export type GiFleurDeLysSlots = typeof __propDef.slots;
export default class GiFleurDeLys extends SvelteComponentTyped<GiFleurDeLysProps, GiFleurDeLysEvents, GiFleurDeLysSlots> {
}
export {};
