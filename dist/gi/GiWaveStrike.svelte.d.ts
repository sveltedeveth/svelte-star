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
export type GiWaveStrikeProps = typeof __propDef.props;
export type GiWaveStrikeEvents = typeof __propDef.events;
export type GiWaveStrikeSlots = typeof __propDef.slots;
export default class GiWaveStrike extends SvelteComponentTyped<GiWaveStrikeProps, GiWaveStrikeEvents, GiWaveStrikeSlots> {
}
export {};
