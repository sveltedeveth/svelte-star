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
export type GiDungeonGateProps = typeof __propDef.props;
export type GiDungeonGateEvents = typeof __propDef.events;
export type GiDungeonGateSlots = typeof __propDef.slots;
export default class GiDungeonGate extends SvelteComponentTyped<GiDungeonGateProps, GiDungeonGateEvents, GiDungeonGateSlots> {
}
export {};
