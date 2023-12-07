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
export type GiTornadoDiscsProps = typeof __propDef.props;
export type GiTornadoDiscsEvents = typeof __propDef.events;
export type GiTornadoDiscsSlots = typeof __propDef.slots;
export default class GiTornadoDiscs extends SvelteComponentTyped<GiTornadoDiscsProps, GiTornadoDiscsEvents, GiTornadoDiscsSlots> {
}
export {};
