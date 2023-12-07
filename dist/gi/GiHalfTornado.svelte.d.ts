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
export type GiHalfTornadoProps = typeof __propDef.props;
export type GiHalfTornadoEvents = typeof __propDef.events;
export type GiHalfTornadoSlots = typeof __propDef.slots;
export default class GiHalfTornado extends SvelteComponentTyped<GiHalfTornadoProps, GiHalfTornadoEvents, GiHalfTornadoSlots> {
}
export {};
