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
export type GiIceBoltProps = typeof __propDef.props;
export type GiIceBoltEvents = typeof __propDef.events;
export type GiIceBoltSlots = typeof __propDef.slots;
export default class GiIceBolt extends SvelteComponentTyped<GiIceBoltProps, GiIceBoltEvents, GiIceBoltSlots> {
}
export {};
