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
export type GiVitruvianManProps = typeof __propDef.props;
export type GiVitruvianManEvents = typeof __propDef.events;
export type GiVitruvianManSlots = typeof __propDef.slots;
export default class GiVitruvianMan extends SvelteComponentTyped<GiVitruvianManProps, GiVitruvianManEvents, GiVitruvianManSlots> {
}
export {};
