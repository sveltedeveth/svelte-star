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
export type GiForkliftProps = typeof __propDef.props;
export type GiForkliftEvents = typeof __propDef.events;
export type GiForkliftSlots = typeof __propDef.slots;
export default class GiForklift extends SvelteComponentTyped<GiForkliftProps, GiForkliftEvents, GiForkliftSlots> {
}
export {};
