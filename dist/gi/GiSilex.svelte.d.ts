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
export type GiSilexProps = typeof __propDef.props;
export type GiSilexEvents = typeof __propDef.events;
export type GiSilexSlots = typeof __propDef.slots;
export default class GiSilex extends SvelteComponentTyped<GiSilexProps, GiSilexEvents, GiSilexSlots> {
}
export {};
