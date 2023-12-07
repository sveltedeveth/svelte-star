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
export type GiMinionsProps = typeof __propDef.props;
export type GiMinionsEvents = typeof __propDef.events;
export type GiMinionsSlots = typeof __propDef.slots;
export default class GiMinions extends SvelteComponentTyped<GiMinionsProps, GiMinionsEvents, GiMinionsSlots> {
}
export {};
