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
export type GiDoubleDragonProps = typeof __propDef.props;
export type GiDoubleDragonEvents = typeof __propDef.events;
export type GiDoubleDragonSlots = typeof __propDef.slots;
export default class GiDoubleDragon extends SvelteComponentTyped<GiDoubleDragonProps, GiDoubleDragonEvents, GiDoubleDragonSlots> {
}
export {};
