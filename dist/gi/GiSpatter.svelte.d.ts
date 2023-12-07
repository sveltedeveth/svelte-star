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
export type GiSpatterProps = typeof __propDef.props;
export type GiSpatterEvents = typeof __propDef.events;
export type GiSpatterSlots = typeof __propDef.slots;
export default class GiSpatter extends SvelteComponentTyped<GiSpatterProps, GiSpatterEvents, GiSpatterSlots> {
}
export {};
