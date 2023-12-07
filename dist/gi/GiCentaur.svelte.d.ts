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
export type GiCentaurProps = typeof __propDef.props;
export type GiCentaurEvents = typeof __propDef.events;
export type GiCentaurSlots = typeof __propDef.slots;
export default class GiCentaur extends SvelteComponentTyped<GiCentaurProps, GiCentaurEvents, GiCentaurSlots> {
}
export {};
