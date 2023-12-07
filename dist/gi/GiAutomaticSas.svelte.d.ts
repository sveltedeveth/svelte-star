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
export type GiAutomaticSasProps = typeof __propDef.props;
export type GiAutomaticSasEvents = typeof __propDef.events;
export type GiAutomaticSasSlots = typeof __propDef.slots;
export default class GiAutomaticSas extends SvelteComponentTyped<GiAutomaticSasProps, GiAutomaticSasEvents, GiAutomaticSasSlots> {
}
export {};
