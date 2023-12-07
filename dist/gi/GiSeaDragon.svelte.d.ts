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
export type GiSeaDragonProps = typeof __propDef.props;
export type GiSeaDragonEvents = typeof __propDef.events;
export type GiSeaDragonSlots = typeof __propDef.slots;
export default class GiSeaDragon extends SvelteComponentTyped<GiSeaDragonProps, GiSeaDragonEvents, GiSeaDragonSlots> {
}
export {};
