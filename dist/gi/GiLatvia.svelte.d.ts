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
export type GiLatviaProps = typeof __propDef.props;
export type GiLatviaEvents = typeof __propDef.events;
export type GiLatviaSlots = typeof __propDef.slots;
export default class GiLatvia extends SvelteComponentTyped<GiLatviaProps, GiLatviaEvents, GiLatviaSlots> {
}
export {};
