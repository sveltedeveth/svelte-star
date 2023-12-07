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
export type GiCorporalProps = typeof __propDef.props;
export type GiCorporalEvents = typeof __propDef.events;
export type GiCorporalSlots = typeof __propDef.slots;
export default class GiCorporal extends SvelteComponentTyped<GiCorporalProps, GiCorporalEvents, GiCorporalSlots> {
}
export {};
