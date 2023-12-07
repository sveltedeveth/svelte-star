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
export type GiBodySwappingProps = typeof __propDef.props;
export type GiBodySwappingEvents = typeof __propDef.events;
export type GiBodySwappingSlots = typeof __propDef.slots;
export default class GiBodySwapping extends SvelteComponentTyped<GiBodySwappingProps, GiBodySwappingEvents, GiBodySwappingSlots> {
}
export {};
