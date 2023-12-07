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
export type GiSirenProps = typeof __propDef.props;
export type GiSirenEvents = typeof __propDef.events;
export type GiSirenSlots = typeof __propDef.slots;
export default class GiSiren extends SvelteComponentTyped<GiSirenProps, GiSirenEvents, GiSirenSlots> {
}
export {};
