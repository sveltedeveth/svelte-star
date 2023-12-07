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
export type GiCoffinProps = typeof __propDef.props;
export type GiCoffinEvents = typeof __propDef.events;
export type GiCoffinSlots = typeof __propDef.slots;
export default class GiCoffin extends SvelteComponentTyped<GiCoffinProps, GiCoffinEvents, GiCoffinSlots> {
}
export {};
