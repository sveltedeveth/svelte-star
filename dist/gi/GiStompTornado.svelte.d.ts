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
export type GiStompTornadoProps = typeof __propDef.props;
export type GiStompTornadoEvents = typeof __propDef.events;
export type GiStompTornadoSlots = typeof __propDef.slots;
export default class GiStompTornado extends SvelteComponentTyped<GiStompTornadoProps, GiStompTornadoEvents, GiStompTornadoSlots> {
}
export {};
