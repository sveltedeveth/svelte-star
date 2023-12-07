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
export type GiShoutingProps = typeof __propDef.props;
export type GiShoutingEvents = typeof __propDef.events;
export type GiShoutingSlots = typeof __propDef.slots;
export default class GiShouting extends SvelteComponentTyped<GiShoutingProps, GiShoutingEvents, GiShoutingSlots> {
}
export {};
