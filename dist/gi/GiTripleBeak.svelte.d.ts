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
export type GiTripleBeakProps = typeof __propDef.props;
export type GiTripleBeakEvents = typeof __propDef.events;
export type GiTripleBeakSlots = typeof __propDef.slots;
export default class GiTripleBeak extends SvelteComponentTyped<GiTripleBeakProps, GiTripleBeakEvents, GiTripleBeakSlots> {
}
export {};
