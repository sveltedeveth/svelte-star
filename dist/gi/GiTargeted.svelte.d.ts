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
export type GiTargetedProps = typeof __propDef.props;
export type GiTargetedEvents = typeof __propDef.events;
export type GiTargetedSlots = typeof __propDef.slots;
export default class GiTargeted extends SvelteComponentTyped<GiTargetedProps, GiTargetedEvents, GiTargetedSlots> {
}
export {};
