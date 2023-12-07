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
export type GiScalpelStrikeProps = typeof __propDef.props;
export type GiScalpelStrikeEvents = typeof __propDef.events;
export type GiScalpelStrikeSlots = typeof __propDef.slots;
export default class GiScalpelStrike extends SvelteComponentTyped<GiScalpelStrikeProps, GiScalpelStrikeEvents, GiScalpelStrikeSlots> {
}
export {};
