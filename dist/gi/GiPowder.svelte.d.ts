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
export type GiPowderProps = typeof __propDef.props;
export type GiPowderEvents = typeof __propDef.events;
export type GiPowderSlots = typeof __propDef.slots;
export default class GiPowder extends SvelteComponentTyped<GiPowderProps, GiPowderEvents, GiPowderSlots> {
}
export {};
