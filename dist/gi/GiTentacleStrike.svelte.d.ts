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
export type GiTentacleStrikeProps = typeof __propDef.props;
export type GiTentacleStrikeEvents = typeof __propDef.events;
export type GiTentacleStrikeSlots = typeof __propDef.slots;
export default class GiTentacleStrike extends SvelteComponentTyped<GiTentacleStrikeProps, GiTentacleStrikeEvents, GiTentacleStrikeSlots> {
}
export {};
