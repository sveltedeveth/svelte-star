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
export type GiMiteAltProps = typeof __propDef.props;
export type GiMiteAltEvents = typeof __propDef.events;
export type GiMiteAltSlots = typeof __propDef.slots;
export default class GiMiteAlt extends SvelteComponentTyped<GiMiteAltProps, GiMiteAltEvents, GiMiteAltSlots> {
}
export {};
