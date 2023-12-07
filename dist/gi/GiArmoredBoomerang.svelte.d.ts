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
export type GiArmoredBoomerangProps = typeof __propDef.props;
export type GiArmoredBoomerangEvents = typeof __propDef.events;
export type GiArmoredBoomerangSlots = typeof __propDef.slots;
export default class GiArmoredBoomerang extends SvelteComponentTyped<GiArmoredBoomerangProps, GiArmoredBoomerangEvents, GiArmoredBoomerangSlots> {
}
export {};
