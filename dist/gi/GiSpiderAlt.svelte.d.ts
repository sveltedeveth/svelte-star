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
export type GiSpiderAltProps = typeof __propDef.props;
export type GiSpiderAltEvents = typeof __propDef.events;
export type GiSpiderAltSlots = typeof __propDef.slots;
export default class GiSpiderAlt extends SvelteComponentTyped<GiSpiderAltProps, GiSpiderAltEvents, GiSpiderAltSlots> {
}
export {};
