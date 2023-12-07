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
export type GiDeadlyStrikeProps = typeof __propDef.props;
export type GiDeadlyStrikeEvents = typeof __propDef.events;
export type GiDeadlyStrikeSlots = typeof __propDef.slots;
export default class GiDeadlyStrike extends SvelteComponentTyped<GiDeadlyStrikeProps, GiDeadlyStrikeEvents, GiDeadlyStrikeSlots> {
}
export {};
