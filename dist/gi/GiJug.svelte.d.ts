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
export type GiJugProps = typeof __propDef.props;
export type GiJugEvents = typeof __propDef.events;
export type GiJugSlots = typeof __propDef.slots;
export default class GiJug extends SvelteComponentTyped<GiJugProps, GiJugEvents, GiJugSlots> {
}
export {};
