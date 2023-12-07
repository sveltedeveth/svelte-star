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
export type GiBowlingStrikeProps = typeof __propDef.props;
export type GiBowlingStrikeEvents = typeof __propDef.events;
export type GiBowlingStrikeSlots = typeof __propDef.slots;
export default class GiBowlingStrike extends SvelteComponentTyped<GiBowlingStrikeProps, GiBowlingStrikeEvents, GiBowlingStrikeSlots> {
}
export {};
