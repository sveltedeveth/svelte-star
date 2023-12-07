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
export type GiPillProps = typeof __propDef.props;
export type GiPillEvents = typeof __propDef.events;
export type GiPillSlots = typeof __propDef.slots;
export default class GiPill extends SvelteComponentTyped<GiPillProps, GiPillEvents, GiPillSlots> {
}
export {};
