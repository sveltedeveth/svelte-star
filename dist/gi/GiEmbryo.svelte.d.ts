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
export type GiEmbryoProps = typeof __propDef.props;
export type GiEmbryoEvents = typeof __propDef.events;
export type GiEmbryoSlots = typeof __propDef.slots;
export default class GiEmbryo extends SvelteComponentTyped<GiEmbryoProps, GiEmbryoEvents, GiEmbryoSlots> {
}
export {};
