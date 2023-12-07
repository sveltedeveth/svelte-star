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
export type GiVolcanoProps = typeof __propDef.props;
export type GiVolcanoEvents = typeof __propDef.events;
export type GiVolcanoSlots = typeof __propDef.slots;
export default class GiVolcano extends SvelteComponentTyped<GiVolcanoProps, GiVolcanoEvents, GiVolcanoSlots> {
}
export {};
