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
export type GiHornedHelmProps = typeof __propDef.props;
export type GiHornedHelmEvents = typeof __propDef.events;
export type GiHornedHelmSlots = typeof __propDef.slots;
export default class GiHornedHelm extends SvelteComponentTyped<GiHornedHelmProps, GiHornedHelmEvents, GiHornedHelmSlots> {
}
export {};
