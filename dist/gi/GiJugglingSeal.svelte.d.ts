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
export type GiJugglingSealProps = typeof __propDef.props;
export type GiJugglingSealEvents = typeof __propDef.events;
export type GiJugglingSealSlots = typeof __propDef.slots;
export default class GiJugglingSeal extends SvelteComponentTyped<GiJugglingSealProps, GiJugglingSealEvents, GiJugglingSealSlots> {
}
export {};
