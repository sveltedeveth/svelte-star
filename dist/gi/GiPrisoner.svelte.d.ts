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
export type GiPrisonerProps = typeof __propDef.props;
export type GiPrisonerEvents = typeof __propDef.events;
export type GiPrisonerSlots = typeof __propDef.slots;
export default class GiPrisoner extends SvelteComponentTyped<GiPrisonerProps, GiPrisonerEvents, GiPrisonerSlots> {
}
export {};
