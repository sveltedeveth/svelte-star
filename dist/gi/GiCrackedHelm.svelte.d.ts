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
export type GiCrackedHelmProps = typeof __propDef.props;
export type GiCrackedHelmEvents = typeof __propDef.events;
export type GiCrackedHelmSlots = typeof __propDef.slots;
export default class GiCrackedHelm extends SvelteComponentTyped<GiCrackedHelmProps, GiCrackedHelmEvents, GiCrackedHelmSlots> {
}
export {};
