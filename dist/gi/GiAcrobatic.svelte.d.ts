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
export type GiAcrobaticProps = typeof __propDef.props;
export type GiAcrobaticEvents = typeof __propDef.events;
export type GiAcrobaticSlots = typeof __propDef.slots;
export default class GiAcrobatic extends SvelteComponentTyped<GiAcrobaticProps, GiAcrobaticEvents, GiAcrobaticSlots> {
}
export {};
