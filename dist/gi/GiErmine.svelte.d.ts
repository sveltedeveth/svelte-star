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
export type GiErmineProps = typeof __propDef.props;
export type GiErmineEvents = typeof __propDef.events;
export type GiErmineSlots = typeof __propDef.slots;
export default class GiErmine extends SvelteComponentTyped<GiErmineProps, GiErmineEvents, GiErmineSlots> {
}
export {};
