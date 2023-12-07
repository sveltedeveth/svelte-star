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
export type GiGothicCrossProps = typeof __propDef.props;
export type GiGothicCrossEvents = typeof __propDef.events;
export type GiGothicCrossSlots = typeof __propDef.slots;
export default class GiGothicCross extends SvelteComponentTyped<GiGothicCrossProps, GiGothicCrossEvents, GiGothicCrossSlots> {
}
export {};
