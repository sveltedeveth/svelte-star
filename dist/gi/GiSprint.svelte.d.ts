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
export type GiSprintProps = typeof __propDef.props;
export type GiSprintEvents = typeof __propDef.events;
export type GiSprintSlots = typeof __propDef.slots;
export default class GiSprint extends SvelteComponentTyped<GiSprintProps, GiSprintEvents, GiSprintSlots> {
}
export {};
