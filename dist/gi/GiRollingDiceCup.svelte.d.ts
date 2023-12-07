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
export type GiRollingDiceCupProps = typeof __propDef.props;
export type GiRollingDiceCupEvents = typeof __propDef.events;
export type GiRollingDiceCupSlots = typeof __propDef.slots;
export default class GiRollingDiceCup extends SvelteComponentTyped<GiRollingDiceCupProps, GiRollingDiceCupEvents, GiRollingDiceCupSlots> {
}
export {};
