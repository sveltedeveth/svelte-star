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
export type GiSpaceSuitProps = typeof __propDef.props;
export type GiSpaceSuitEvents = typeof __propDef.events;
export type GiSpaceSuitSlots = typeof __propDef.slots;
export default class GiSpaceSuit extends SvelteComponentTyped<GiSpaceSuitProps, GiSpaceSuitEvents, GiSpaceSuitSlots> {
}
export {};
