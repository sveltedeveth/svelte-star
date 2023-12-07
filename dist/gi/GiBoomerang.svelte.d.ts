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
export type GiBoomerangProps = typeof __propDef.props;
export type GiBoomerangEvents = typeof __propDef.events;
export type GiBoomerangSlots = typeof __propDef.slots;
export default class GiBoomerang extends SvelteComponentTyped<GiBoomerangProps, GiBoomerangEvents, GiBoomerangSlots> {
}
export {};
