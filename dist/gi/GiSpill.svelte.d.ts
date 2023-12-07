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
export type GiSpillProps = typeof __propDef.props;
export type GiSpillEvents = typeof __propDef.events;
export type GiSpillSlots = typeof __propDef.slots;
export default class GiSpill extends SvelteComponentTyped<GiSpillProps, GiSpillEvents, GiSpillSlots> {
}
export {};
