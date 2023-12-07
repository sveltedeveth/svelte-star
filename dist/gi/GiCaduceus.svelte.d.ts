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
export type GiCaduceusProps = typeof __propDef.props;
export type GiCaduceusEvents = typeof __propDef.events;
export type GiCaduceusSlots = typeof __propDef.slots;
export default class GiCaduceus extends SvelteComponentTyped<GiCaduceusProps, GiCaduceusEvents, GiCaduceusSlots> {
}
export {};
