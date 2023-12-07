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
export type GiFishboneProps = typeof __propDef.props;
export type GiFishboneEvents = typeof __propDef.events;
export type GiFishboneSlots = typeof __propDef.slots;
export default class GiFishbone extends SvelteComponentTyped<GiFishboneProps, GiFishboneEvents, GiFishboneSlots> {
}
export {};
