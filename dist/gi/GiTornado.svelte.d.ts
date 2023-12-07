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
export type GiTornadoProps = typeof __propDef.props;
export type GiTornadoEvents = typeof __propDef.events;
export type GiTornadoSlots = typeof __propDef.slots;
export default class GiTornado extends SvelteComponentTyped<GiTornadoProps, GiTornadoEvents, GiTornadoSlots> {
}
export {};
