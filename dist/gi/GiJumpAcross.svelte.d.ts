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
export type GiJumpAcrossProps = typeof __propDef.props;
export type GiJumpAcrossEvents = typeof __propDef.events;
export type GiJumpAcrossSlots = typeof __propDef.slots;
export default class GiJumpAcross extends SvelteComponentTyped<GiJumpAcrossProps, GiJumpAcrossEvents, GiJumpAcrossSlots> {
}
export {};
