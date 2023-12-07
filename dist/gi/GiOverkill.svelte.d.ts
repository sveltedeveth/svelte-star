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
export type GiOverkillProps = typeof __propDef.props;
export type GiOverkillEvents = typeof __propDef.events;
export type GiOverkillSlots = typeof __propDef.slots;
export default class GiOverkill extends SvelteComponentTyped<GiOverkillProps, GiOverkillEvents, GiOverkillSlots> {
}
export {};
