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
export type GiAnarchyProps = typeof __propDef.props;
export type GiAnarchyEvents = typeof __propDef.events;
export type GiAnarchySlots = typeof __propDef.slots;
export default class GiAnarchy extends SvelteComponentTyped<GiAnarchyProps, GiAnarchyEvents, GiAnarchySlots> {
}
export {};
