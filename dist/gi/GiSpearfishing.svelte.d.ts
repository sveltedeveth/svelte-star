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
export type GiSpearfishingProps = typeof __propDef.props;
export type GiSpearfishingEvents = typeof __propDef.events;
export type GiSpearfishingSlots = typeof __propDef.slots;
export default class GiSpearfishing extends SvelteComponentTyped<GiSpearfishingProps, GiSpearfishingEvents, GiSpearfishingSlots> {
}
export {};
