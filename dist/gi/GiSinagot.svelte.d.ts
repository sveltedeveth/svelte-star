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
export type GiSinagotProps = typeof __propDef.props;
export type GiSinagotEvents = typeof __propDef.events;
export type GiSinagotSlots = typeof __propDef.slots;
export default class GiSinagot extends SvelteComponentTyped<GiSinagotProps, GiSinagotEvents, GiSinagotSlots> {
}
export {};
