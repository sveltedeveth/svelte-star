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
export type GiEvilBatProps = typeof __propDef.props;
export type GiEvilBatEvents = typeof __propDef.events;
export type GiEvilBatSlots = typeof __propDef.slots;
export default class GiEvilBat extends SvelteComponentTyped<GiEvilBatProps, GiEvilBatEvents, GiEvilBatSlots> {
}
export {};
